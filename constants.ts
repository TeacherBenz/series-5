import { Mission, MissionStatus, Difficulty, Problem } from './types';

// --- Static Problem Database ---

const createProblem = (
  id: string, 
  question: string, 
  choices: { id: string, text: string, isCorrect: boolean }[], 
  explanation: string, 
  explanationSteps: string[],
  difficulty: Difficulty
): Problem => ({
  id,
  question,
  choices,
  explanation,
  explanationSteps,
  difficulty
});

// Helper to retrieve problems
export const getProblems = (missionId: string, difficulty: Difficulty): Problem[] => {
  const key = `${missionId}-${difficulty}`;
  return PROBLEM_DATABASE[key] || [];
};

const PROBLEM_DATABASE: Record<string, Problem[]> = {
  // ==========================================
  // MISSION 1: Arithmetic Sequence (ลำดับเลขคณิต)
  // ==========================================
  
  'm1-EASY': [
    createProblem('m1-e1', 'ลำดับในข้อใดเป็น "ลำดับเลขคณิต" ?', [
      { id: 'c1', text: '2, 4, 8, 16, ...', isCorrect: false },
      { id: 'c2', text: '3, 6, 9, 12, ...', isCorrect: true },
      { id: 'c3', text: '1, 4, 9, 16, ...', isCorrect: false },
      { id: 'c4', text: '5, 5, 5, 5, ...', isCorrect: false }
    ], 'ลำดับเลขคณิตต้องมีผลต่างร่วม (d) เท่ากันทุกพจน์', ['3, 6, 9, 12 มีผลต่างร่วม d = 3 (6-3=3, 9-6=3) <br>ส่วน 2, 4, 8, 16 เป็นเรขาคณิต (x2)'], Difficulty.EASY),
    createProblem('m1-e2', 'จงหาผลต่างร่วม (d) ของลำดับเลขคณิต: 10, 7, 4, 1, ...', [
      { id: 'c1', text: '3', isCorrect: false },
      { id: 'c2', text: '-3', isCorrect: true },
      { id: 'c3', text: '4', isCorrect: false },
      { id: 'c4', text: '-4', isCorrect: false }
    ], 'ผลต่างร่วม d = พจน์ขวา - พจน์ซ้าย', ['d = 7 - 10 = -3', 'd = 4 - 7 = -3'], Difficulty.EASY),
    createProblem('m1-e3', 'จากลำดับเลขคณิต 2, 5, 8, ... พจน์ถัดไปคือเลขอะไร?', [
      { id: 'c1', text: '10', isCorrect: false },
      { id: 'c2', text: '11', isCorrect: true },
      { id: 'c3', text: '12', isCorrect: false },
      { id: 'c4', text: '13', isCorrect: false }
    ], 'เพิ่มขึ้นทีละ 3', ['จาก 2 ไป 5 (+3)', 'จาก 5 ไป 8 (+3)', 'ดังนั้น 8 + 3 = 11'], Difficulty.EASY),
    createProblem('m1-e4', 'สูตรพจน์ทั่วไปของลำดับเลขคณิตคือข้อใด?', [
      { id: 'c1', text: 'a<sub>n</sub> = a<sub>1</sub> + (n-1)d', isCorrect: true },
      { id: 'c2', text: 'a<sub>n</sub> = a<sub>1</sub>r<sup>n-1</sup>', isCorrect: false },
      { id: 'c3', text: 'a<sub>n</sub> = n/2 (a<sub>1</sub> + a<sub>n</sub>)', isCorrect: false },
      { id: 'c4', text: 'a<sub>n</sub> = a<sub>1</sub> + nd', isCorrect: false }
    ], 'สูตรมาตรฐานของลำดับเลขคณิต', ['สูตรคือ a<sub>n</sub> = a<sub>1</sub> + (n-1)d'], Difficulty.EASY),
    createProblem('m1-e5', 'จงหาพจน์ที่ 5 (a<sub>5</sub>) ของลำดับ -5, -2, 1, 4, ...', [
      { id: 'c1', text: '6', isCorrect: false },
      { id: 'c2', text: '7', isCorrect: true },
      { id: 'c3', text: '8', isCorrect: false },
      { id: 'c4', text: '9', isCorrect: false }
    ], 'แทนค่าในสูตร หรือนับต่อไปเรื่อยๆ', ['ลำดับเพิ่มขึ้นทีละ 3 (d=3)', 'พจน์ที่ 4 คือ 4', 'พจน์ที่ 5 คือ 4 + 3 = 7'], Difficulty.EASY),
    // New Questions
    createProblem('m1-e6', 'ลำดับ 100, 90, 80, 70, ... พจน์ถัดไปคือ?', [
      { id: 'c1', text: '50', isCorrect: false },
      { id: 'c2', text: '60', isCorrect: true },
      { id: 'c3', text: '65', isCorrect: false },
      { id: 'c4', text: '55', isCorrect: false }
    ], 'ลดลงทีละ 10', ['70 - 10 = 60'], Difficulty.EASY),
    createProblem('m1-e7', 'ถ้า a<sub>1</sub> = 10 และ d = 2 จงหาพจน์ที่ 3 (a<sub>3</sub>)', [
      { id: 'c1', text: '12', isCorrect: false },
      { id: 'c2', text: '14', isCorrect: true },
      { id: 'c3', text: '16', isCorrect: false },
      { id: 'c4', text: '18', isCorrect: false }
    ], 'แทนค่าในสูตร หรือบวกเพิ่ม', ['10, 12, 14'], Difficulty.EASY),
    createProblem('m1-e8', 'ข้อใดไม่ใช่ลำดับเลขคณิต', [
      { id: 'c1', text: '1, 2, 3, 4', isCorrect: false },
      { id: 'c2', text: '2, 4, 6, 8', isCorrect: false },
      { id: 'c3', text: '1, 2, 4, 8', isCorrect: true },
      { id: 'c4', text: '5, 10, 15, 20', isCorrect: false }
    ], 'เช็คผลต่างร่วม', ['1, 2, 4, 8 เป็นลำดับเรขาคณิต (x2)'], Difficulty.EASY),
    createProblem('m1-e9', 'พจน์ที่ 10 ของลำดับเลข (1, 3, 5, 7, ...) คือ?', [
      { id: 'c1', text: '17', isCorrect: false },
      { id: 'c2', text: '19', isCorrect: true },
      { id: 'c3', text: '21', isCorrect: false },
      { id: 'c4', text: '18', isCorrect: false }
    ], 'สูตรเลขคี่ 2n-1', ['2(10) - 1 = 19'], Difficulty.EASY),
    createProblem('m1-e10', 'ถ้า 3, x, 7 เป็นลำดับเลขคณิต จงหาค่า x', [
      { id: 'c1', text: '4', isCorrect: false },
      { id: 'c2', text: '5', isCorrect: true },
      { id: 'c3', text: '6', isCorrect: false },
      { id: 'c4', text: '4.5', isCorrect: false }
    ], 'x คือค่าเฉลี่ยของ 3 กับ 7', ['(3+7)/2 = 5'], Difficulty.EASY),
  ],

  'm1-MEDIUM': [
    createProblem('m1-m1', 'ลำดับเลขคณิต 3, 7, 11, 15, ... พจน์ที่ 106 (a<sub>106</sub>) มีค่าเท่ากับเท่าใด?', [
      { id: 'c1', text: '420', isCorrect: false },
      { id: 'c2', text: '423', isCorrect: true },
      { id: 'c3', text: '427', isCorrect: false },
      { id: 'c4', text: '431', isCorrect: false }
    ], 'ใช้สูตร a<sub>n</sub> = a<sub>1</sub> + (n-1)d', ['a<sub>1</sub> = 3, d = 4', 'a<sub>106</sub> = 3 + (106-1)(4)', 'a<sub>106</sub> = 3 + (105)(4)', 'a<sub>106</sub> = 3 + 420 = 423'], Difficulty.MEDIUM),
    createProblem('m1-m2', 'จงหาสูตรพจน์ทั่วไป (a<sub>n</sub>) ของลำดับเลขคณิต -5, -2, 1, 4, ...', [
      { id: 'c1', text: '3n - 8', isCorrect: true },
      { id: 'c2', text: '3n - 5', isCorrect: false },
      { id: 'c3', text: '-3n - 2', isCorrect: false },
      { id: 'c4', text: 'n - 6', isCorrect: false }
    ], 'หา d แล้วแทนค่าในสูตรทั่วไป', ['a<sub>1</sub> = -5, d = 3', 'a<sub>n</sub> = -5 + (n-1)(3)', 'a<sub>n</sub> = -5 + 3n - 3', 'a<sub>n</sub> = 3n - 8'], Difficulty.MEDIUM),
    createProblem('m1-m3', 'จำนวนเต็มตั้งแต่ 10 ถึง 100 ที่หารด้วย 6 ลงตัว มีกี่จำนวน?', [
      { id: 'c1', text: '14', isCorrect: false },
      { id: 'c2', text: '15', isCorrect: true },
      { id: 'c3', text: '16', isCorrect: false },
      { id: 'c4', text: '17', isCorrect: false }
    ], 'สร้างลำดับ 12, 18, ..., 96 แล้วหาค่า n', ['ตัวแรกที่หาร 6 ลงตัวคือ 12 (a<sub>1</sub>)', 'ตัวสุดท้ายคือ 96 (a<sub>n</sub>)', 'ใช้สูตร 96 = 12 + (n-1)6', '84 = (n-1)6 => 14 = n-1 => n = 15'], Difficulty.MEDIUM),
    createProblem('m1-m4', 'ถ้า a<sub>3</sub> = 12 และ a<sub>8</sub> = 37 เป็นลำดับเลขคณิต จงหาผลต่างร่วม (d)', [
      { id: 'c1', text: '3', isCorrect: false },
      { id: 'c2', text: '4', isCorrect: false },
      { id: 'c3', text: '5', isCorrect: true },
      { id: 'c4', text: '6', isCorrect: false }
    ], 'ใช้สูตร a<sub>m</sub> - a<sub>n</sub> = (m-n)d', ['a<sub>8</sub> - a<sub>3</sub> = (8-3)d', '37 - 12 = 5d', '25 = 5d => d = 5'], Difficulty.MEDIUM),
    createProblem('m1-m5', 'ผลบวก 10 พจน์แรกของลำดับเลขคณิต 2, 4, 6, ... คือเท่าใด', [
      { id: 'c1', text: '100', isCorrect: false },
      { id: 'c2', text: '110', isCorrect: true },
      { id: 'c3', text: '120', isCorrect: false },
      { id: 'c4', text: '90', isCorrect: false }
    ], 'ใช้สูตร S<sub>n</sub> = n/2 [2a<sub>1</sub> + (n-1)d]', ['S<sub>10</sub> = 10/2 [2(2) + (9)(2)]', 'S<sub>10</sub> = 5 [4 + 18]', 'S<sub>10</sub> = 5 * 22 = 110'], Difficulty.MEDIUM),
    // New Questions
    createProblem('m1-m6', 'พจน์ที่เท่าใดของลำดับ 2, 6, 10, ... มีค่าเท่ากับ 42', [
      { id: 'c1', text: '10', isCorrect: false },
      { id: 'c2', text: '11', isCorrect: true },
      { id: 'c3', text: '12', isCorrect: false },
      { id: 'c4', text: '13', isCorrect: false }
    ], 'แก้สมการหา n', ['42 = 2 + (n-1)4', '40 = 4(n-1)', '10 = n-1 => n = 11'], Difficulty.MEDIUM),
    createProblem('m1-m7', 'ลำดับเลขคณิตที่มี a<sub>1</sub> = 20 และ a<sub>5</sub> = 8 จงหา d', [
      { id: 'c1', text: '-2', isCorrect: false },
      { id: 'c2', text: '-3', isCorrect: true },
      { id: 'c3', text: '3', isCorrect: false },
      { id: 'c4', text: '-4', isCorrect: false }
    ], 'a<sub>5</sub> = a<sub>1</sub> + 4d', ['8 = 20 + 4d', '-12 = 4d', 'd = -3'], Difficulty.MEDIUM),
    createProblem('m1-m8', 'ผลบวกของ 1 + 2 + 3 + ... + 50 มีค่าเท่าใด', [
      { id: 'c1', text: '1225', isCorrect: false },
      { id: 'c2', text: '1275', isCorrect: true },
      { id: 'c3', text: '1300', isCorrect: false },
      { id: 'c4', text: '1250', isCorrect: false }
    ], 'สูตร n(n+1)/2', ['50(51)/2 = 25 * 51 = 1275'], Difficulty.MEDIUM),
    createProblem('m1-m9', 'กำหนด 4, x, y, 16 เป็นลำดับเลขคณิต จงหา x + y', [
      { id: 'c1', text: '18', isCorrect: false },
      { id: 'c2', text: '20', isCorrect: true },
      { id: 'c3', text: '22', isCorrect: false },
      { id: 'c4', text: '24', isCorrect: false }
    ], 'หา d ก่อน', ['16 = 4 + 3d => 12=3d => d=4', 'x=8, y=12', 'x+y = 20'], Difficulty.MEDIUM),
    createProblem('m1-m10', 'ถ้าพจน์ทั่วไปคือ a<sub>n</sub> = 5 - 2n จงหาผลบวก 3 พจน์แรก', [
      { id: 'c1', text: '-3', isCorrect: true },
      { id: 'c2', text: '-5', isCorrect: false },
      { id: 'c3', text: '0', isCorrect: false },
      { id: 'c4', text: '3', isCorrect: false }
    ], 'หา a1, a2, a3', ['a1=3, a2=1, a3=-1', '3 + 1 + (-1) = 3'], Difficulty.MEDIUM),
  ],

  'm1-HARD': [
    createProblem('m1-h1-fix', 'กำหนดให้ k, 2k+2, 4k+1 เป็นลำดับเลขคณิต จงหาค่าของ k', [
      { id: 'c1', text: '2', isCorrect: false },
      { id: 'c2', text: '3', isCorrect: true },
      { id: 'c3', text: '4', isCorrect: false },
      { id: 'c4', text: '5', isCorrect: false }
    ], 'ใช้สมบัติ พจน์กลาง - พจน์หน้า = พจน์หลัง - พจน์กลาง', ['(2k+2) - k = (4k+1) - (2k+2)', 'k + 2 = 2k - 1', 'k = 3', 'ตรวจสอบ: 3, 8, 13 (d=5) ถูกต้อง'], Difficulty.HARD),
    createProblem('m1-h2', 'ผลบวกของเลขคณิต 3 พจน์เรียงกันได้ 15 และผลคูณได้ 80 จงหาเลข 3 จำนวนนั้น', [
      { id: 'c1', text: '2, 5, 8', isCorrect: true },
      { id: 'c2', text: '3, 5, 7', isCorrect: false },
      { id: 'c3', text: '1, 5, 9', isCorrect: false },
      { id: 'c4', text: '4, 5, 6', isCorrect: false }
    ], 'สมมติให้เลขคือ a-d, a, a+d', ['ผลบวก: (a-d) + a + (a+d) = 15 => 3a = 15 => a = 5', 'ผลคูณ: (5-d)(5)(5+d) = 80', '25 - d<sup>2</sup> = 16 => d<sup>2</sup> = 9 => d = 3 หรือ -3', 'ถ้า d=3 ได้ 2, 5, 8'], Difficulty.HARD),
    createProblem('m1-h3', 'จงหาผลบวกของอนุกรม 5 + 9 + 13 + ... + 201', [
      { id: 'c1', text: '5050', isCorrect: false },
      { id: 'c2', text: '5150', isCorrect: true },
      { id: 'c3', text: '5250', isCorrect: false },
      { id: 'c4', text: '5350', isCorrect: false }
    ], 'หา n ก่อน แล้วใช้สูตร S<sub>n</sub>', ['a<sub>n</sub> = 201, a<sub>1</sub> = 5, d = 4', '201 = 5 + (n-1)4 => 196 = 4(n-1) => 49 = n-1 => n = 50', 'S<sub>50</sub> = 50/2 (5 + 201) = 25 * 206 = 5150'], Difficulty.HARD),
    createProblem('m1-h4', 'ไม้กองหนึ่งวางซ้อนกันเป็นชั้นๆ ชั้นล่างสุดมี 20 ท่อน ชั้นถัดขึ้นไปลดลงทีละ 1 ท่อน ถ้าชั้นบนสุดมี 1 ท่อน กองไม้นี้มีทั้งหมดกี่ท่อน', [
      { id: 'c1', text: '190', isCorrect: false },
      { id: 'c2', text: '200', isCorrect: false },
      { id: 'c3', text: '210', isCorrect: true },
      { id: 'c4', text: '220', isCorrect: false }
    ], 'เป็นผลบวกเลขคณิต 1 ถึง 20', ['1 + 2 + 3 + ... + 20', 'S<sub>n</sub> = n(n+1)/2', 'S<sub>20</sub> = 20(21)/2 = 210'], Difficulty.HARD),
    createProblem('m1-h5', 'ถ้าผลบวก n พจน์แรกของ S<sub>n</sub> = 3n<sup>2</sup> + 2n จงหาพจน์ที่ 10 (a<sub>10</sub>)', [
      { id: 'c1', text: '57', isCorrect: false },
      { id: 'c2', text: '59', isCorrect: true },
      { id: 'c3', text: '62', isCorrect: false },
      { id: 'c4', text: '320', isCorrect: false }
    ], 'ใช้สูตร a<sub>n</sub> = S<sub>n</sub> - S<sub>n-1</sub>', ['a<sub>10</sub> = S<sub>10</sub> - S<sub>9</sub>', 'S<sub>10</sub> = 3(100) + 20 = 320', 'S<sub>9</sub> = 3(81) + 18 = 243 + 18 = 261', 'a<sub>10</sub> = 320 - 261 = 59'], Difficulty.HARD),
    // New Questions
    createProblem('m1-h6', 'ลำดับเลขคณิตชุดหนึ่งมี a<sub>5</sub> + a<sub>10</sub> = 60 จงหา S<sub>14</sub>', [
      { id: 'c1', text: '400', isCorrect: false },
      { id: 'c2', text: '420', isCorrect: true },
      { id: 'c3', text: '440', isCorrect: false },
      { id: 'c4', text: '460', isCorrect: false }
    ], 'ใช้สูตร S<sub>n</sub> = n/2 (a<sub>1</sub> + a<sub>n</sub>)', ['a<sub>5</sub>+a<sub>10</sub> = (a<sub>1</sub>+4d) + (a<sub>1</sub>+9d) = 2a<sub>1</sub>+13d = 60', 'S<sub>14</sub> = 14/2 (2a<sub>1</sub>+13d) = 7(60) = 420'], Difficulty.HARD),
    createProblem('m1-h7', 'จำนวนเต็มระหว่าง 100 ถึง 500 ที่หารด้วย 9 ลงตัว มีผลบวกเท่าใด', [
      { id: 'c1', text: '13000', isCorrect: false },
      { id: 'c2', text: '13366', isCorrect: false },
      { id: 'c3', text: '13300', isCorrect: false },
      { id: 'c4', text: '13266', isCorrect: true }
    ], 'หาตัวแรก (108) และตัวท้าย (495)', ['108 + 117 + ... + 495', 'n = (495-108)/9 + 1 = 44', 'S = 44/2 (108+495) = 22 * 603 = 13266'], Difficulty.HARD),
    createProblem('m1-h8', 'ถ้า log(2), log(2x-1), log(2x+3) เป็นลำดับเลขคณิต จงหาค่า x', [
      { id: 'c1', text: '2.5', isCorrect: true },
      { id: 'c2', text: '3', isCorrect: false },
      { id: 'c3', text: '4', isCorrect: false },
      { id: 'c4', text: '5', isCorrect: false }
    ], '2log(2x-1) = log(2) + log(2x+3)', ['(2x-1)<sup>2</sup> = 2(2x+3)', '4x<sup>2</sup>-4x+1 = 4x+6', '4x<sup>2</sup>-8x-5 = 0', '(2x+1)(2x-5)=0 => x = 2.5 (x>0)'], Difficulty.HARD),
    createProblem('m1-h9', 'ผลบวก 20 พจน์แรกของลำดับเลขคณิตที่มี a<sub>1</sub>=5 และ a<sub>20</sub>=95 คือ?', [
      { id: 'c1', text: '900', isCorrect: false },
      { id: 'c2', text: '950', isCorrect: false },
      { id: 'c3', text: '1000', isCorrect: true },
      { id: 'c4', text: '1050', isCorrect: false }
    ], 'S = n/2(a<sub>1</sub>+a<sub>n</sub>)', ['20/2 (5+95) = 10(100) = 1000'], Difficulty.HARD),
    createProblem('m1-h10', 'ถ้า S<sub>n</sub> = 2n<sup>2</sup> - n จงหา a<sub>1</sub> + a<sub>3</sub>', [
      { id: 'c1', text: '8', isCorrect: false },
      { id: 'c2', text: '10', isCorrect: true },
      { id: 'c3', text: '12', isCorrect: false },
      { id: 'c4', text: '14', isCorrect: false }
    ], 'หาทีละพจน์จาก S', ['a<sub>1</sub>=S<sub>1</sub>=2-1=1', 'S<sub>3</sub>=18-3=15, S<sub>2</sub>=8-2=6 => a<sub>3</sub>=9', 'a<sub>1</sub>+a<sub>3</sub> = 1+9 = 10'], Difficulty.HARD),
  ],

  // ==========================================
  // MISSION 2: Geometric Sequence (ลำดับเรขาคณิต)
  // ==========================================

  'm2-EASY': [
    createProblem('m2-e1', 'ลำดับในข้อใดเป็น "ลำดับเรขาคณิต" ?', [
      { id: 'c1', text: '2, 4, 6, 8, ...', isCorrect: false },
      { id: 'c2', text: '3, 9, 27, 81, ...', isCorrect: true },
      { id: 'c3', text: '1, 3, 6, 10, ...', isCorrect: false },
      { id: 'c4', text: '10, 20, 30, 40, ...', isCorrect: false }
    ], 'ต้องมีอัตราส่วนร่วม (r) คงที่', ['3, 9, 27 เพิ่มขึ้นโดยการคูณ 3 (r=3)'], Difficulty.EASY),
    createProblem('m2-e2', 'จงหาอัตราส่วนร่วม (r) ของลำดับ: 2, -6, 18, -54, ...', [
      { id: 'c1', text: '3', isCorrect: false },
      { id: 'c2', text: '-3', isCorrect: true },
      { id: 'c3', text: '1/3', isCorrect: false },
      { id: 'c4', text: '-1/3', isCorrect: false }
    ], 'r = ขวา / ซ้าย', ['r = -6 / 2 = -3', 'r = 18 / -6 = -3'], Difficulty.EASY),
    createProblem('m2-e3', 'จงหาพจน์ที่ 5 (a<sub>5</sub>) ของลำดับ 81, -27, 9, ...', [
      { id: 'c1', text: '3', isCorrect: false },
      { id: 'c2', text: '1', isCorrect: true },
      { id: 'c3', text: '-1', isCorrect: false },
      { id: 'c4', text: '-3', isCorrect: false }
    ], 'หา r แล้วคูณต่อไปเรื่อยๆ', ['r = -27/81 = -1/3', 'พจน์ที่ 4 = 9 * (-1/3) = -3', 'พจน์ที่ 5 = -3 * (-1/3) = 1'], Difficulty.EASY),
    createProblem('m2-e4', 'สูตรพจน์ทั่วไปของลำดับเรขาคณิตคือ?', [
      { id: 'c1', text: 'a<sub>n</sub> = a<sub>1</sub>r<sup>n-1</sup>', isCorrect: true },
      { id: 'c2', text: 'a<sub>n</sub> = a<sub>1</sub> + (n-1)d', isCorrect: false },
      { id: 'c3', text: 'a<sub>n</sub> = r<sup>n</sup>', isCorrect: false },
      { id: 'c4', text: 'a<sub>n</sub> = a<sub>1</sub> / r<sup>n</sup>', isCorrect: false }
    ], 'จำสูตรให้แม่น', ['a<sub>n</sub> = a<sub>1</sub>r<sup>n-1</sup>'], Difficulty.EASY),
    createProblem('m2-e5', 'ถ้า a<sub>1</sub> = 2 และ r = 2 พจน์ที่ 4 คือเท่าใด?', [
      { id: 'c1', text: '8', isCorrect: false },
      { id: 'c2', text: '16', isCorrect: true },
      { id: 'c3', text: '32', isCorrect: false },
      { id: 'c4', text: '6', isCorrect: false }
    ], 'คูณ 2 ไปเรื่อยๆ', ['2, 4, 8, 16'], Difficulty.EASY),
    // New Questions
    createProblem('m2-e6', 'พจน์ถัดไปของลำดับ 100, 50, 25, ... คือ', [
      { id: 'c1', text: '10', isCorrect: false },
      { id: 'c2', text: '12.5', isCorrect: true },
      { id: 'c3', text: '15', isCorrect: false },
      { id: 'c4', text: '20', isCorrect: false }
    ], 'หาร 2 หรือคูณ 0.5', ['25 / 2 = 12.5'], Difficulty.EASY),
    createProblem('m2-e7', 'ถ้า a<sub>2</sub> = 10 และ a<sub>3</sub> = 20 แล้ว r คือ?', [
      { id: 'c1', text: '2', isCorrect: true },
      { id: 'c2', text: '0.5', isCorrect: false },
      { id: 'c3', text: '10', isCorrect: false },
      { id: 'c4', text: '4', isCorrect: false }
    ], 'r = a<sub>3</sub>/a<sub>2</sub>', ['20/10 = 2'], Difficulty.EASY),
    createProblem('m2-e8', 'ลำดับ 1, -1, 1, -1, ... มีค่า r เท่าใด', [
      { id: 'c1', text: '1', isCorrect: false },
      { id: 'c2', text: '-1', isCorrect: true },
      { id: 'c3', text: '0', isCorrect: false },
      { id: 'c4', text: 'หาค่าไม่ได้', isCorrect: false }
    ], 'สลับเครื่องหมาย', ['-1/1 = -1'], Difficulty.EASY),
    createProblem('m2-e9', 'พจน์ที่ 3 ของลำดับเรขาคณิตที่ a<sub>1</sub>=4, r=3 คือ?', [
      { id: 'c1', text: '12', isCorrect: false },
      { id: 'c2', text: '36', isCorrect: true },
      { id: 'c3', text: '27', isCorrect: false },
      { id: 'c4', text: '24', isCorrect: false }
    ], '4, 12, 36', ['4 * 3 = 12, 12 * 3 = 36'], Difficulty.EASY),
    createProblem('m2-e10', 'ข้อใด "ไม่ใช่" ลำดับเรขาคณิต', [
      { id: 'c1', text: '2, 4, 8', isCorrect: false },
      { id: 'c2', text: '5, 25, 125', isCorrect: false },
      { id: 'c3', text: '3, 6, 9', isCorrect: true },
      { id: 'c4', text: '1, -1, 1', isCorrect: false }
    ], '3, 6, 9 เป็นเลขคณิต (+3)', ['3->6 (x2), 6->9 (x1.5) ไม่เท่ากัน'], Difficulty.EASY),
  ],

  'm2-MEDIUM': [
    createProblem('m2-m1', 'กำหนดลำดับเรขาคณิต 2, -6, 18, ... ถามว่า 1,458 คือพจน์ที่เท่าใด', [
      { id: 'c1', text: '6', isCorrect: false },
      { id: 'c2', text: '7', isCorrect: true },
      { id: 'c3', text: '8', isCorrect: false },
      { id: 'c4', text: '9', isCorrect: false }
    ], 'ใช้สูตร a<sub>n</sub> = a<sub>1</sub>r<sup>n-1</sup>', ['a<sub>1</sub> = 2, r = -3', '1458 = 2(-3)<sup>n-1</sup>', '729 = (-3)<sup>n-1</sup>', '729 คือ 3<sup>6</sup> (หรือ (-3)<sup>6</sup>)', 'ดังนั้น n-1 = 6 => n = 7'], Difficulty.MEDIUM),
    createProblem('m2-m2', 'จงหาพจน์ที่ 8 ของลำดับ 1, 2, 4, 8, ...', [
      { id: 'c1', text: '64', isCorrect: false },
      { id: 'c2', text: '128', isCorrect: true },
      { id: 'c3', text: '256', isCorrect: false },
      { id: 'c4', text: '512', isCorrect: false }
    ], '2 ยกกำลัง', ['นี่คือลำดับ 2<sup>n-1</sup>', 'พจน์ที่ 8 คือ 2<sup>7</sup> = 128'], Difficulty.MEDIUM),
    createProblem('m2-m3', 'ถ้า 4, x, 16 เป็นลำดับเรขาคณิต (x > 0) จงหาค่า x', [
      { id: 'c1', text: '6', isCorrect: false },
      { id: 'c2', text: '8', isCorrect: true },
      { id: 'c3', text: '10', isCorrect: false },
      { id: 'c4', text: '12', isCorrect: false }
    ], 'พจน์กลางกำลังสอง = หน้าคูณหลัง', ['x<sup>2</sup> = 4 * 16', 'x<sup>2</sup> = 64', 'x = 8'], Difficulty.MEDIUM),
    createProblem('m2-m4', 'ผลบวก 4 พจน์แรกของลำดับ 3, 6, 12, ... คือเท่าใด', [
      { id: 'c1', text: '42', isCorrect: false },
      { id: 'c2', text: '45', isCorrect: true },
      { id: 'c3', text: '48', isCorrect: false },
      { id: 'c4', text: '51', isCorrect: false }
    ], 'บวกเลขตรงๆ หรือใช้สูตร', ['3 + 6 + 12 + 24', '9 + 12 = 21', '21 + 24 = 45'], Difficulty.MEDIUM),
    createProblem('m2-m5', 'จงหาค่า k ที่ทำให้ k-1, k+3, 2k เป็นลำดับเรขาคณิต', [
      { id: 'c1', text: '8', isCorrect: false },
      { id: 'c2', text: '9', isCorrect: true },
      { id: 'c3', text: '10', isCorrect: false },
      { id: 'c4', text: '12', isCorrect: false }
    ], 'ใช้สมบัติอัตราส่วนร่วม', ['(k+3)/(k-1) = 2k/(k+3)', '(k+3)<sup>2</sup> = 2k(k-1)', 'k<sup>2</sup>+6k+9 = 2k<sup>2</sup>-2k', '0 = k<sup>2</sup>-8k-9', '(k-9)(k+1) = 0 => k=9 (ถ้า k เป็นบวก)'], Difficulty.MEDIUM),
    // New Questions
    createProblem('m2-m6', 'ถ้า a<sub>1</sub> = 3 และ a<sub>4</sub> = 24 จงหา r', [
      { id: 'c1', text: '2', isCorrect: true },
      { id: 'c2', text: '3', isCorrect: false },
      { id: 'c3', text: '4', isCorrect: false },
      { id: 'c4', text: '1.5', isCorrect: false }
    ], 'ar<sup>3</sup> = 24', ['3r<sup>3</sup> = 24 => r<sup>3</sup> = 8 => r = 2'], Difficulty.MEDIUM),
    createProblem('m2-m7', 'ลำดับ 16, 8, 4, ... พจน์ที่เท่าใดมีค่า 1/4', [
      { id: 'c1', text: '6', isCorrect: false },
      { id: 'c2', text: '7', isCorrect: true },
      { id: 'c3', text: '8', isCorrect: false },
      { id: 'c4', text: '9', isCorrect: false }
    ], '16(1/2)<sup>n-1</sup> = 1/4', ['(1/2)<sup>n-1</sup> = 1/64 = (1/2)<sup>6</sup>', 'n-1=6 => n=7'], Difficulty.MEDIUM),
    createProblem('m2-m8', 'ผลบวก 5 พจน์แรกของ 1 + 2 + 4 + ...', [
      { id: 'c1', text: '31', isCorrect: true },
      { id: 'c2', text: '30', isCorrect: false },
      { id: 'c3', text: '32', isCorrect: false },
      { id: 'c4', text: '63', isCorrect: false }
    ], 'S = a(r<sup>n</sup>-1)/(r-1)', ['1(32-1)/1 = 31'], Difficulty.MEDIUM),
    createProblem('m2-m9', 'ค่าเฉลี่ยเรขาคณิตของ 2 และ 8 คือ?', [
      { id: 'c1', text: '4', isCorrect: true },
      { id: 'c2', text: '5', isCorrect: false },
      { id: 'c3', text: '6', isCorrect: false },
      { id: 'c4', text: '3', isCorrect: false }
    ], 'sqrt(2*8)', ['sqrt(16) = 4'], Difficulty.MEDIUM),
    createProblem('m2-m10', 'ถ้า a<sub>3</sub> = 12, r = 2 จงหา a<sub>1</sub>', [
      { id: 'c1', text: '2', isCorrect: false },
      { id: 'c2', text: '3', isCorrect: true },
      { id: 'c3', text: '4', isCorrect: false },
      { id: 'c4', text: '6', isCorrect: false }
    ], 'a<sub>1</sub>r<sup>2</sup> = 12', ['4a<sub>1</sub> = 12 => a<sub>1</sub> = 3'], Difficulty.MEDIUM),
  ],

  'm2-HARD': [
    createProblem('m2-h1', 'แบคทีเรียชนิดหนึ่งเพิ่มจำนวนเป็น 2 เท่าทุกๆ 1 ชั่วโมง ถ้าเริ่มต้นมี 10 ตัว ผ่านไป 5 ชั่วโมงจะมีกี่ตัว?', [
      { id: 'c1', text: '160', isCorrect: false },
      { id: 'c2', text: '320', isCorrect: true },
      { id: 'c3', text: '640', isCorrect: false },
      { id: 'c4', text: '1280', isCorrect: false }
    ], 'ระวังเรื่องจำนวนพจน์ (เริ่มคือ a0 หรือ a1)', ['เวลา 0 ชม. = 10 ตัว (a1)', 'เวลา 1 ชม. = 20 (a2)', 'เวลา 5 ชม. คือ a6', 'a6 = 10 * 2<sup>5</sup> = 10 * 32 = 320'], Difficulty.HARD),
    createProblem('m2-h2', 'จงหาผลบวกอนันต์ของ 1 + 1/2 + 1/4 + 1/8 + ...', [
      { id: 'c1', text: '1.5', isCorrect: false },
      { id: 'c2', text: '2', isCorrect: true },
      { id: 'c3', text: '2.5', isCorrect: false },
      { id: 'c4', text: 'หาค่าไม่ได้', isCorrect: false }
    ], 'สูตร S<sub>inf</sub> = a<sub>1</sub> / (1-r)', ['a<sub>1</sub> = 1, r = 1/2', 'S = 1 / (1 - 1/2) = 1 / 0.5 = 2'], Difficulty.HARD),
    createProblem('m2-h3', 'ลูกบอลตกจากตึกสูง 10 เมตร ทุกครั้งที่กระดอนจะสูงขึ้น 80% ของความสูงเดิม จงหาระยะทางเคลื่อนที่ทั้งหมดจนกว่าจะหยุด', [
      { id: 'c1', text: '50 เมตร', isCorrect: false },
      { id: 'c2', text: '90 เมตร', isCorrect: true },
      { id: 'c3', text: '100 เมตร', isCorrect: false },
      { id: 'c4', text: 'ไม่สิ้นสุด', isCorrect: false }
    ], 'ระยะทาง = ลง + ขึ้น + ลง ...', ['ลงครั้งแรก 10', 'ขึ้น 8 + ลง 8 = 16', 'ขึ้น 6.4 + ลง 6.4 ...', 'สูตรลัด 2S<sub>inf</sub> - h<sub>start</sub> หรือ h(1+r)/(1-r)', '10(1+0.8)/(1-0.8) = 10(1.8)/0.2 = 18/0.2 = 90'], Difficulty.HARD),
    createProblem('m2-h4', 'ถ้าผลบวก 3 พจน์แรกของเรขาคณิตคือ 13 และผลคูณคือ 27 จงหาพจน์ที่มีค่ามากที่สุด', [
      { id: 'c1', text: '3', isCorrect: false },
      { id: 'c2', text: '9', isCorrect: true },
      { id: 'c3', text: '12', isCorrect: false },
      { id: 'c4', text: '27', isCorrect: false }
    ], 'สมมติ a/r, a, ar', ['ผลคูณ (a/r)(a)(ar) = a<sup>3</sup> = 27 => a = 3', 'ผลบวก 3/r + 3 + 3r = 13', '3/r + 3r = 10 => 3 + 3r<sup>2</sup> = 10r', '3r<sup>2</sup> - 10r + 3 = 0', '(3r-1)(r-3) = 0 => r = 3 หรือ 1/3', 'ลำดับคือ 1, 3, 9 หรือ 9, 3, 1 ค่ามากสุดคือ 9'], Difficulty.HARD),
    createProblem('m2-h5', 'ชายคนหนึ่งออมเงินเดือนแรก 1,000 บาท เดือนถัดไปออมเพิ่มเป็น 1.1 เท่าของเดือนก่อนหน้า จงหาเงินออมสะสมเมื่อครบ 1 ปี (กำหนด 1.1<sup>12</sup> ≈ 3.14)', [
      { id: 'c1', text: '21,400', isCorrect: true },
      { id: 'c2', text: '18,500', isCorrect: false },
      { id: 'c3', text: '31,400', isCorrect: false },
      { id: 'c4', text: '12,000', isCorrect: false }
    ], 'อนุกรมเรขาคณิต S<sub>n</sub>', ['S<sub>12</sub> = 1000(1.1<sup>12</sup> - 1) / (1.1 - 1)', '1000(3.14 - 1) / 0.1', '1000(2.14) * 10 = 21,400'], Difficulty.HARD),
    // New Questions
    createProblem('m2-h6', 'ทศนิยมซ้ำ 0.999... มีค่าเท่ากับเท่าใด', [
      { id: 'c1', text: '0.9', isCorrect: false },
      { id: 'c2', text: '1', isCorrect: true },
      { id: 'c3', text: 'เข้าใกล้ 1 แต่ไม่เท่ากับ 1', isCorrect: false },
      { id: 'c4', text: '9/10', isCorrect: false }
    ], 'อนุกรมอนันต์ a1=0.9, r=0.1', ['0.9 / (1-0.1) = 0.9/0.9 = 1'], Difficulty.HARD),
    createProblem('m2-h7', 'ผลบวกของ 3 + 1 + 1/3 + 1/9 + ... คือ?', [
      { id: 'c1', text: '4', isCorrect: false },
      { id: 'c2', text: '4.5', isCorrect: true },
      { id: 'c3', text: '5', isCorrect: false },
      { id: 'c4', text: 'หาค่าไม่ได้', isCorrect: false }
    ], 'a1=3, r=1/3', ['3 / (1-1/3) = 3 / (2/3) = 9/2 = 4.5'], Difficulty.HARD),
    createProblem('m2-h8', 'ลำดับ 2, 2x, 18, ... จงหา x (x>0)', [
      { id: 'c1', text: '3', isCorrect: false },
      { id: 'c2', text: '6', isCorrect: true },
      { id: 'c3', text: '9', isCorrect: false },
      { id: 'c4', text: '4', isCorrect: false }
    ], '4x<sup>2</sup> = 36', ['x<sup>2</sup> = 9 => x = 3 แต่ 2(3)=6 ไม่ใช่ลำดับที่ถูก... เดี๋ยวนะ (2x)^2 = 36 => 4x^2=36 => x^2=9 => x=3 ลำดับคือ 2, 6, 18 (r=3) ถูกต้อง'], Difficulty.HARD),
    createProblem('m2-h9', 'ลำดับ 1, 2, 4, ... ถ้าผลบวก n พจน์แรกคือ 255 จงหา n', [
      { id: 'c1', text: '7', isCorrect: false },
      { id: 'c2', text: '8', isCorrect: true },
      { id: 'c3', text: '9', isCorrect: false },
      { id: 'c4', text: '10', isCorrect: false }
    ], 'S = a(r^n - 1)/(r-1)', ['255 = 1(2^n - 1)/1', '256 = 2^n => n=8'], Difficulty.HARD),
    createProblem('m2-h10', 'ลำดับผสม a<sub>n</sub> = 2<sup>n</sup> + n จงหาพจน์ที่ 5', [
      { id: 'c1', text: '32', isCorrect: false },
      { id: 'c2', text: '37', isCorrect: true },
      { id: 'c3', text: '35', isCorrect: false },
      { id: 'c4', text: '40', isCorrect: false }
    ], '2^5 + 5', ['32 + 5 = 37'], Difficulty.HARD),
  ],

  // ==========================================
  // MISSION 3: Infinite Series & Sigma (อนุกรมอนันต์ & ลิมิต)
  // ==========================================

  'm3-EASY': [
     createProblem('m3-e1', 'ค่าของ Σi (เมื่อ i=1 ถึง 5) มีค่าเท่าใด', [
       { id: 'c1', text: '10', isCorrect: false },
       { id: 'c2', text: '15', isCorrect: true },
       { id: 'c3', text: '20', isCorrect: false },
       { id: 'c4', text: '25', isCorrect: false }
     ], '1+2+3+4+5', ['1+2=3, 3+3=6, 6+4=10, 10+5=15'], Difficulty.EASY),
     createProblem('m3-e2', 'ค่าของ Σ5 (เมื่อ i=1 ถึง 10) มีค่าเท่าใด', [
        { id: 'c1', text: '5', isCorrect: false },
        { id: 'c2', text: '50', isCorrect: true },
        { id: 'c3', text: '15', isCorrect: false },
        { id: 'c4', text: '55', isCorrect: false }
      ], 'ค่าคงที่คูณจำนวนพจน์', ['Σc = nc', '5 * 10 = 50'], Difficulty.EASY),
      createProblem('m3-e3', 'ลิมิตของลำดับ a<sub>n</sub> = 1/n เมื่อ n เข้าสู่อนันต์ คือเท่าใด', [
        { id: 'c1', text: '0', isCorrect: true },
        { id: 'c2', text: '1', isCorrect: false },
        { id: 'c3', text: 'หาค่าไม่ได้', isCorrect: false },
        { id: 'c4', text: '∞', isCorrect: false }
      ], '1 หารด้วยเลขมหาศาล', ['1/10=0.1, 1/1000=0.001 ... เข้าใกล้ 0'], Difficulty.EASY),
      createProblem('m3-e4', 'ข้อใดเป็นอนุกรมลู่เข้า (Convergent)', [
        { id: 'c1', text: '1 + 2 + 3 + ...', isCorrect: false },
        { id: 'c2', text: '2 + 4 + 8 + ...', isCorrect: false },
        { id: 'c3', text: '1 + 1/2 + 1/4 + ...', isCorrect: true },
        { id: 'c4', text: '1 - 1 + 1 - 1 + ...', isCorrect: false }
      ], 'อนุกรมเรขาคณิตที่ |r| < 1', ['ข้อ 3 มี r = 1/2 ซึ่งน้อยกว่า 1 จึงลู่เข้า'], Difficulty.EASY),
      createProblem('m3-e5', 'สัญลักษณ์ ∞ หมายถึงอะไร', [
        { id: 'c1', text: 'จำนวนศูนย์', isCorrect: false },
        { id: 'c2', text: 'อนันต์ (ไม่มีที่สิ้นสุด)', isCorrect: true },
        { id: 'c3', text: 'จำนวนจินตภาพ', isCorrect: false },
        { id: 'c4', text: 'ผลรวม', isCorrect: false }
      ], 'ความหมายพื้นฐาน', ['Infinity คือความไม่มีที่สิ้นสุด'], Difficulty.EASY),
      // New Questions
      createProblem('m3-e6', 'Σ(i+1) เมื่อ i=1 ถึง 3 คือ?', [
        { id: 'c1', text: '6', isCorrect: false },
        { id: 'c2', text: '9', isCorrect: true },
        { id: 'c3', text: '7', isCorrect: false },
        { id: 'c4', text: '5', isCorrect: false }
      ], '(1+1)+(2+1)+(3+1)', ['2+3+4 = 9'], Difficulty.EASY),
      createProblem('m3-e7', 'lim (5) เมื่อ n -> ∞', [
        { id: 'c1', text: '0', isCorrect: false },
        { id: 'c2', text: '5', isCorrect: true },
        { id: 'c3', text: '∞', isCorrect: false },
        { id: 'c4', text: 'หาค่าไม่ได้', isCorrect: false }
      ], 'ลิมิตของค่าคงที่', ['ได้ค่าคงที่เสมอ'], Difficulty.EASY),
      createProblem('m3-e8', 'ข้อใดเป็นอนุกรมลู่ออก (Divergent)', [
        { id: 'c1', text: '1/2 + 1/4 + 1/8...', isCorrect: false },
        { id: 'c2', text: '1 + 1.1 + 1.21...', isCorrect: true },
        { id: 'c3', text: '0.9 + 0.09...', isCorrect: false },
        { id: 'c4', text: '1 + 0 + 0...', isCorrect: false }
      ], 'r > 1 หรือผลบวกเพิ่มเรื่อยๆ', ['1.1 > 1'], Difficulty.EASY),
      createProblem('m3-e9', 'Σ(2) เมื่อ i=1 ถึง 100', [
        { id: 'c1', text: '200', isCorrect: true },
        { id: 'c2', text: '100', isCorrect: false },
        { id: 'c3', text: '2', isCorrect: false },
        { id: 'c4', text: '50', isCorrect: false }
      ], '100 * 2', ['200'], Difficulty.EASY),
      createProblem('m3-e10', '1/n^2 เมื่อ n มากๆ จะมีค่าเป็นอย่างไร', [
        { id: 'c1', text: 'เข้าใกล้ 0', isCorrect: true },
        { id: 'c2', text: 'เข้าใกล้ 1', isCorrect: false },
        { id: 'c3', text: 'มีค่ามากมหาศาล', isCorrect: false },
        { id: 'c4', text: 'สลับไปมา', isCorrect: false }
      ], 'ตัวหารมาก ค่าจะน้อย', ['เข้าใกล้ 0'], Difficulty.EASY),
  ],
  'm3-MEDIUM': [
    createProblem('m3-m1', 'จงหาค่าของ lim (3n+1)/(n-2) เมื่อ n -> ∞', [
        { id: 'c1', text: '1', isCorrect: false },
        { id: 'c2', text: '2', isCorrect: false },
        { id: 'c3', text: '3', isCorrect: true },
        { id: 'c4', text: '-1/2', isCorrect: false }
      ], 'ดูสัมประสิทธิ์ดีกรีสูงสุด', ['3n/n = 3'], Difficulty.MEDIUM),
    createProblem('m3-m2', 'ผลบวกอนุกรมอนันต์ 4 + 4/3 + 4/9 + ... มีค่าเท่าใด', [
        { id: 'c1', text: '5', isCorrect: false },
        { id: 'c2', text: '6', isCorrect: true },
        { id: 'c3', text: '7', isCorrect: false },
        { id: 'c4', text: '8', isCorrect: false }
      ], 'S = a1/(1-r)', ['a1=4, r=1/3', '4 / (1 - 1/3) = 4 / (2/3) = 12/2 = 6'], Difficulty.MEDIUM),
    createProblem('m3-m3', 'จงหาค่าของ Σ(2i - 1) เมื่อ i=1 ถึง 10', [
        { id: 'c1', text: '90', isCorrect: false },
        { id: 'c2', text: '100', isCorrect: true },
        { id: 'c3', text: '110', isCorrect: false },
        { id: 'c4', text: '55', isCorrect: false }
      ], 'ดึงตัวร่วม 2Σi - Σ1', ['2(10*11/2) - 10 = 110 - 10 = 100', 'หรือรู้ว่าเป็นผลบวกเลขคี่ 10 ตัวแรก = 10^2 = 100'], Difficulty.MEDIUM),
    createProblem('m3-m4', 'ทศนิยมซ้ำ 0.777... เขียนเป็นเศษส่วนได้เท่าใด', [
        { id: 'c1', text: '7/9', isCorrect: true },
        { id: 'c2', text: '7/10', isCorrect: false },
        { id: 'c3', text: '77/100', isCorrect: false },
        { id: 'c4', text: '7/11', isCorrect: false }
      ], 'มองเป็นอนุกรมเรขาคณิต', ['0.7 + 0.07 + 0.007 + ...', 'a1=0.7, r=0.1', '0.7 / (1-0.1) = 0.7/0.9 = 7/9'], Difficulty.MEDIUM),
    createProblem('m3-m5', 'ลิมิตของ (2n<sup>2</sup> + 5) / (5n<sup>2</sup> - 3) เมื่อ n -> ∞', [
        { id: 'c1', text: '2/5', isCorrect: true },
        { id: 'c2', text: '5/2', isCorrect: false },
        { id: 'c3', text: '0', isCorrect: false },
        { id: 'c4', text: '∞', isCorrect: false }
      ], 'สัมประสิทธิ์หน้าดีกรีสูงสุด', ['2n<sup>2</sup> / 5n<sup>2</sup> = 2/5'], Difficulty.MEDIUM),
    // New Questions
    createProblem('m3-m6', 'Σ(k+1) เมื่อ k=1 ถึง 10 คือ?', [
      { id: 'c1', text: '55', isCorrect: false },
      { id: 'c2', text: '65', isCorrect: true },
      { id: 'c3', text: '60', isCorrect: false },
      { id: 'c4', text: '70', isCorrect: false }
    ], 'Σk + Σ1', ['55 + 10 = 65'], Difficulty.MEDIUM),
    createProblem('m3-m7', 'lim (n^2 + 1) / (2n^2) เมื่อ n -> ∞', [
      { id: 'c1', text: '0', isCorrect: false },
      { id: 'c2', text: '1', isCorrect: false },
      { id: 'c3', text: '1/2', isCorrect: true },
      { id: 'c4', text: '2', isCorrect: false }
    ], 'สัมประสิทธิ์ n^2', ['1/2'], Difficulty.MEDIUM),
    createProblem('m3-m8', 'ผลบวก 1 + 1/2 + 1/4 + ... ถึงอนันต์', [
      { id: 'c1', text: '1', isCorrect: false },
      { id: 'c2', text: '2', isCorrect: true },
      { id: 'c3', text: '1.5', isCorrect: false },
      { id: 'c4', text: 'หาค่าไม่ได้', isCorrect: false }
    ], 'a1=1, r=1/2', ['1/(1-0.5) = 2'], Difficulty.MEDIUM),
    createProblem('m3-m9', 'lim (4n^3 + n) / (2n^3 + 5)', [
      { id: 'c1', text: '2', isCorrect: true },
      { id: 'c2', text: '4', isCorrect: false },
      { id: 'c3', text: '0', isCorrect: false },
      { id: 'c4', text: '∞', isCorrect: false }
    ], 'ดีกรีเท่ากัน ตอบสัมประสิทธิ์', ['4/2 = 2'], Difficulty.MEDIUM),
    createProblem('m3-m10', 'อนุกรม 1 - 1 + 1 - 1 + ... เป็นอย่างไร', [
      { id: 'c1', text: 'ลู่เข้าสู่ 0', isCorrect: false },
      { id: 'c2', text: 'ลู่เข้าสู่ 1', isCorrect: false },
      { id: 'c3', text: 'ลู่ออก', isCorrect: true },
      { id: 'c4', text: 'ลู่เข้าสู่ 0.5', isCorrect: false }
    ], 'ผลบวกแกว่งกวัด (Oscillating)', ['ไม่มีลิมิตแน่นอน -> ลู่ออก'], Difficulty.MEDIUM),
  ],
  'm3-HARD': [
    createProblem('m3-h1', 'จงหาค่าของ Σ [1 / (n * (n+1))] เมื่อ n=1 ถึง ∞ (Telescoping Sum)', [
        { id: 'c1', text: '0', isCorrect: false },
        { id: 'c2', text: '1', isCorrect: true },
        { id: 'c3', text: '2', isCorrect: false },
        { id: 'c4', text: 'หาค่าไม่ได้', isCorrect: false }
      ], 'แยกเศษส่วนย่อย', ['1/n - 1/(n+1)', '(1 - 1/2) + (1/2 - 1/3) + ...', 'ตัดกันหมดเหลือตัวแรก - ตัวสุดท้าย (1/∞ -> 0)', 'ตอบ 1'], Difficulty.HARD),
    createProblem('m3-h2', 'lim (√(n<sup>2</sup>+n) - n) เมื่อ n -> ∞ มีค่าเท่าใด', [
        { id: 'c1', text: '0', isCorrect: false },
        { id: 'c2', text: '1/2', isCorrect: true },
        { id: 'c3', text: '1', isCorrect: false },
        { id: 'c4', text: '∞', isCorrect: false }
      ], 'Conjugate (สังยุค) คูณเข้า', ['(√(n<sup>2</sup>+n) - n) * (√(n<sup>2</sup>+n) + n) / ...', '= (n<sup>2</sup>+n - n<sup>2</sup>) / (√(n<sup>2</sup>+n) + n)', '= n / (√(n<sup>2</sup>...) + n)', 'หาร n ทั้งเศษส่วน = 1 / (1+1) = 1/2'], Difficulty.HARD),
    createProblem('m3-h3', 'ผลบวกของ 1/2 + 3/4 + 5/8 + 7/16 + ... (อนุกรมผสม เลขคณิต-เรขาคณิต)', [
        { id: 'c1', text: '2', isCorrect: false },
        { id: 'c2', text: '3', isCorrect: true },
        { id: 'c3', text: '4', isCorrect: false },
        { id: 'c4', text: '1.5', isCorrect: false }
      ], 'S = 3 (วิธีทำซับซ้อน)', ['ตั้ง S แล้วคูณ 1/2S ลบกัน', 'จะได้เรขาคณิตปกติในชั้นที่สอง', 'คำตอบคือ 3'], Difficulty.HARD),
    createProblem('m3-h4', 'ค่าของ Σ i<sup>2</sup> เมื่อ i=1 ถึง 10', [
        { id: 'c1', text: '385', isCorrect: true },
        { id: 'c2', text: '3025', isCorrect: false },
        { id: 'c3', text: '220', isCorrect: false },
        { id: 'c4', text: '505', isCorrect: false }
      ], 'สูตร n(n+1)(2n+1)/6', ['10(11)(21)/6', '10*11*3.5 ... หรือ 385'], Difficulty.HARD),
    createProblem('m3-h5', 'ถ้าลำดับ a<sub>n</sub> ลู่เข้าสู่ 5 แล้ว ลำดับ (a<sub>n</sub> + 2) / a<sub>n</sub> ลู่เข้าสู่เท่าใด', [
        { id: 'c1', text: '5', isCorrect: false },
        { id: 'c2', text: '7/5', isCorrect: true },
        { id: 'c3', text: '1', isCorrect: false },
        { id: 'c4', text: '2/5', isCorrect: false }
      ], 'ทฤษฎีบทลิมิต', ['(lim a<sub>n</sub> + 2) / lim a<sub>n</sub>', '(5+2)/5 = 7/5'], Difficulty.HARD),
    // New Questions
    createProblem('m3-h6', 'Σ(1/2^n) จาก n=1 ถึง อินฟินิตี้', [
      { id: 'c1', text: '1', isCorrect: true },
      { id: 'c2', text: '2', isCorrect: false },
      { id: 'c3', text: '0.5', isCorrect: false },
      { id: 'c4', text: 'หาค่าไม่ได้', isCorrect: false }
    ], 'อนุกรมเรขาคณิต a1=1/2, r=1/2', ['(1/2) / (1-1/2) = 1'], Difficulty.HARD),
    createProblem('m3-h7', 'จงหา Σ i^3 เมื่อ i=1 ถึง 10', [
      { id: 'c1', text: '3025', isCorrect: true },
      { id: 'c2', text: '2025', isCorrect: false },
      { id: 'c3', text: '385', isCorrect: false },
      { id: 'c4', text: '1000', isCorrect: false }
    ], 'สูตร (n(n+1)/2)^2', ['(55)^2 = 3025'], Difficulty.HARD),
    createProblem('m3-h8', 'lim (√(n+1) - √n) เมื่อ n -> ∞', [
      { id: 'c1', text: '1', isCorrect: false },
      { id: 'c2', text: '0', isCorrect: true },
      { id: 'c3', text: '∞', isCorrect: false },
      { id: 'c4', text: 'หาค่าไม่ได้', isCorrect: false }
    ], 'Conjugate คูณ', ['1 / (√(n+1)+√n) -> 0'], Difficulty.HARD),
    createProblem('m3-h9', 'ผลบวกอนุกรม 3 + 2 + 4/3 + 8/9 + ...', [
      { id: 'c1', text: '9', isCorrect: true },
      { id: 'c2', text: '6', isCorrect: false },
      { id: 'c3', text: '12', isCorrect: false },
      { id: 'c4', text: 'หาค่าไม่ได้', isCorrect: false }
    ], 'r=2/3', ['3 / (1 - 2/3) = 3 / (1/3) = 9'], Difficulty.HARD),
    createProblem('m3-h10', 'lim (n! / (n+1)!)', [
      { id: 'c1', text: '1', isCorrect: false },
      { id: 'c2', text: '0', isCorrect: true },
      { id: 'c3', text: '∞', isCorrect: false },
      { id: 'c4', text: 'n', isCorrect: false }
    ], 'ตัด n!', ['1 / (n+1) -> 0'], Difficulty.HARD),
  ],

  // ==========================================
  // MISSION 4: Word Problems (โจทย์ปัญหา)
  // ==========================================
  
  'm4-EASY': [
     createProblem('m4-e1', 'น้องออมเงินวันแรก 1 บาท วันที่สอง 2 บาท วันที่สาม 3 บาท ถ้าออมครบ 30 วันจะมีเงินรวมเท่าใด', [
       { id: 'c1', text: '400 บาท', isCorrect: false },
       { id: 'c2', text: '465 บาท', isCorrect: true },
       { id: 'c3', text: '500 บาท', isCorrect: false },
       { id: 'c4', text: '300 บาท', isCorrect: false }
     ], 'ผลบวกเลขคณิต 1 ถึง 30', ['n(n+1)/2 = 30(31)/2 = 15 * 31 = 465'], Difficulty.EASY),
     createProblem('m4-e2', 'ร้านค้าลดราคาสินค้าลงครึ่งหนึ่งทุกสัปดาห์ ถ้าสัปดาห์แรกขาย 100 บาท สัปดาห์ที่ 3 จะขายกี่บาท', [
        { id: 'c1', text: '25 บาท', isCorrect: true },
        { id: 'c2', text: '50 บาท', isCorrect: false },
        { id: 'c3', text: '12.5 บาท', isCorrect: false },
        { id: 'c4', text: '20 บาท', isCorrect: false }
      ], 'ลำดับเรขาคณิต r=1/2', ['Week 1 = 100', 'Week 2 = 50', 'Week 3 = 25'], Difficulty.EASY),
      createProblem('m4-e3', 'จัดเก้าอี้แถวแรก 10 ตัว แถวต่อมาเพิ่มแถวละ 2 ตัว แถวที่ 5 จะมีกี่ตัว', [
        { id: 'c1', text: '16', isCorrect: false },
        { id: 'c2', text: '18', isCorrect: true },
        { id: 'c3', text: '20', isCorrect: false },
        { id: 'c4', text: '22', isCorrect: false }
      ], 'เลขคณิต d=2', ['10, 12, 14, 16, 18 (นิ้วที่ 5)'], Difficulty.EASY),
      createProblem('m4-e4', 'ไวรัสแบ่งตัวเป็น 2 เท่าทุกชั่วโมง เริ่มต้น 1 ตัว ผ่านไป 3 ชั่วโมงมีกี่ตัว', [
        { id: 'c1', text: '4', isCorrect: false },
        { id: 'c2', text: '6', isCorrect: false },
        { id: 'c3', text: '8', isCorrect: true },
        { id: 'c4', text: '16', isCorrect: false }
      ], '1 -> 2 -> 4 -> 8', ['ชั่วโมงที่ 0=1, 1=2, 2=4, 3=8'], Difficulty.EASY),
      createProblem('m4-e5', 'วิ่งวันแรก 1 กม. วันต่อมาเพิ่มวันละ 0.5 กม. วันที่ 4 วิ่งกี่ กม.', [
        { id: 'c1', text: '2.0', isCorrect: false },
        { id: 'c2', text: '2.5', isCorrect: true },
        { id: 'c3', text: '3.0', isCorrect: false },
        { id: 'c4', text: '3.5', isCorrect: false }
      ], '1.0, 1.5, 2.0, 2.5', ['วันที่ 4 คือ 2.5'], Difficulty.EASY),
      // New Questions
      createProblem('m4-e6', 'วางอิฐบล็อก ชั้นบน 1 ก้อน ชั้นถัดลงมาเพิ่มทีละ 1 ก้อน ชั้นที่ 10 มีกี่ก้อน', [
        { id: 'c1', text: '9', isCorrect: false },
        { id: 'c2', text: '10', isCorrect: true },
        { id: 'c3', text: '11', isCorrect: false },
        { id: 'c4', text: '55', isCorrect: false }
      ], 'ลำดับเลขคณิต d=1', ['1, 2, ..., 10'], Difficulty.EASY),
      createProblem('m4-e7', 'อมีบาแบ่งตัวเป็น 2 เท่าทุกนาที เริ่มต้น 5 ตัว ผ่านไป 2 นาทีมีกี่ตัว', [
        { id: 'c1', text: '10', isCorrect: false },
        { id: 'c2', text: '20', isCorrect: true },
        { id: 'c3', text: '15', isCorrect: false },
        { id: 'c4', text: '25', isCorrect: false }
      ], '5 -> 10 -> 20', ['นาทีที่ 0=5, 1=10, 2=20'], Difficulty.EASY),
      createProblem('m4-e8', 'เก็บเงินวันละ 5 บาท ผ่านไป 10 วัน มีเงินเท่าไหร่ (ไม่คิดดอกเบี้ย)', [
        { id: 'c1', text: '50', isCorrect: true },
        { id: 'c2', text: '45', isCorrect: false },
        { id: 'c3', text: '55', isCorrect: false },
        { id: 'c4', text: '60', isCorrect: false }
      ], '10 * 5', ['50 บาท'], Difficulty.EASY),
      createProblem('m4-e9', 'ต้นไม้สูงขึ้นวันละ 2 ซม. ผ่านไป 5 วัน สูงขึ้นรวมกี่ซม.', [
        { id: 'c1', text: '8', isCorrect: false },
        { id: 'c2', text: '10', isCorrect: true },
        { id: 'c3', text: '12', isCorrect: false },
        { id: 'c4', text: '5', isCorrect: false }
      ], '5 * 2', ['10 ซม.'], Difficulty.EASY),
      createProblem('m4-e10', 'ลดราคาสินค้า 100 บาท ลงปีละ 10 บาท ปีที่ 3 เหลือเท่าไหร่', [
        { id: 'c1', text: '80', isCorrect: true },
        { id: 'c2', text: '70', isCorrect: false },
        { id: 'c3', text: '90', isCorrect: false },
        { id: 'c4', text: '85', isCorrect: false }
      ], '100, 90, 80', ['เหลือ 80'], Difficulty.EASY),
  ],
  'm4-MEDIUM': [
     createProblem('m4-m1', 'เงินเดือนเริ่มต้น 15,000 บาท ขึ้นเงินเดือนปีละ 1,000 บาท อีก 10 ปีข้างหน้า (ปีที่ 11) เงินเดือนจะเป็นเท่าใด', [
       { id: 'c1', text: '24,000', isCorrect: false },
       { id: 'c2', text: '25,000', isCorrect: true },
       { id: 'c3', text: '26,000', isCorrect: false },
       { id: 'c4', text: '30,000', isCorrect: false }
     ], 'เลขคณิต a1=15000, d=1000', ['a11 = 15000 + 10(1000) = 25000'], Difficulty.MEDIUM),
     createProblem('m4-m2', 'ซื้อรถมาราคา 1,000,000 บาท ราคาตกปีละ 10% (เหลือ 90%) ผ่านไป 2 ปี รถจะมีราคาเท่าใด', [
        { id: 'c1', text: '800,000', isCorrect: false },
        { id: 'c2', text: '810,000', isCorrect: true },
        { id: 'c3', text: '900,000', isCorrect: false },
        { id: 'c4', text: '729,000', isCorrect: false }
      ], 'เรขาคณิต r=0.9', ['1,000,000 * 0.9 = 900,000 (ปี 1)', '900,000 * 0.9 = 810,000 (ปี 2)'], Difficulty.MEDIUM),
     createProblem('m4-m3', 'หอประชุมจัดเก้าอี้เป็นรูปสามเหลี่ยม แถวแรก 1 ตัว แถวสอง 2 ตัว ... ถ้ามี 20 แถว ต้องใช้เก้าอี้กี่ตัว', [
        { id: 'c1', text: '190', isCorrect: false },
        { id: 'c2', text: '200', isCorrect: false },
        { id: 'c3', text: '210', isCorrect: true },
        { id: 'c4', text: '400', isCorrect: false }
      ], 'ผลบวก 1 ถึง 20', ['20*21/2 = 210'], Difficulty.MEDIUM),
     createProblem('m4-m4', 'ท่อน้ำวางซ้อนกัน ชั้นล่าง 30 ท่อน ชั้นบนลดทีละ 1 ท่อน จนถึงชั้นยอดมี 10 ท่อน กองนี้มีกี่ชั้น', [
        { id: 'c1', text: '20 ชั้น', isCorrect: false },
        { id: 'c2', text: '21 ชั้น', isCorrect: true },
        { id: 'c3', text: '19 ชั้น', isCorrect: false },
        { id: 'c4', text: '22 ชั้น', isCorrect: false }
      ], 'หา n จาก 10 = 30 + (n-1)(-1)', ['-20 = -(n-1) => 20 = n-1 => n = 21'], Difficulty.MEDIUM),
     createProblem('m4-m5', 'บริษัทกำไรปีแรก 1 ล้านบาท ตั้งเป้าโต 20% ต่อปี ปีที่ 4 จะมีกำไรประมาณเท่าใด', [
        { id: 'c1', text: '1.60 ล้าน', isCorrect: false },
        { id: 'c2', text: '1.73 ล้าน', isCorrect: true },
        { id: 'c3', text: '1.44 ล้าน', isCorrect: false },
        { id: 'c4', text: '2.00 ล้าน', isCorrect: false }
      ], '1 * (1.2)^3', ['1.2 * 1.2 = 1.44', '1.44 * 1.2 = 1.728'], Difficulty.MEDIUM),
      // New Questions
      createProblem('m4-m6', 'ฝากเงิน 100 บาท ดอกเบี้ย 5% ต่อปี ปีหน้ามีเงินรวมเท่าไหร่', [
        { id: 'c1', text: '105', isCorrect: true },
        { id: 'c2', text: '110', isCorrect: false },
        { id: 'c3', text: '100.5', isCorrect: false },
        { id: 'c4', text: '115', isCorrect: false }
      ], '100 * 1.05', ['105 บาท'], Difficulty.MEDIUM),
      createProblem('m4-m7', 'คนงานเรียงอิฐแถวแรก 50 ก้อน แถวถัดไปลดลง 2 ก้อน แถวที่ 10 มีกี่ก้อน', [
        { id: 'c1', text: '30', isCorrect: false },
        { id: 'c2', text: '32', isCorrect: true },
        { id: 'c3', text: '34', isCorrect: false },
        { id: 'c4', text: '28', isCorrect: false }
      ], '50 - 9(2)', ['50 - 18 = 32'], Difficulty.MEDIUM),
      createProblem('m4-m8', 'ประชากรเมืองหนึ่งเพิ่ม 10% ทุกปี ถ้าปีนี้มี 10,000 คน ปีหน้ามีกี่คน', [
        { id: 'c1', text: '11,000', isCorrect: true },
        { id: 'c2', text: '12,000', isCorrect: false },
        { id: 'c3', text: '10,100', isCorrect: false },
        { id: 'c4', text: '10,500', isCorrect: false }
      ], '10,000 * 1.1', ['11,000'], Difficulty.MEDIUM),
      createProblem('m4-m9', 'เดินขึ้นบันไดทีละ 1 ขั้น หรือ 2 ขั้น (โจทย์ฟีโบนักชี) สำหรับบันได 3 ขั้น มีกี่วิธี', [
        { id: 'c1', text: '2', isCorrect: false },
        { id: 'c2', text: '3', isCorrect: true },
        { id: 'c3', text: '4', isCorrect: false },
        { id: 'c4', text: '5', isCorrect: false }
      ], '(1,1,1), (1,2), (2,1)', ['3 วิธี'], Difficulty.MEDIUM),
      createProblem('m4-m10', 'น้ำในถังระเหยไปวันละ 1 ลิตร เดิมมี 100 ลิตร วันที่ 20 เหลือเท่าไหร่', [
        { id: 'c1', text: '80', isCorrect: false },
        { id: 'c2', text: '81', isCorrect: true },
        { id: 'c3', text: '79', isCorrect: false },
        { id: 'c4', text: '90', isCorrect: false }
      ], 'ระวังนับวัน', ['วันที่ 1=100, วันที่ 2=99... วันที่ 20 คือลดไป 19 วัน หรือ 20? ถ้าถาม"ในวันที่" ตอบ 81 (100-19)'], Difficulty.MEDIUM),
  ],
  'm4-HARD': [
     createProblem('m4-h1', 'กู้เงิน 10,000 บาท ดอกเบี้ย 10% ต่อปี แบบทบต้น ถ้าไม่จ่ายคืนเลย 3 ปี หนี้จะกลายเป็นเท่าใด', [
       { id: 'c1', text: '13,000', isCorrect: false },
       { id: 'c2', text: '13,310', isCorrect: true },
       { id: 'c3', text: '12,100', isCorrect: false },
       { id: 'c4', text: '14,000', isCorrect: false }
     ], 'สูตรดอกเบี้ยทบต้น P(1+r)^n', ['10000(1.1)^3 = 10000(1.331) = 13310'], Difficulty.HARD),
     createProblem('m4-h2', 'สี่เหลี่ยมจัตุรัสยาวด้านละ 10 ซม. สร้างสี่เหลี่ยมใหม่โดยเชื่อมจุดกึ่งกลางด้านไปเรื่อยๆ ผลบวกพื้นที่สี่เหลี่ยมทุกรูปเป็นเท่าใด', [
       { id: 'c1', text: '100', isCorrect: false },
       { id: 'c2', text: '200', isCorrect: true },
       { id: 'c3', text: '150', isCorrect: false },
       { id: 'c4', text: 'หาค่าไม่ได้', isCorrect: false }
     ], 'พื้นที่ลดลงทีละครึ่ง (r=1/2)', ['รูปแรก 100, รูปสอง 50, รูปสาม 25...', 'S = 100 / (1 - 0.5) = 100 / 0.5 = 200'], Difficulty.HARD),
     createProblem('m4-h3', 'โยนลูกบอลขึ้นสูง 20 เมตร เด้งกลับ 3/4 ของความสูงเดิม จงหาระยะทางทั้งหมดที่ลูกบอลเคลื่อนที่จนหยุด', [
       { id: 'c1', text: '100 เมตร', isCorrect: false },
       { id: 'c2', text: '140 เมตร', isCorrect: true },
       { id: 'c3', text: '160 เมตร', isCorrect: false },
       { id: 'c4', text: '80 เมตร', isCorrect: false }
     ], 'สูตร 2S - h หรือ h(1+r)/(1-r)', ['20(1 + 0.75)/(1 - 0.75)', '20(1.75)/0.25', '20 * 7 = 140 เมตร'], Difficulty.HARD),
     createProblem('m4-h4', 'ต้องฝากเงินเดือนละเท่าๆ กัน เป็นเวลา 12 เดือน เพื่อให้ได้เงินรวม 12,000 บาท (ไม่มีดอกเบี้ย) แต่ถ้าฝากแบบเพิ่มเดือนละ 100 บาท เดือนแรกต้องฝากเท่าไหร่เพื่อให้ยอดรวมเท่ากัน', [
       { id: 'c1', text: '400', isCorrect: false },
       { id: 'c2', text: '450', isCorrect: true },
       { id: 'c3', text: '500', isCorrect: false },
       { id: 'c4', text: '550', isCorrect: false }
     ], 'S12 = 12000, d=100', ['12/2 (2a1 + 11(100)) = 12000', '6(2a1 + 1100) = 12000', '2a1 + 1100 = 2000', '2a1 = 900 => a1 = 450'], Difficulty.HARD),
     createProblem('m4-h5', 'ยาชนิดหนึ่งถูกขับออกจากร่างกาย 50% ทุก 4 ชั่วโมง ถ้ากินยา 100mg ทันทีที่กินยาเม็ดที่สอง (ห่างกัน 4 ชม.) ในร่างกายจะมียาเหลือรวมเท่าใด', [
       { id: 'c1', text: '100 mg', isCorrect: false },
       { id: 'c2', text: '125 mg', isCorrect: false },
       { id: 'c3', text: '150 mg', isCorrect: true },
       { id: 'c4', text: '200 mg', isCorrect: false }
     ], 'ยาเม็ดแรกเหลือ 50 + ยาเม็ดใหม่ 100', ['50 + 100 = 150 mg'], Difficulty.HARD),
     // New Questions
     createProblem('m4-h6', 'ซื้อหุ้นปันผล 5 บาท/หุ้น คาดการณ์ปันผลโต 5% ตลอดไป (Geometric) ถ้าต้องการผลตอบแทน 10% ควรซื้อราคาเท่าใด (Model P=D/(k-g))', [
       { id: 'c1', text: '50 บาท', isCorrect: false },
       { id: 'c2', text: '100 บาท', isCorrect: true },
       { id: 'c3', text: '105 บาท', isCorrect: false },
       { id: 'c4', text: '110 บาท', isCorrect: false }
     ], '5 / (0.10 - 0.05)', ['5 / 0.05 = 100 บาท'], Difficulty.HARD),
     createProblem('m4-h7', 'ลูกตุ้มนาฬิกาแกว่งไกล 20 ซม. ครั้งถัดไปลดลง 10% จงหาระยะทางแกว่งรวมถึงหยุดนิ่ง', [
       { id: 'c1', text: '180', isCorrect: false },
       { id: 'c2', text: '200', isCorrect: true },
       { id: 'c3', text: '220', isCorrect: false },
       { id: 'c4', text: '190', isCorrect: false }
     ], '20 / (1 - 0.9) หรือ 20/0.1', ['20 / 0.1 = 200 ซม.'], Difficulty.HARD),
     createProblem('m4-h8', 'ผ่อนบ้าน 20 ปี เดือนละ 10,000 รวมจ่ายทั้งหมดเท่าไหร่', [
       { id: 'c1', text: '2.4 ล้าน', isCorrect: true },
       { id: 'c2', text: '2.0 ล้าน', isCorrect: false },
       { id: 'c3', text: '1.2 ล้าน', isCorrect: false },
       { id: 'c4', text: '3.0 ล้าน', isCorrect: false }
     ], '10,000 * 12 * 20', ['2,400,000'], Difficulty.HARD),
     createProblem('m4-h9', 'เชื้อราคลุมพื้นที่ 1 ตร.ม. เพิ่ม 2 เท่าทุกวัน ถ้าเต็มห้อง 100 ตร.ม. ใน 30 วัน ถามว่าครึ่งห้อง (50 ตร.ม.) ใช้เวลากี่วัน', [
       { id: 'c1', text: '15 วัน', isCorrect: false },
       { id: 'c2', text: '29 วัน', isCorrect: true },
       { id: 'c3', text: '28 วัน', isCorrect: false },
       { id: 'c4', text: '25 วัน', isCorrect: false }
     ], 'ย้อนกลับ 1 วัน คือหาร 2', ['วันที่ 30 เต็ม, วันที่ 29 ครึ่งหนึ่ง'], Difficulty.HARD),
     createProblem('m4-h10', 'วิ่งระยะทางอนันต์ วันแรก 1 กม. วันที่สอง 1/2 กม. วันที่สาม 1/4 กม. รวมระยะทางเท่าไหร่', [
       { id: 'c1', text: '1.5 กม.', isCorrect: false },
       { id: 'c2', text: '2.0 กม.', isCorrect: true },
       { id: 'c3', text: '2.5 กม.', isCorrect: false },
       { id: 'c4', text: 'ไม่มีที่สิ้นสุด', isCorrect: false }
     ], '1/(1-0.5)', ['2 กม.'], Difficulty.HARD),
  ]
};

// --- Static Metadata for Dashboard ---

export const MISSIONS_DATA: Mission[] = [
  {
    id: 'm1',
    title: 'ภารกิจที่ 1: นักล่ารูปแบบ (Patterns)',
    description: 'ฝึกฝนการหาพจน์ทั่วไป และลำดับเลขคณิตตั้งแต่พื้นฐานจนถึงขั้นสูง',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600&auto=format&fit=crop',
    status: MissionStatus.AVAILABLE,
    subMissions: [
      { id: 'm1-s1', title: 'ด่านฝึกฝน: ลำดับเลขคณิต', description: 'ตะลุยโจทย์ลำดับเลขคณิต 10 ข้อ คัดสรรมาเพื่อคุณ', problems: [] }
    ]
  },
  {
    id: 'm2',
    title: 'ภารกิจที่ 2: พลังทวีคูณ (Geometric)',
    description: 'เรียนรู้เรื่องลำดับและอนุกรมเรขาคณิต การเติบโตแบบก้าวกระโดด',
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
    status: MissionStatus.AVAILABLE,
    subMissions: [
      { id: 'm2-s1', title: 'ด่านฝึกฝน: เรขาคณิตครองโลก', description: 'โจทย์ 10 ข้อ ลำดับเรขาคณิตและอนุกรม', problems: [] }
    ]
  },
  {
    id: 'm3',
    title: 'ภารกิจที่ 3: ผลรวมอนันต์ (Series & Sigma)',
    description: 'เจาะลึกสัญลักษณ์ Sigma และลิมิตของลำดับอนันต์',
    icon: '∑',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop',
    status: MissionStatus.AVAILABLE,
    subMissions: [
      { id: 'm3-s1', title: 'ด่านฝึกฝน: Sigma & Limit', description: 'โจทย์ 10 ข้อ หาผลรวมและลิมิต', problems: [] }
    ]
  },
  {
    id: 'm4',
    title: 'ภารกิจที่ 4: โจทย์ปัญหา (Word Problems)',
    description: 'ประยุกต์ใช้คณิตศาสตร์ในชีวิตจริง ทั้งการเงิน การเติบโต และฟิสิกส์',
    icon: '🌍',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop',
    status: MissionStatus.AVAILABLE,
    subMissions: [
      { id: 'm4-s1', title: 'ด่านฝึกฝน: นักแก้ปัญหาตัวจริง', description: '10 โจทย์ปัญหาท้าทายความคิด สถานการณ์จริง', problems: [] }
    ]
  }
];