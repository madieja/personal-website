import React from 'react';

import Header from '../components/part/Header';

const Index = () => {
    return (
        <>
            <Header/>
            <h1>Hello <span style={{color: 'orange'}}><i className="fa fa-bars"></i></span></h1>
        </>
    )
}

export default Index;