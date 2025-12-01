import React, { useState, useEffect } from 'react';
import { MISSIONS_DATA, getProblems } from './constants';
import { Mission, SubMission, AppScreen, Difficulty, Problem, UserState } from './types';
import { ChevronRight, CheckCircle, AlertCircle, ArrowLeft, Trophy, BookOpen, RotateCcw, Zap, Sparkles } from 'lucide-react';
import { AITutor } from './components/AITutor';

const App: React.FC = () => {
  // Navigation State
  const [currentScreen, setCurrentScreen] = useState<AppScreen>(AppScreen.DASHBOARD);
  const [selectedMission, setSelectedMission] = useState<Mission | null>(null);
  const [selectedSubMission, setSelectedSubMission] = useState<SubMission | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty | null>(null);

  // User State (Mock)
  const [userState, setUserState] = useState<UserState>({
    xp: 0,
    level: 'Novice',
    completedProblems: []
  });

  // Quiz State
  const [currentProblems, setCurrentProblems] = useState<Problem[]>([]);
  const [currentProblemIndex, setCurrentProblemIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Update level based on XP
  useEffect(() => {
    let newLevel: UserState['level'] = 'Novice';
    if (userState.xp > 2500) newLevel = 'Master';
    else if (userState.xp > 1000) newLevel = 'Intermediate';
    
    if (newLevel !== userState.level) {
      setUserState(prev => ({ ...prev, level: newLevel }));
    }
  }, [userState.xp]);

  const startMission = (mission: Mission) => {
    setSelectedMission(mission);
    setCurrentScreen(AppScreen.DIFFICULTY_SELECT);
  };

  const selectDifficulty = (diff: Difficulty, sub: SubMission) => {
    if (!selectedMission) return;
    
    setSelectedDifficulty(diff);
    setSelectedSubMission(sub);
    
    // Fetch static problems
    const problems = getProblems(selectedMission.id, diff);
    
    if (problems.length > 0) {
      setCurrentProblems(problems);
      setCurrentProblemIndex(0);
      setScore(0);
      setShowExplanation(false);
      setSelectedChoiceId(null);
      setIsCorrect(null);
      setCurrentScreen(AppScreen.QUIZ);
    } else {
      alert("ขออภัย ไม่พบโจทย์สำหรับระดับความยากนี้");
    }
  };

  const handleChoiceSelect = (choiceId: string, isChoiceCorrect: boolean, problemDiff: Difficulty) => {
    if (selectedChoiceId) return;

    setSelectedChoiceId(choiceId);
    setIsCorrect(isChoiceCorrect);
    setShowExplanation(true);

    if (isChoiceCorrect) {
      setScore(s => s + 1);
      // XP Calculation
      let xpGain = 100;
      if (problemDiff === Difficulty.MEDIUM) xpGain = 200;
      if (problemDiff === Difficulty.HARD) xpGain = 300;
      setUserState(prev => ({ ...prev, xp: prev.xp + xpGain }));
    }
  };

  const nextProblem = () => {
    if (currentProblemIndex + 1 < currentProblems.length) {
      setCurrentProblemIndex(prev => prev + 1);
      setShowExplanation(false);
      setSelectedChoiceId(null);
      setIsCorrect(null);
    } else {
      setCurrentScreen(AppScreen.VICTORY);
    }
  };

  const goHome = () => {
    setCurrentScreen(AppScreen.DASHBOARD);
    setSelectedMission(null);
    setSelectedSubMission(null);
    setCurrentProblems([]);
  };

  // --- Renderers ---

  const renderDashboard = () => (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="mb-16 text-center relative">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10"></div>
        <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-6 drop-shadow-2xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Math Series
          </span>
          <span className="block text-2xl md:text-3xl mt-2 text-slate-400 font-light tracking-widest uppercase">
            QUEST
          </span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          พิชิตโลกแห่งอนุกรม เรียนรู้คณิตศาสตร์ผ่าน 4 ภารกิจสุดท้าทาย พัฒนาทักษะของคุณด้วยโจทย์ที่คัดสรรมาอย่างดี พร้อมเฉลยละเอียด
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MISSIONS_DATA.map((mission, index) => (
          <div 
            key={mission.id}
            onClick={() => startMission(mission)}
            className="group relative bg-slate-900 rounded-[2rem] overflow-hidden border border-slate-800 hover:border-purple-500/50 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
          >
            {/* Image Overlay */}
            <div className="h-64 overflow-hidden relative">
              <div className="absolute inset-0 bg-slate-900/60 group-hover:bg-slate-900/40 transition-colors z-10" />
              <img 
                src={mission.image} 
                alt={mission.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-cyan-300">
                 MISSION 0{index + 1}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 relative z-20 -mt-12">
              <div className="bg-slate-800/80 backdrop-blur-xl p-4 rounded-2xl border border-white/5 shadow-xl mb-4 inline-flex items-center justify-center w-16 h-16 text-3xl">
                {mission.icon}
              </div>
              <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all">
                {mission.title}
              </h2>
              <p className="text-slate-400 mb-6 font-light leading-relaxed">
                {mission.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800">
                 <div className="flex gap-2">
                    <span className="flex items-center gap-1 text-xs text-purple-400 bg-purple-400/10 px-2 py-1 rounded-md">
                      <Sparkles size={10} /> Interactive Quiz
                    </span>
                 </div>
                 <button className="bg-slate-800 text-white px-6 py-2 rounded-full font-bold text-sm group-hover:bg-white group-hover:text-slate-900 transition-colors flex items-center gap-2">
                    เริ่มภารกิจ <ChevronRight size={14} />
                 </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDifficultySelect = () => {
    if (!selectedMission) return null;
    const sub = selectedMission.subMissions[0];

    return (
      <div className="min-h-screen flex items-center justify-center p-6 relative">
         {/* Background Elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full"></div>
         </div>

         <div className="max-w-4xl w-full bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-12 shadow-2xl relative z-10">
            <button onClick={goHome} className="absolute top-8 left-8 text-slate-500 hover:text-white transition-colors flex items-center gap-2">
               <ArrowLeft size={20} /> ย้อนกลับ
            </button>
            
            <div className="text-center mb-12">
               <div className="text-6xl mb-4 animate-bounce-slow">{selectedMission.icon}</div>
               <h1 className="text-4xl font-bold text-white mb-2">{sub.title}</h1>
               <p className="text-slate-400 text-lg">{sub.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div 
                  onClick={() => selectDifficulty(Difficulty.EASY, sub)}
                  className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-green-500/50 p-6 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 group"
               >
                  <div className="text-green-400 mb-4 bg-green-400/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">🌱</div>
                  <h3 className="text-xl font-bold text-white mb-2">Novice</h3>
                  <p className="text-sm text-slate-400">เหมาะสำหรับผู้เริ่มต้น ตัวเลขน้อย เข้าใจง่าย</p>
               </div>
               
               <div 
                  onClick={() => selectDifficulty(Difficulty.MEDIUM, sub)}
                  className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/50 p-6 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 group"
               >
                  <div className="text-cyan-400 mb-4 bg-cyan-400/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">⚡</div>
                  <h3 className="text-xl font-bold text-white mb-2">Advance</h3>
                  <p className="text-sm text-slate-400">ท้าทายความสามารถ ตัวเลขหลากหลาย</p>
               </div>

               <div 
                  onClick={() => selectDifficulty(Difficulty.HARD, sub)}
                  className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-purple-500/50 p-6 rounded-2xl cursor-pointer transition-all hover:-translate-y-1 group"
               >
                  <div className="text-purple-400 mb-4 bg-purple-400/10 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">🔥</div>
                  <h3 className="text-xl font-bold text-white mb-2">Expert</h3>
                  <p className="text-sm text-slate-400">สำหรับผู้เชี่ยวชาญ ตัวเลขซับซ้อนและโจทย์ยาก</p>
               </div>
            </div>
         </div>
      </div>
    )
  }

  const renderQuiz = () => {
    if (!selectedSubMission || currentProblems.length === 0) return null;
    const problem = currentProblems[currentProblemIndex];
    const progress = ((currentProblemIndex) / currentProblems.length) * 100;
    
    // Difficulty Color mapping
    const diffColor = 
      problem.difficulty === Difficulty.EASY ? 'text-green-400' :
      problem.difficulty === Difficulty.MEDIUM ? 'text-cyan-400' : 'text-purple-400';

    return (
      <div className="min-h-screen flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="h-16 border-b border-slate-800 bg-slate-900/80 backdrop-blur flex items-center justify-between px-6 z-20">
            <button onClick={goHome} className="flex items-center text-slate-400 hover:text-white transition-colors gap-2 text-sm font-bold uppercase tracking-wider">
               <ArrowLeft size={16} /> ออกจากการทำโจทย์
            </button>
            <div className="flex items-center gap-4">
               <div className={`px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-bold uppercase tracking-widest ${diffColor}`}>
                  {problem.difficulty}
               </div>
            </div>
        </header>

        {/* Main Split Layout */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
           
           {/* Left Panel: Question */}
           <div className="flex-1 overflow-y-auto p-6 lg:p-12 pb-32">
              <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                   <span className="text-slate-500 font-mono text-sm mb-2 block">QUESTION {currentProblemIndex + 1} OF {currentProblems.length}</span>
                   <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                   </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-3xl mb-8 shadow-inner relative">
                    <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed" dangerouslySetInnerHTML={{ __html: problem.question }} />
                </div>

                <div className="space-y-4">
                  {problem.choices.map((choice) => {
                    let stateClass = "border-slate-700 bg-slate-900 text-slate-300 hover:border-slate-500 hover:bg-slate-800";
                    
                    if (selectedChoiceId === choice.id) {
                       if (choice.isCorrect) stateClass = "border-green-500 bg-green-500/20 text-green-300 ring-1 ring-green-500";
                       else stateClass = "border-red-500 bg-red-500/20 text-red-300 ring-1 ring-red-500";
                    } else if (selectedChoiceId !== null && choice.isCorrect) {
                       stateClass = "border-green-500/50 bg-green-500/10 text-green-300/70";
                    } else if (selectedChoiceId !== null) {
                       stateClass = "opacity-50 border-slate-800 bg-slate-900";
                    }

                    return (
                      <button
                        key={choice.id}
                        onClick={() => handleChoiceSelect(choice.id, choice.isCorrect, problem.difficulty)}
                        disabled={selectedChoiceId !== null}
                        className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex justify-between items-center group font-medium text-lg ${stateClass}`}
                      >
                        <span dangerouslySetInnerHTML={{ __html: choice.text }} />
                        {selectedChoiceId === choice.id && (
                           choice.isCorrect ? <CheckCircle className="animate-scale-in text-green-400" /> : <AlertCircle className="animate-scale-in text-red-400" />
                        )}
                      </button>
                    )
                  })}
                </div>
              </div>
           </div>

           {/* Right Panel: Explanation & AI Tutor */}
           <div className="lg:w-[450px] bg-slate-900 border-l border-slate-800 flex flex-col relative z-10 shadow-2xl">
              <div className="p-6 border-b border-slate-800 bg-slate-900/95 sticky top-0 z-10 flex justify-between items-center">
                 <h3 className="font-bold text-white flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                       <Zap size={18} className="text-white" />
                    </div>
                    AI Math Tutor
                 </h3>
                 <div className="text-xs text-slate-500">พร้อมช่วยเหลือตลอด 24 ชม.</div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                 {/* Default State */}
                 {!showExplanation && (
                    <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
                       <div className="flex gap-4 mb-4">
                          <div className="w-10 h-10 rounded-full bg-slate-700 flex-shrink-0 flex items-center justify-center">🤖</div>
                          <div className="bg-slate-800 p-4 rounded-2xl rounded-tl-none text-slate-300 text-sm leading-relaxed border border-slate-700">
                             สวัสดี! ครูเป็น AI ผู้ช่วยสอนคณิตศาสตร์ ติดขัดตรงไหน หรืออยากได้คำใบ้ พิมพ์ถามได้เลยครับ 👇
                          </div>
                       </div>
                    </div>
                 )}

                 {/* Explanation Steps */}
                 {showExplanation && (
                    <div className="animate-fade-in-up">
                       <div className="flex items-center gap-2 mb-6 text-green-400 font-bold uppercase tracking-widest text-xs">
                          <CheckCircle size={14} /> เฉลยละเอียดทีละขั้นตอน
                       </div>
                       
                       <div className="relative border-l-2 border-slate-800 pl-8 ml-4 space-y-8">
                          {problem.explanationSteps?.map((step, idx) => (
                             <div key={idx} className="relative group">
                                <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-cyan-400 group-hover:bg-cyan-900 transition-colors flex items-center justify-center text-[10px] font-bold text-slate-400">
                                   {idx + 1}
                                </div>
                                <div className="text-slate-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: step }} />
                             </div>
                          ))}
                          
                          {/* Conclusion */}
                          <div className="bg-slate-800 p-4 rounded-xl border-l-4 border-purple-500 text-slate-200 text-sm mt-4 font-medium">
                             สรุป: {problem.explanation}
                          </div>
                       </div>
                    </div>
                 )}
                 
                 {/* Spacer for AI Input area */}
                 <div className="h-24"></div>
              </div>

              {/* Bottom Area: Next Button or AI Input */}
              <div className="p-4 border-t border-slate-800 bg-slate-900 absolute bottom-0 w-full">
                 {showExplanation ? (
                    <button 
                       onClick={nextProblem}
                       className="w-full bg-white text-slate-900 hover:bg-slate-200 font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-white/5"
                    >
                       {currentProblemIndex + 1 === currentProblems.length ? 'สรุปผลคะแนน' : 'ทำข้อต่อไป'} <ChevronRight size={20} />
                    </button>
                 ) : (
                    <AITutor question={problem.question} context={`${selectedSubMission.title} - ${problem.question}`} />
                 )}
              </div>
           </div>
        </div>
      </div>
    );
  };

  const renderVictory = () => {
    if (!selectedSubMission) return null;
    const percentage = Math.round((score / currentProblems.length) * 100);
    
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-950 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full blur-[100px] animate-pulse-slow"></div>
        </div>

        <div className="max-w-md w-full relative z-10 text-center">
          <div className="relative inline-block mb-8">
             <div className="absolute inset-0 bg-yellow-500 blur-2xl opacity-20 animate-pulse"></div>
             <Trophy size={80} className="text-yellow-400 relative z-10 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
          </div>
          
          <h1 className="text-4xl font-black text-white mb-2">ภารกิจเสร็จสิ้น!</h1>
          <p className="text-slate-400 mb-8 font-light tracking-wide">{selectedSubMission.title}</p>

          <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 shadow-2xl mb-8">
             <div className="flex justify-center items-end gap-2 mb-2">
                <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">{score}</span>
                <span className="text-2xl text-slate-500 font-bold mb-2">/{currentProblems.length}</span>
             </div>
             <div className="h-2 bg-slate-800 rounded-full overflow-hidden mb-4">
                <div className="h-full bg-gradient-to-r from-green-400 to-cyan-400" style={{ width: `${percentage}%` }}></div>
             </div>
             <p className="text-slate-300 font-medium">
                {percentage >= 80 ? 'ระดับเซียน! คุณเข้าใจเรื่องนี้อย่างถ่องแท้' : percentage >= 50 ? 'ทำได้ดี! ฝึกฝนอีกนิดจะเก่งขึ้นแน่นอน' : 'ไม่ต้องเสียใจ! ลองทบทวนและทำใหม่อีกครั้งนะ'}
             </p>
          </div>

          <div className="flex gap-4">
             <button onClick={() => selectDifficulty(selectedDifficulty!, selectedSubMission)} className="flex-1 bg-slate-800 hover:bg-slate-700 text-white py-4 rounded-2xl font-bold transition-colors flex items-center justify-center gap-2">
                <RotateCcw size={18} /> ทำอีกครั้ง
             </button>
             <button onClick={goHome} className="flex-1 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-purple-900/30 flex items-center justify-center gap-2">
                <BookOpen size={18} /> หน้าหลัก
             </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-purple-500/30">
      {/* Global Header (Only on Dashboard) */}
      {currentScreen === AppScreen.DASHBOARD && (
        <nav className="border-b border-slate-900 bg-slate-950/50 backdrop-blur-md sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                  <span className="font-black text-lg">Σ</span>
               </div>
               <span className="font-bold text-xl tracking-tight text-white hidden sm:block">MathSeries</span>
            </div>

            <div className="flex items-center gap-6">
               <div className="flex items-center gap-3 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">
                  <div className="flex flex-col items-end">
                     <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Level</span>
                     <span className={`text-sm font-bold ${userState.level === 'Master' ? 'text-purple-400' : userState.level === 'Intermediate' ? 'text-cyan-400' : 'text-green-400'}`}>
                        {userState.level}
                     </span>
                  </div>
                  <div className="w-px h-8 bg-slate-800"></div>
                  <div className="flex flex-col items-end">
                     <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">XP</span>
                     <span className="text-sm font-bold text-white">{userState.xp}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center">
                     <Trophy size={16} className="text-yellow-500" />
                  </div>
               </div>
               
               <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center text-slate-900 font-bold">
                  P
               </div>
            </div>
          </div>
        </nav>
      )}

      {/* Main Content Router */}
      <main className="animate-fade-in">
        {currentScreen === AppScreen.DASHBOARD && renderDashboard()}
        {currentScreen === AppScreen.DIFFICULTY_SELECT && renderDifficultySelect()}
        {currentScreen === AppScreen.QUIZ && renderQuiz()}
        {currentScreen === AppScreen.VICTORY && renderVictory()}
      </main>
    </div>
  );
};

export default App;