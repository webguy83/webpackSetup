import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';

const Index = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

export default Index;

ReactDOM.render(<Index />, document.getElementById('root'));