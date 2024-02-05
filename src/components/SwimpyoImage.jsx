import * as React from 'react';
import SwimpyoUI from '../assets/SwimpyoUI.png';

export default function SwimpyoImage() {

    return (
        <img
            src={SwimpyoUI}
            alt="Swimpyo image"
            style={{ width: '100%', height: '70%'}} />

    );
}