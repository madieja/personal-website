import React from 'react';

import Header from './part/Header';

const Layout = props => {
    return(
        <main id={props.id} style={props.style || null} className={props.className || ''}>
            <Header />
            <div className="page-content w-100">
                {props.children}
            </div>
        </main>
    )
}

export default Layout;