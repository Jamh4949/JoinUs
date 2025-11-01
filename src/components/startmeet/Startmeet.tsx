import './Startmeet.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import type { FC, FormEvent } from 'react';

const Startmeet: FC = () => {
  useEffect((): void => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <section className="startmeet">
      <div className="startmeet__container wrapper">
        <h2 data-aos="fade-up">
          ¡Comienza o únete a tu reunión con un solo click!
        </h2>
        <p data-aos="fade-up">
          ¿Listo para conectar? Usa el código de invitación para unirte
          rápidamente a cualquier sala o crea una nueva reunión privada en este
          momento para empezar a hablar con quien quieras.
        </p>
        <form action="#" data-aos="fade-up" onSubmit={handleSubmit}>
          <input type="text" placeholder="Ingresa el código..." />
          <a href="#" className="btn">
            Unirse a la reunión
          </a>
        </form>
        <div className="startmeet__alt" data-aos="fade-up">
          <p>O también puedes</p>
          <a href="#" className="btn">
            Iniciar una nueva reunión
          </a>
        </div>
      </div>
    </section>
  );
};

export default Startmeet;
