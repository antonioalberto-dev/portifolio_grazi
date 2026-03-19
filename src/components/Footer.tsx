import { Instagram} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4 font-paytone">Graziella Colares</h3>
            <p className="text-gray-400 mb-4 font-lexend">
              Transformando vidas através do movimento, 
              esporte e hábitos saudáveis.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/g_.colares" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-paytone ">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors font-lexend">Personal Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-lexend">Treinamento de Vôlei</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-lexend">Consultoria Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors font-lexend">Planos de Treino</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 font-paytone">Contato</h4>
            <ul className="space-y-2 text-gray-400 font-lexend">
              <li>Manaus, AM</li>
              <li>(92) 9 9332-4046</li>
              <li>grazi@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 font-lexend text-[10px]">
          <p>&copy; 2026 Todos os direitos reservados. Desenvolvido por Antônio Barbosa</p>
        </div>
      </div>
    </footer>
  );
}