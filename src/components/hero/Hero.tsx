import './Hero.scss';
import Hero1 from '../../assets/hero1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import type { FC } from 'react';

const Hero: FC = () => {
    useEffect((): void => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="hero">
            <div className="hero__container wrapper">
                <div className="hero__left" data-aos="fade-right">
                    <img src={Hero1} alt="Hero principal" />
                </div>
                <div className="hero__right" data-aos="zoom-in-up">
                    <h1>Videoconferencias simplificadas</h1>
                    <p>
                        Crea y gestiona tus reuniones con facilidad. Únete a JoinUs y transforma tu
                        experiencia de comunicación.
                    </p>
                    <div className="hero__cta">
                        <a href="#" className="btn">
                            Únete ahora
                        </a>
                        <span className="hero__cta-alt">O</span>
                        <div className="hero__login">
                            <a href="#" className="hero__login-btn">
                                Inicia Sesión
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
