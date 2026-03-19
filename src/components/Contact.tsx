'use client';

import { MessageCircle, Mail } from 'lucide-react';

export default function Contact() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5592993324046', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:contato@graziella.com', '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-linear-to-br from-blue-600 to-blue-800 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-5xl font-bold mb-6 text-white font-paytone">
              Pronto para elevar seu jogo?
            </h2>
            <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed font-lexend">
              Entre em contato hoje e comece sua jornada de transformação física com acompanhamento profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center font-lexend">
              <button
                onClick={handleWhatsAppClick}
                className="bg-yellow-400 hover:bg-yellow-300 text-black px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageCircle className="w-6 h-6" />
                Falar no WhatsApp
              </button>
              
              <button
                onClick={handleEmailClick}
                className="bg-white hover:bg-gray-50 text-blue-600 px-10 py-4 rounded-full font-bold text-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-6 h-6" />
                Enviar E-mail
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}