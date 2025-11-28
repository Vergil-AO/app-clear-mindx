// Tipos do Clear Mind App

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  plan: 'free' | 'monthly' | 'semester' | 'annual';
  trialEndsAt?: Date;
}

export interface Strategy {
  id: string;
  title: string;
  description: string;
  category: 'understanding' | 'practical' | 'routine' | 'discipline';
  completed: boolean;
  completedAt?: Date;
}

export interface CheckIn {
  id: string;
  userId: string;
  strategyId: string;
  date: Date;
  notes?: string;
  mood: 1 | 2 | 3 | 4 | 5;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  addictionType: string;
  memberCount: number;
  posts: Post[];
}

export interface Post {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  communityId: string;
  content: string;
  createdAt: Date;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  userName: string;
  content: string;
  createdAt: Date;
}

export interface DiaryEntry {
  id: string;
  userId: string;
  date: Date;
  content: string;
  mood: 1 | 2 | 3 | 4 | 5;
  triggers?: string[];
}

export interface Goal {
  id: string;
  userId: string;
  title: string;
  description: string;
  targetDate: Date;
  completed: boolean;
  progress: number;
}

export interface Progress {
  userId: string;
  daysClean: number;
  longestStreak: number;
  currentStreak: number;
  strategiesCompleted: number;
  totalStrategies: number;
  checkInsThisWeek: number;
  level: number;
  xp: number;
}
