'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-100 pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-linear-to-br from-gray-500 via-gray-600 to-blue-800 text-white rounded-3xl p-12 md:p-16 shadow-2xl"
        >
          <div className="max-w-2xl">
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight font-paytone">
              Transformando Vidas através do{' '}
              <span className="block">Movimento e do Vôlei</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-10 text-gray-200 leading-relaxed">
              Alta performance e saúde integradas para atletas e alunos que buscam excelência física e técnica na quadra ou na vida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
              >
                Agendar Aula Experimental
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-800 transition-colors"
              >
                Ver Resultados
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}