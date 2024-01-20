import * as React from 'react';
import Typography from '@mui/material/Typography';
import PortfolioPJT from './PortfolioPJT';
import SwimpyoPJT from './SwimpyoPJT';
import BooglingPJT from './BooglingPJT';

export default function SubHeadProject() {

    return (
        <React.Fragment>
            <Typography variant="h5" align="left">
                Project
            </Typography>
            <PortfolioPJT />
            <br />
            <SwimpyoPJT />
            <br />
            <BooglingPJT />
            <br />
        </React.Fragment>
    );
}