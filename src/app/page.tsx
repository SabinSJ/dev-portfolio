import Navbar from '@/components/navbar/navbar';
import Hero from './sections/Hero'
import Skills from '@/components/skills/skills';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <div style={{width: '100%', minHeight: '100vh', display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: "space-between", padding: '0 200px' }}>
      <Navbar />
      <Hero />
      <Skills />
      <Footer />
    </div>
  );
}
