import * as React from 'react';
import BooglingUI from '../assets/BooglingUI.png';

export default function BooglingImage() {

    return (
        <img
            src={BooglingUI}
            alt="Boogling image"
            style={{ width: '100%', height: '70%'}} />

    );
}