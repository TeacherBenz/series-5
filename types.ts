import React from 'react';

export enum MissionStatus {
  LOCKED = 'LOCKED',
  AVAILABLE = 'AVAILABLE',
  COMPLETED = 'COMPLETED'
}

export enum Difficulty {
  EASY = 'EASY',
  MEDIUM = 'MEDIUM',
  HARD = 'HARD'
}

export interface Choice {
  id: string;
  text: string;
  isCorrect: boolean;
}

export interface Problem {
  id: string;
  question: string;
  choices: Choice[];
  explanation: string; // Brief summary
  explanationSteps?: string[]; // Detailed steps
  difficulty: Difficulty;
}

export interface SubMission {
  id: string;
  title: string;
  description: string;
  problems: Problem[]; // Generated dynamically
}

export interface Mission {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode; 
  image: string;
  subMissions: SubMission[];
  status: MissionStatus;
}

export enum AppScreen {
  DASHBOARD = 'DASHBOARD',
  DIFFICULTY_SELECT = 'DIFFICULTY_SELECT',
  QUIZ = 'QUIZ',
  VICTORY = 'VICTORY'
}

export interface UserState {
  xp: number;
  level: 'Novice' | 'Intermediate' | 'Master';
  completedProblems: string[];
}