'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Progress } from '@/lib/types';

interface AuthContextType {
  user: User | null;
  progress: Progress | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProgress: (progress: Partial<Progress>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [progress, setProgress] = useState<Progress | null>(null);

  // Carregar usuário do localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('clearmind_user');
    const storedProgress = localStorage.getItem('clearmind_progress');
    
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      // Converter strings de data de volta para objetos Date
      parsedUser.createdAt = new Date(parsedUser.createdAt);
      if (parsedUser.trialEndsAt) {
        parsedUser.trialEndsAt = new Date(parsedUser.trialEndsAt);
      }
      setUser(parsedUser);
    }
    
    if (storedProgress) {
      setProgress(JSON.parse(storedProgress));
    } else if (storedUser) {
      // Criar progresso inicial
      const parsedUser = JSON.parse(storedUser);
      const initialProgress: Progress = {
        userId: parsedUser.id,
        daysClean: 0,
        longestStreak: 0,
        currentStreak: 0,
        strategiesCompleted: 0,
        totalStrategies: 18,
        checkInsThisWeek: 0,
        level: 1,
        xp: 0,
      };
      setProgress(initialProgress);
      localStorage.setItem('clearmind_progress', JSON.stringify(initialProgress));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulação de login
    const mockUser: User = {
      id: 'user-' + Date.now(),
      name: email.split('@')[0],
      email,
      createdAt: new Date(),
      plan: 'free',
      trialEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    };
    
    setUser(mockUser);
    localStorage.setItem('clearmind_user', JSON.stringify(mockUser));
    
    // Criar progresso inicial
    const initialProgress: Progress = {
      userId: mockUser.id,
      daysClean: 0,
      longestStreak: 0,
      currentStreak: 0,
      strategiesCompleted: 0,
      totalStrategies: 18,
      checkInsThisWeek: 0,
      level: 1,
      xp: 0,
    };
    setProgress(initialProgress);
    localStorage.setItem('clearmind_progress', JSON.stringify(initialProgress));
  };

  const register = async (name: string, email: string, password: string) => {
    // Simulação de registro
    const mockUser: User = {
      id: 'user-' + Date.now(),
      name,
      email,
      createdAt: new Date(),
      plan: 'free',
      trialEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    };
    
    setUser(mockUser);
    localStorage.setItem('clearmind_user', JSON.stringify(mockUser));
    
    // Criar progresso inicial
    const initialProgress: Progress = {
      userId: mockUser.id,
      daysClean: 0,
      longestStreak: 0,
      currentStreak: 0,
      strategiesCompleted: 0,
      totalStrategies: 18,
      checkInsThisWeek: 0,
      level: 1,
      xp: 0,
    };
    setProgress(initialProgress);
    localStorage.setItem('clearmind_progress', JSON.stringify(initialProgress));
  };

  const logout = () => {
    setUser(null);
    setProgress(null);
    localStorage.removeItem('clearmind_user');
    localStorage.removeItem('clearmind_progress');
  };

  const updateProgress = (newProgress: Partial<Progress>) => {
    if (progress) {
      const updated = { ...progress, ...newProgress };
      setProgress(updated);
      localStorage.setItem('clearmind_progress', JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider value={{ user, progress, login, register, logout, updateProgress }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
