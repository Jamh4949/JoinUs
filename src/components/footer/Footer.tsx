import './Footer.scss';
import Logo from '../../assets/JoinUs.png';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import type { FC } from 'react';

const Footer: FC = () => {
  useEffect((): void => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="footer">
      <div className="footer__container wrapper" data-aos="fade-up">
        <div className="footer__col">
          <img src={Logo} alt="JoinUs Logo" />
          <p className="footer__copyright">JoinUs © 2024.</p>
          <p className="footer__copyright">All rights reserved.</p>
        </div>

        <div className="footer__col">
          <h3>Accede a:</h3>
          <Link to="/">Inicio</Link>
          <Link to="/about">Sobre Nosotros</Link>
          <Link to="/sitemap">Mapa del Sitio</Link>
        </div>

        <div className="footer__col">
          <h3>Opciones del Usuario:</h3>
          <Link to="/login">Login</Link>
          <Link to="/register">Registro</Link>
          <a href="#">Olvidé mi Contraseña</a>
        </div>

        <div className="footer__col">
          <h3>Guía:</h3>
          <a href="#">Manual de Usuario</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
