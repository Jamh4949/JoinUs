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

interface FormErrors {
  email?: string;
  password?: string;
}

const Login: FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  useEffect((): void => {
    AOS.init({ duration: 1000 });
  }, []);

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Correo electrónico inválido';
        }
        break;

      case 'password':
        if (value.length < 8) {
          return 'La contraseña debe tener al menos 8 caracteres';
        }
        break;
    }
    return undefined;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Validar el campo si ya fue tocado
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Validar todos los campos
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof LoginFormData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    // Marcar todos los campos como tocados
    const allTouched: { [key: string]: boolean } = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Si hay errores, no enviar el formulario
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log('Login data:', formData);
    // Aquí irá la lógica de autenticación manual con el backend
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
                onBlur={handleBlur}
                required
                placeholder="tu@email.com"
                className={errors.email && touched.email ? 'error' : ''}
              />
              {errors.email && touched.email && (
                <span className="login__error">{errors.email}</span>
              )}
            </div>

            <div className="login__field">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                placeholder="••••••••"
                className={errors.password && touched.password ? 'error' : ''}
              />
              {errors.password && touched.password && (
                <span className="login__error">{errors.password}</span>
              )}
            </div>

            <div className="login__options">
              <a href="#" className="login__forgot">
                ¿Olvidaste tu contraseña?
              </a>
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
