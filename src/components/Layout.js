import React from 'react';

import Header from './part/Header';
import Footer from './part/Footer';

const Layout = props => {
    return(
        <main id={props.id} style={props.style || null} className={props.className || ''}>
            <Header />
            <div className="page-content w-100">
                {props.children}
            </div>
            <Footer />
        </main>
    )
}

export default Layout;