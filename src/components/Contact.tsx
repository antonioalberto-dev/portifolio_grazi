'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode implementar a lógica de envio do formulário
    console.log('Email enviado:', email);
    alert('Obrigada pelo interesse! Entraremos em contato em breve.');
    setEmail('');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 font-paytone">Pronto para elevar seu jogo?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Estou aqui para te acompanhar seja através de mentorias 
            ou treinos específicos para o acompanhamento.
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
              <button
                type="submit"
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors"
              >
                Enviar E-mail
              </button>
            </form>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-4 mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <p className="text-blue-100">contato@example.com</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-4 mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <p className="text-blue-100">(11) 99999-9999</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white/20 rounded-full p-4 mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="text-blue-100">São Paulo, SP</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}