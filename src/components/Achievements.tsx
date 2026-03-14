import { Award, Star } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Star,
      title: 'Destaque',
      subtitle: 'Melhor Levantadora',
      description: 'Prêmio de melhor levantadora do ano 2023, na categoria sub18',
      color: 'bg-blue-600'
    },
    {
      icon: Award,
      title: '2º lugar',
      subtitle: 'Jogos Escolares Brasileiro',
      description: 'Vice Campeã nos Jogos Escolares Brasileiro no ano de 20XX',
      color: 'bg-blue-600'
    },
    {
      icon: Award,
      title: '3º lugar',
      subtitle: 'Jogos Escolares do Amazonas',
      description: 'Conquista do bronze nos Jogos Escolares do Amazonas em 20XX',
      color: 'bg-blue-600'
    },
    {
      icon: Star,
      title: '5º lugar',
      subtitle: 'Rankings Nacionais',
      description: '5º lugar no ranking nacional nos Jogos Escolares Brasileiro em 20XX',
      color: 'bg-blue-600'
    }
  ];

  const timeline = [
    {
      year: '2018 - 2021',
      title: 'Formação & Desenvolvimento Técnico',
      description: 'Período de desenvolvimento nas categorias de base e início da participação em competições regionais.',
      color: 'bg-blue-600'
    },
    {
      year: '2022',
      title: 'CBS - Campeonato Brasileiro de Seleções',
      description: 'Participação em Saquarema no CT da Confederação Brasileira de Volei, marco importante na carreira atlética.',
      color: 'bg-yellow-400'
    },
    {
      year: '2023',
      title: 'Múltiplas Competições Nacionais',
      description: 'CBDE (São Paulo), CBS (Saquarema-CBV) e JEBS - Jogos Escolares Brasileiros, consolidando presença no cenário nacional.',
      color: 'bg-blue-600'
    },
    {
      year: '2024',
      title: 'CBI - Campeonato Brasileiro de Interclubes',
      description: 'Duas participações: Maringá-PR e Rio de Janeiro-RJ, competindo nos principais centros do vôlei nacional.',
      color: 'bg-yellow-400'
    },
    {
      year: '2025',
      title: 'JUBS - Jogos Universitários Brasileiros',
      description: 'Participação em Natal - Rio Grande do Norte, representando a universidade em competição nacional.',
      color: 'bg-blue-600'
    }
  ];

  return (
    <section className="py-15 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-8 font-paytone">
            Participações & Conquistas
          </h2>
          <div className="w-12 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16 font-lexend">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg font-lexend">
                <div className={`w-16 h-16 rounded-full ${achievement.color} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2 font-lexend">{achievement.title}</h3>
                <h4 className="text-lg font-semibold text-black mb-3 font-lexend">{achievement.subtitle}</h4>
                <p className="text-sm text-gray-600 leading-relaxed font-lexend">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300"></div>

            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-start mb-8 last:mb-0">
                <div className="absolute left-1 w-5 h-5 rounded-full flex items-center justify-center bg-white">
                  <div className={`w-5 h-5 ${item.color} rounded-full`}></div>
                </div>

                <div className="ml-12">
                  <div className={`inline-block text-gray-700 py-1 text-sm mb-2 font-lexend font-bold`}>
                    {item.year}
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2 font-lexend">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-lexend">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}