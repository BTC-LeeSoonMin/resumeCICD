import * as React from 'react';
import PortfolioUI from '../assets/PortfolioUI.png';

export default function PortfolioImage() {

    return (
        <img
            src={PortfolioUI}
            alt="Portfolio image"
            style={{ width: '100%', height: '70%'}} />

    );
}