import './Home.scss';
import Hero from '../../components/hero/Hero';
import Startmeet from '../../components/startmeet/Startmeet';
import type { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="home">
      <Hero />
      <Startmeet />
    </div>
  );
};

export default Home;
