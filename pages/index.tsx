import React, { useState } from 'react';
import Layout from '../components/layout';
import InputControl from '../components/inputControl';

const LandingPage: React.FC = () => {
    const [value, setValue] = useState('');
    return (
        <Layout>
            <div>
                <h1>init commit</h1>
            </div>
            <p className="h5 h5-regular">should have h5 styles</p>
            <div style={{ margin: '50px', padding: '20px' }}>
                <InputControl
                    label="Full Name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div style={{ margin: '50px', padding: '20px' }}>
                <InputControl
                    label="Full Name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </Layout>
    );
};

export default LandingPage;
