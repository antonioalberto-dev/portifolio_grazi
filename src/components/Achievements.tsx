import { Trophy, Users, Target, Award } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Trophy,
      number: '3',
      label: 'Anos',
      subtitle: 'Campeonatos Estudantis',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      number: '200',
      label: 'Plus',
      subtitle: 'Jogos Disputados',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      number: '1',
      label: 'Destaque',
      subtitle: 'Circuito Nacional Anita',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Award,
      number: '1',
      label: 'Destaque',
      subtitle: 'Melhor Levantadora',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-paytone">Trajetórias e Vivências</h2>
          <h3 className="text-3xl font-bold text-blue-600">Minhas Conquistas como Atleta</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800">{achievement.number}</div>
                <div className="text-lg font-semibold text-gray-600">{achievement.label}</div>
                <div className="text-sm text-gray-500 mt-1">{achievement.subtitle}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <h4 className="text-2xl font-bold text-blue-800 mb-6 text-center">Formação & Experiência</h4>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                2024 - Atualmente
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Carreira Profissional & Coaching</h5>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                2019 - 2023
              </div>
              <div>
                <h5 className="font-semibold text-gray-800">Circuito Profissional de Vôlei de Quadra</h5>
                <p className="text-gray-600 text-sm">
                  Experiência prática com diferentes metodologias de treinamento, 
                  tática e preparação física específica para rendimento.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}