import { ArrowRight, Users, Award, Target, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Projeto Prefeitura de Manaus",
      tag: "Projeto",
      tagColor: "bg-yellow-500",
      image: "bg-gradient-to-br from-blue-500 to-blue-700",
      description: "Treino para escolinha de vôlei em um centro esportivo de esporte e lazer. Modalidades masculino e feminino com faixa etária de 13 a 17 anos"
    },
    {
      title: "Manaus Vôlei",
      tag: "Coordenação Técnica", 
      tagColor: "bg-yellow-500",
      image: "bg-gradient-to-br from-teal-400 to-blue-500",
      description: "Coordenação técnica e preparação física das equipes sub-15 e sub-17."
    },
    {
      title: "Desafio das Arenas",
      tag: "Projeto comunitário",
      tagColor: "bg-yellow-500",
      image: "bg-gradient-to-br from-green-400 to-teal-500",
      description: "campeonato comunitário focado em atletas amadores e profissionais nas zonas da cidade"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 font-lexend">
            EXPERIÊNCIA PROFISSIONAL
          </h2>
          <h3 className="text-4xl font-bold text-gray-800 font-paytone">Projetos & Impacto</h3>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-lexend">
            Mais de uma década dedicada à educação física,
            transformando comunidades através de clínicas de vôlei e
            programas de treinamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 font-lexend">
          {projects.map((project, index) => {
            return (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`h-64 ${project.image} relative flex flex-col justify-between p-6 text-white`}>
                  <div>
                    <div className={`inline-block px-3 py-1 ${project.tagColor} text-white text-xs font-bold rounded-full uppercase tracking-wide mb-3`}>
                      {project.tag}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                    <p className="text-sm opacity-90 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <button className="flex items-center text-yellow-400 font-bold text-sm hover:text-yellow-300 transition-colors">
                      Ver Detalhes
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}