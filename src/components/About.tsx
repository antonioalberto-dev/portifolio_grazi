export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Minha Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Metodologias validadas que são o melhor equilíbrio de eficácia em treinos e movimentos corporais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Treinamento de Vôlei</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Fundamentos técnicos básicos, táticos, técnicos</p>
                <p>• Preparação física específica</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Personal Trainer</h3>
              <div className="space-y-2 text-gray-700">
                <p>• Consultoria presencial e online</p>
                <p>• Planos de treino individualizados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}