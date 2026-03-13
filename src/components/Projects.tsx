import { ArrowRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Projeto 1",
      image: "bg-gradient-to-br from-green-400 to-blue-500",
      description: "Descrição do projeto de impacto social..."
    },
    {
      title: "Projeto 2", 
      image: "bg-gradient-to-br from-purple-400 to-pink-500",
      description: "Descrição do segundo projeto..."
    },
    {
      title: "Projeto 3",
      image: "bg-gradient-to-br from-yellow-400 to-orange-500", 
      description: "Descrição do terceiro projeto..."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Experiências & Impacto
          </h2>
          <h3 className="text-4xl font-bold text-gray-800">Projetos & Impacto</h3>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Mais de uma década dedicado à educação física, transformando comunidades através do esporte e dos hábitos de vida saudáveis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className={`h-48 ${project.image} flex items-center justify-center text-white text-xl font-semibold`}>
                {project.title}
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <button className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Ver Detalhes
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}