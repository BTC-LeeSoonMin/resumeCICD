import * as React from 'react';
import Typography from '@mui/material/Typography';
import PortfolioPJT from './PortfolioPJT';
import SwimpyoPJT from './SwimpyoPJT';
import BooglingPJT from './BooglingPJT';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material';

export default function SubHeadProject() {

    return (
        <React.Fragment>
            <Typography variant="h5" align="left">
                Project
            </Typography>
            <Carousel>
                <PortfolioPJT />
                <SwimpyoPJT />
                <BooglingPJT />
            </Carousel>
            <Box sx={{mt: 10}}>&nbsp;</Box>
        </React.Fragment>
    );
}