import './Login.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import type { FC, FormEvent, ChangeEvent } from 'react';

interface LoginFormData {
  email: string;
  password: string;
}

const Login: FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
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
    console.log('Login data:', formData);
    // Aquí irá la lógica de autenticación manual
  };

  const handleGoogleLogin = (): void => {
    console.log('Login with Google');
    // Aquí irá la lógica de autenticación con Google
  };

  const handleFacebookLogin = (): void => {
    console.log('Login with Facebook');
    // Aquí irá la lógica de autenticación con Facebook
  };

  return (
    <section className="login">
      <div className="login__container wrapper">
        <div className="login__card" data-aos="zoom-in">
          <h1>Iniciar Sesión</h1>
          <p className="login__subtitle">
            Bienvenido de nuevo a JoinUs
          </p>

          <div className="login__social">
            <button
              type="button"
              className="login__social-btn login__social-btn--google"
              onClick={handleGoogleLogin}
            >
              <FcGoogle size={24} />
              <span>Continuar con Google</span>
            </button>
            <button
              type="button"
              className="login__social-btn login__social-btn--facebook"
              onClick={handleFacebookLogin}
            >
              <FaFacebook size={24} />
              <span>Continuar con Facebook</span>
            </button>
          </div>

          <div className="login__divider">
            <span>O</span>
          </div>

          <form onSubmit={handleSubmit} className="login__form">
            <div className="login__field">
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

            <div className="login__field">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
              />
            </div>

            <div className="login__options">
              <Link to="/forgot-password" className="login__forgot">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button type="submit" className="btn login__submit">
              Iniciar Sesión
            </button>
          </form>

          <p className="login__register">
            ¿No tienes una cuenta?{' '}
            <Link to="/register">Regístrate aquí</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
