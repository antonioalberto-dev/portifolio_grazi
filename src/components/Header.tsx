'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5592993324046', '_blank');
  };

  const navItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Conquistas', href: '#conquistas' },
    { name: 'Projetos', href: '#projetos' },
    { name: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-yellow-400/50 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">🏐</span>
            </div>
            <span className="text-xl font-bold text-blue-600 font-paytone">Graziella Colares</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium font-lexend"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-700 transition-colors font-lexend"
            >
              Fale comigo
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-200 font-lexend"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item.name}
                </a>
              ))}
              <button 
                onClick={handleWhatsAppClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors w-full"
              >
                Agendar Aula
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}