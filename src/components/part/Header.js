import React from 'react';

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
                        <li><a href="/about">About</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>

                <div className="logo">
                    <a href="/" title="Madieja Personal Page">
                    <img src="assets/images/logo.svg" alt="logo" />
                    </a>
                </div>

                <div className="social d-none d-lg-block ml-auto">
                    <a href="https://twitter.com"><i className="fa fa-twitter"></i></a>
                    <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
                    <a href="https://github.com"><i className="fa fa-github"></i></a>
                    <a href="https://linkedin.com"><i className="fa fa-linkedin"></i></a>
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
                    <a>Home</a>
                    <a>About</a>
                    <a>Portfolio</a>
                    <a>Blog</a>
                    <a>Contact</a>
                    <div className="social">
                        <a href="https://twitter.com"><i className="fa fa-twitter"></i></a>
                        <a href="https://instagram.com"><i className="fa fa-instagram"></i></a>
                        <a href="https://github.com"><i className="fa fa-github"></i></a>
                        <a href="https://linkedin.com"><i className="fa fa-linkedin"></i></a>
                    </div>
                </nav>
            </div>
        </header>
    )
}


export default Header;