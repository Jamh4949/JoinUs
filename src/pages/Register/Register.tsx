import './Register.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { FC, FormEvent, ChangeEvent } from 'react';

interface RegisterFormData {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect((): void => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Register data:', formData);
    // Aquí irá la lógica de registro
  };

  return (
    <section className="register">
      <div className="register__container wrapper">
        <div className="register__card" data-aos="zoom-in">
          <h1>Crear Cuenta</h1>
          <p className="register__subtitle">
            Únete a JoinUs y comienza a conectar
          </p>
          <form onSubmit={handleSubmit} className="register__form">
            <div className="register__field">
              <label htmlFor="firstName">Nombres</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="Juan"
              />
            </div>

            <div className="register__field">
              <label htmlFor="lastName">Apellidos</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Pérez"
              />
            </div>

            <div className="register__field">
              <label htmlFor="age">Edad</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                placeholder="18"
                min="1"
                max="120"
              />
            </div>

            <div className="register__field">
              <label htmlFor="email">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="register__field">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                minLength={8}
              />
            </div>

            <div className="register__field">
              <label htmlFor="confirmPassword">Confirmar Contraseña</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                placeholder="••••••••"
                minLength={8}
              />
            </div>

            <button type="submit" className="btn register__submit">
              Registrarse
            </button>
          </form>

          <p className="register__login">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login">Inicia sesión aquí</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Register;
