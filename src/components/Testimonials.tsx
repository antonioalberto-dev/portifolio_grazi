import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Laura Silva",
      role: "Atleta Amadora",
      image: "LS",
      rating: 5,
      text: "A Graziella transformou completamente minha relação com o esporte. Suas metodologias são incríveis!"
    },
    {
      name: "Mariana Torres", 
      role: "Empresária",
      image: "MT",
      rating: 5,
      text: "Profissional excepcional! Me ajudou a alcançar meus objetivos de forma consistente e saudável."
    },
    {
      name: "Ricardo Santos",
      role: "Estudante",
      image: "RS", 
      rating: 5,
      text: "As aulas de vôlei da Grazi são fantásticas. Aprendi muito sobre técnica e tática do jogo."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2 font-lexend">
            O que dizem sobre mim
          </h2>
          <h3 className="text-4xl font-bold text-gray-800 font-paytone">Depoimentos Inspiradores</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto font-lexend">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-lg mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}