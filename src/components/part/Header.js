import React from 'react';

import {Link} from 'gatsby';

const Header = () => {
    const [drawerActive, setDrawer] = React.useState(false);
    const drawerTrigger = React.useRef(null);

    React.useEffect( () => {
        const {current} = drawerTrigger;
        current.addEventListener('click', handleDrawer);
        return () => {
            current.removeEventListener('click', handleDrawer);
        }
    });

    const handleDrawer = () => {
        drawerTrigger.current.classList.toggle('is-active');
        setDrawer(!drawerActive);
    }

    return (
        <header>
            <div className="container d-flex align-items-center">
                <nav className="main-navigation d-none d-lg-block">
                    <ul className="">
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/articles">Articles</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className="logo">
                    <Link to="/" title="Madieja Personal Page">
                    <img src="assets/images/logo.svg" alt="logo" />
                    </Link>
                </div>

                <div className="social d-none d-lg-block ml-auto">
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_madieja"><i className="fa fa-twitter"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/madieja"><i className="fa fa-instagram"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/madieja"><i className="fa fa-github"></i></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/madieja"><i className="fa fa-linkedin"></i></a>
                </div>

                <div className="drawer-trigger d-block d-lg-none ml-auto ">
                    <button ref={drawerTrigger} className="hamburger hamburger--elastic" type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div className={`main-drawer ${drawerActive?'active':''}`} >
                <nav className="drawer-inner">
                    <Link to="/">Home</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/articles">Articles</Link>
                    <Link to="/contact">Contact</Link>
                    <div className="social">
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/_madieja"><i className="fa fa-twitter"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/madieja"><i className="fa fa-instagram"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/madieja"><i className="fa fa-github"></i></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/madieja"><i className="fa fa-linkedin"></i></a>
                    </div>
                </nav>
            </div>
        </header>
    )
}


export default Header;