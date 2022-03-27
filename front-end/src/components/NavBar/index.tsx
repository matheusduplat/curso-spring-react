import { ReactComponent as GithubIcon } from 'assets/img/icon-git.svg';
import { Link } from 'react-router-dom';
import './style.css';
export default function NavBar() {
    return (
        <header>
            <nav className="container">
                <div className="metaflix-nav-content">
                    <Link to={'/'}>
                        <h1>Metaflix</h1>
                    </Link>
                    <a href="https://github.com/matheusduplat" target="_blank" rel="noreferrer">
                        <div className="metaflix-contact-container">
                            <GithubIcon />
                            <p className="metaflix-contact-link">/matheusduplat</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}