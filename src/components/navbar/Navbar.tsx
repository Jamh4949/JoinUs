import './Navbar.scss';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/JoinUs.png';
import type { FC } from 'react';

type NavLink = {
    label: string;
    path: string;
};

const NAV_LINKS: readonly NavLink[] = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre Nosotros', path: '/about' },
    { label: 'Mapa del Sitio', path: '/sitemap' },
] as const;

const Navbar: FC = () => {
    const [showNav, setShowNav] = useState<boolean>(false);

    const handleToggleNav = (): void => {
        setShowNav((prev: boolean): boolean => !prev);
    };

    const handleCloseNav = (): void => {
        setShowNav(false);
    };

    return (
        <header className="navbar">
            <nav className="navbar__container wrapper">
                <Link 
                    to="/" 
                    className="navbar__logo" 
                    onClick={handleCloseNav}
                >
                    <img src={Logo} alt="Logo de JoinUs" />
                </Link>

                <ul className={`navbar__links ${showNav ? 'show' : ''}`}>
                    {NAV_LINKS.map((link: NavLink) => (
                        <li key={link.label}>
                            <Link to={link.path} onClick={handleCloseNav}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="navbar__btns">
                    <Link to="/login" className="navbar__login-btn">
                        Iniciar Sesión
                    </Link>
                    <Link to="/register" className="btn">
                        Registrarse
                    </Link>
                </div>

                <button
                    type="button"
                    className="navbar__menu"
                    onClick={handleToggleNav}
                    aria-expanded={showNav}
                    aria-label="Abrir o cerrar menú"
                >
                    {showNav ? <IoMdClose /> : <IoMenu />}
                </button>
            </nav>
        </header>
    );
};

export default Navbar;
