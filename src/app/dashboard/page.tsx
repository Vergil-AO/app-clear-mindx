'use client';

import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Brain, 
  Target, 
  Users, 
  TrendingUp, 
  Calendar, 
  BookOpen, 
  Award,
  LogOut,
  User,
  Settings,
  Shield,
  MessageSquare
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function DashboardPage() {
  const { user, progress, logout } = useAuth();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !user) {
      router.push('/login');
    }
  }, [user, mounted, router]);

  if (!mounted || !user) {
    return null;
  }

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const progressPercentage = progress 
    ? (progress.strategiesCompleted / progress.totalStrategies) * 100 
    : 0;

  // Calcular dias restantes do trial de forma segura
  const getDaysRemaining = () => {
    if (user.plan !== 'free' || !user.trialEndsAt) return 0;
    
    const trialEnd = user.trialEndsAt instanceof Date 
      ? user.trialEndsAt 
      : new Date(user.trialEndsAt);
    
    const daysRemaining = Math.ceil((trialEnd.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    return Math.max(0, daysRemaining);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/0748e6eb-e534-4d10-ac53-db8a845e642c.jpg" 
              alt="Clear Mind Logo" 
              className="h-10 w-10 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-lg font-bold text-white">Clear Mind</h1>
              <p className="text-xs text-purple-300">Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/pricing">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                {user.plan === 'free' ? 'Upgrade' : 'Plano'}
              </Button>
            </Link>
            <Link href="/profile">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <User className="w-5 h-5" />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleLogout}
              className="text-white hover:bg-white/10"
            >
              <LogOut className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="border-b border-white/10 bg-black/10">
        <div className="container mx-auto px-4">
          <nav className="flex gap-6 overflow-x-auto">
            {[
              { id: 'overview', label: 'Visão Geral', icon: TrendingUp },
              { id: 'strategies', label: 'Estratégias', icon: Target },
              { id: 'community', label: 'Comunidade', icon: Users },
              { id: 'diary', label: 'Diário', icon: BookOpen },
              { id: 'goals', label: 'Metas', icon: Award },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-purple-500 text-white'
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Welcome Banner */}
        <div className="mb-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-2xl p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Olá, {user.name}! 👋
              </h2>
              <p className="text-gray-300">
                {user.plan === 'free' 
                  ? `Você tem ${getDaysRemaining()} dias restantes no teste grátis`
                  : 'Continue sua jornada de transformação'}
              </p>
            </div>
            {user.plan === 'free' && (
              <Link href="/pricing">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Fazer Upgrade
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader className="pb-3">
                  <CardDescription className="text-gray-400">Dias Limpo</CardDescription>
                  <CardTitle className="text-3xl text-white">{progress?.currentStreak || 0}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-green-400">
                    <TrendingUp className="w-4 h-4" />
                    <span>Continue assim!</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader className="pb-3">
                  <CardDescription className="text-gray-400">Maior Sequência</CardDescription>
                  <CardTitle className="text-3xl text-white">{progress?.longestStreak || 0}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-yellow-400">
                    <Award className="w-4 h-4" />
                    <span>Recorde pessoal</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader className="pb-3">
                  <CardDescription className="text-gray-400">Nível</CardDescription>
                  <CardTitle className="text-3xl text-white">{progress?.level || 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-purple-400">
                    <Brain className="w-4 h-4" />
                    <span>{progress?.xp || 0} XP</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader className="pb-3">
                  <CardDescription className="text-gray-400">Check-ins Semana</CardDescription>
                  <CardTitle className="text-3xl text-white">{progress?.checkInsThisWeek || 0}/7</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-blue-400">
                    <Calendar className="w-4 h-4" />
                    <span>Mantenha a rotina</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Progress Card */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Progresso nas Estratégias</CardTitle>
                <CardDescription className="text-gray-400">
                  {progress?.strategiesCompleted || 0} de {progress?.totalStrategies || 18} estratégias completadas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Progress value={progressPercentage} className="h-3" />
                <p className="text-sm text-gray-400 mt-2">
                  {progressPercentage.toFixed(0)}% concluído
                </p>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30 hover:border-purple-500/50 transition-all cursor-pointer">
                <CardHeader>
                  <Target className="w-8 h-8 text-purple-400 mb-2" />
                  <CardTitle className="text-white">Estratégias</CardTitle>
                  <CardDescription className="text-gray-300">
                    Continue implementando técnicas comprovadas
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30 hover:border-blue-500/50 transition-all cursor-pointer">
                <CardHeader>
                  <Users className="w-8 h-8 text-blue-400 mb-2" />
                  <CardTitle className="text-white">Comunidade</CardTitle>
                  <CardDescription className="text-gray-300">
                    Conecte-se com outros na mesma jornada
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30 hover:border-green-500/50 transition-all cursor-pointer">
                <CardHeader>
                  <BookOpen className="w-8 h-8 text-green-400 mb-2" />
                  <CardTitle className="text-white">Diário</CardTitle>
                  <CardDescription className="text-gray-300">
                    Registre seus pensamentos e reflexões
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        )}

        {/* Other Tabs Placeholder */}
        {activeTab !== 'overview' && (
          <Card className="bg-white/5 backdrop-blur-sm border-white/10">
            <CardHeader>
              <CardTitle className="text-white">
                {activeTab === 'strategies' && 'Estratégias Práticas'}
                {activeTab === 'community' && 'Comunidade'}
                {activeTab === 'diary' && 'Diário Pessoal'}
                {activeTab === 'goals' && 'Metas e Objetivos'}
              </CardTitle>
              <CardDescription className="text-gray-400">
                Conteúdo em desenvolvimento - Módulo 2
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                Esta seção será implementada no próximo módulo com todas as funcionalidades completas.
              </p>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
}
