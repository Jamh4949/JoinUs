import './Footer.scss';
import Logo from '../../assets/JoinUs.png';
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
          <a href="#">Inicio</a>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Mapa del Sitio</a>
        </div>

        <div className="footer__col">
          <h3>Opciones del Usuario:</h3>
          <a href="#">Login</a>
          <a href="#">Registro</a>
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
