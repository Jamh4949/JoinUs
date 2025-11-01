import './SiteMap.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { FC } from 'react';

const SiteMap: FC = () => {
  useEffect((): void => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="sitemap">
      <div className="sitemap__container wrapper">
        <h1 data-aos="fade-up">Mapa del Sitio</h1>
        <div className="sitemap__content" data-aos="fade-up">
          <div className="sitemap__section">
            <h2>Navegación Principal</h2>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/about">Sobre Nosotros</Link></li>
              <li><Link to="/sitemap">Mapa del Sitio</Link></li>
            </ul>
          </div>

          <div className="sitemap__section">
            <h2>Usuario</h2>
            <ul>
              <li><Link to="/login">Iniciar Sesión</Link></li>
              <li><Link to="/register">Registrarse</Link></li>
            </ul>
          </div>

          <div className="sitemap__section">
            <h2>Recursos</h2>
            <ul>
              <li><a href="#">Manual de Usuario</a></li>
              <li><a href="#">Política de Privacidad</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteMap;
