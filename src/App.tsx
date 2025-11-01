import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Startmeet from './components/startmeet/Startmeet';
import Footer from './components/footer/Footer';
import type { FC } from 'react';

const App: FC = () => {
  return (
    <>  
      <Navbar />
      <Hero />
      <Startmeet />
      <Footer /> 
    </>
  );
};

export default App;