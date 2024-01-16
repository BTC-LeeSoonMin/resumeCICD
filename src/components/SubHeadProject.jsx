import * as React from 'react';
import Typography from '@mui/material/Typography';
import PortfolioPJT from './PortfolioPJT';

export default function SubHeadProject() {

    return (
        <React.Fragment>
            <Typography variant="h5" align="left">
                Project
            </Typography>
            <PortfolioPJT />
            <br />
        </React.Fragment>
    );
}