'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const handleLearnMore = () => {
    // Scroll para a seção de projetos ou abrir modal com mais informações
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-30 bg-blue-50" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Imagem/Card à esquerda */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 transform rotate-2">
              <div className="bg-linear-to-br from-blue-100 to-blue-200 rounded-2xl aspect-video flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/images/IMG_3949.PNG"
                  alt="Grazi - Educadora Física e Coach de Vôlei"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover object-top rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Conteúdo à direita */}
          <div className="space-y-6">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2 font-lexend">
                QUEM SOU
              </p>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 font-paytone">
                Oi, eu sou a Grazi!
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed font-lexend">
              Sou educadora física e treinadora de vôlei com mais de uma década de experiência. 
              Meu propósito é unir a alta performance técnica com a saúde integral, ajudando 
              atletas e alunos a superarem seus limites e conquistarem resultados extraordinários 
              dentro e fora das quadras.
            </p>

            <button
              onClick={handleLearnMore}
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors group font-lexend"
            >
              Conheça um pouco da minha trajetória
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}