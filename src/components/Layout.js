import React from 'react';

import Header from './part/Header';
import Footer from './part/Footer';
import SEO from './part/Seo';
import {Reveal} from 'react-reveal';

const Layout = props => {
    return <>
        <SEO 
            title={props.title}
        />
        <main id={props.id} style={props.style || null} className={props.className || ''}>
            <Header />
            <div className="page-content w-100">
                <Reveal effect="page-transition-in" effectOut="page-transition-out">
                    {props.children}
                </Reveal>
            </div>
            <Footer />
        </main>
    </>
}

export default Layout;