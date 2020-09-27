import React, { useState } from 'react';
import Layout from '../components/layout';
import InputControl from '../components/inputControl';

const LandingPage: React.FC = () => {
    const [value, setValue] = useState('');
    return (
        <Layout title="Kawen | LandingPage">
            <h1>h1</h1>
            <h2>h2</h2>
            <h3>h3</h3>
            <h4>h4</h4>
            <h5>h5</h5>
            <h5 className="h5-regular">h5 regular</h5>
            <p>body</p>
            <InputControl
                {...{ value }}
                onChange={(e) => setValue(e.target.value)}
                label="Full Name"
            />
            <p className="button">button style</p>
            <button className="btn">regular Button</button>
            <br />
            <button className="btn btn-round">rounded button</button>
            <br />
            <button className="btn btn-round btn-outline">
                outlined rounded button
            </button>
            <br />
        </Layout>
    );
};

export default LandingPage;
