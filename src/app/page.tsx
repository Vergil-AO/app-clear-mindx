'use client';

import { useAuth } from '@/lib/auth-context';
import { Button } from '@/components/ui/button';
import { Brain, Target, Users, TrendingUp, Shield, Calendar, BookOpen, Award } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    router.push('/dashboard');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/0748e6eb-e534-4d10-ac53-db8a845e642c.jpg" 
              alt="Clear Mind Logo" 
              className="h-12 w-12 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-white">Clear Mind</h1>
              <p className="text-xs text-purple-300">Saia da pornografia agora</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Entrar
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Começar Grátis
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
            <span className="text-purple-300 text-sm font-medium">🔥 Mais de 10.000 homens já transformaram suas vidas</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Recupere o Controle da
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Sua Vida</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vença o vício em pornografia e outros vícios com estratégias cientificamente comprovadas, 
            comunidade de apoio e acompanhamento diário personalizado.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/register">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-lg px-8 py-6">
                Começar 7 Dias Grátis
              </Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6">
                Ver Planos
              </Button>
            </Link>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>100% Anônimo</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>Sem Compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span>Resultados Comprovados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Por Que o Clear Mind Funciona?
          </h2>
          <p className="text-gray-400 text-lg">
            Baseado em neurociência e psicologia comportamental
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Compreenda o Vício</h3>
            <p className="text-gray-400">
              Entenda como seu cérebro funciona e por que você desenvolveu esse padrão.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Estratégias Práticas</h3>
            <p className="text-gray-400">
              18 estratégias testadas para vencer gatilhos e construir novos hábitos.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Rotina & Disciplina</h3>
            <p className="text-gray-400">
              Check-ins diários, metas e acompanhamento do seu progresso em tempo real.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Comunidade de Apoio</h3>
            <p className="text-gray-400">
              Conecte-se com outros homens na mesma jornada. Você não está sozinho.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20 rounded-3xl p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">10,000+</div>
              <div className="text-gray-400">Homens Transformados</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">87%</div>
              <div className="text-gray-400">Taxa de Sucesso</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">30 dias</div>
              <div className="text-gray-400">Média de Recuperação</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-400 text-lg">
            4 passos simples para sua transformação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { step: '1', title: 'Cadastre-se', desc: '7 dias grátis para experimentar', icon: Users },
            { step: '2', title: 'Avalie-se', desc: 'Identifique seus gatilhos e padrões', icon: Brain },
            { step: '3', title: 'Siga as Estratégias', desc: 'Implemente técnicas comprovadas', icon: BookOpen },
            { step: '4', title: 'Acompanhe o Progresso', desc: 'Veja sua evolução diária', icon: TrendingUp },
          ].map((item) => (
            <div key={item.step} className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm text-purple-400 font-semibold mb-2">PASSO {item.step}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Pronto Para Mudar Sua Vida?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Junte-se a milhares de homens que já recuperaram o controle. 
            Comece hoje com 7 dias grátis, sem compromisso.
          </p>
          <Link href="/register">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-8 py-6">
              Começar Agora - É Grátis
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© 2024 Clear Mind. Todos os direitos reservados.</p>
          <p className="mt-2">Sua privacidade é 100% protegida. Ambiente seguro e anônimo.</p>
        </div>
      </footer>
    </div>
  );
}
