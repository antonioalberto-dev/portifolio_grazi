import { ArrowRight, Users, Award, Target, Calendar } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Projeto Prefeitura de Manaus",
      tag: "Projeto",
      tagColor: "bg-yellow-500",
      image: "/assets/images/tec-3.jpeg",
      description: "Treino para escolinha de vôlei em um centro esportivo de esporte e lazer. Modalidades masculino e feminino com faixa etária de 13 a 17 anos"
    },
    {
      title: "Manaus Vôlei",
      tag: "Coordenação Técnica", 
      tagColor: "bg-yellow-500",
      image: "/assets/images/tec-1.jpeg",
      description: "Coordenação técnica e preparação física das equipes sub-15 e sub-17."
    },
    {
      title: "Desafio das Arenas",
      tag: "Projeto comunitário",
      tagColor: "bg-yellow-500",
      image: "/assets/images/tec-2.jpeg",
      description: "Campeonato comunitário focado em atletas amadores e profissionais nas zonas da cidade"
    }
  ];

  return (
    <section className="py-20 bg-white" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 font-lexend">
            EXPERIÊNCIA PROFISSIONAL
          </h2>
          <h3 className="text-4xl font-bold text-gray-800 font-paytone">Projetos & Impacto</h3>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto font-lexend">
            Através do vôlei e da educação física, busco impactar positivamente a vida das pessoas, incentivando disciplina, trabalho em equipe e evolução pessoal dentro e fora das quadras.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16 font-lexend">
          {projects.map((project, index) => {
            const isImagePath = project.image.startsWith('/');
            const backgroundStyle = isImagePath 
              ? { backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }
              : {};
            
            return (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div 
                  className={`h-64 relative flex flex-col justify-between p-6 text-white ${!isImagePath ? project.image : ''}`}
                  style={backgroundStyle}
                >
                  {isImagePath && <div className="absolute inset-0 bg-black/40"></div>}
                  <div className="relative z-10">
                    <div className={`inline-block px-3 py-1 ${project.tagColor} text-white text-xs font-bold rounded-full uppercase tracking-wide mb-3`}>
                      {project.tag}
                    </div>
                    <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                    <p className="text-sm opacity-90 leading-relaxed">{project.description}</p>
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