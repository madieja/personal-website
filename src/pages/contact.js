import React from 'react';

import Layout from "../components/Layout";

const Contact = () => {
    return <>
        <Layout id="contact" title="Contact me"
        style={{
            background: 'white',
        }}>
            <section id="hero">
                <div className="container">
                    <div className="heading-wrapper">
                    <h3 className="text-center">Just email me at :</h3>
                    <h1 className="text-center">hello@madieja.com</h1>
                    </div>
                </div>
            </section>
        </Layout>
    </>
}

export default Contact ;