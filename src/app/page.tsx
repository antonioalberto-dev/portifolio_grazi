import Header from '@/components/Header';
import About from '@/components/About';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="sobre">
        <About />
      </div>
      <div id="projetos">
        <Projects />
      </div>
      <div id="conquistas">
        <Achievements />
      </div>
      <div id="depoimentos">
        <Testimonials />
      </div>
      <Contact />
      <Footer />
    </main>
  );
}
