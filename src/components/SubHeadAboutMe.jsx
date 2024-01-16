import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function SubHeadAboutMe() {

    return (
        <React.Fragment>
            <Box align="left" >
                <Typography variant="h4" >
                    이순민 (LEE SOONMIN)
                </Typography>
                <br />
                <Typography variant="h5" sx={{ display: 'inline'}}>
                    About me&nbsp;&nbsp;
                </Typography>
                <Typography variant="body" >
                    안녕하세요.
                </Typography>
            </Box>
        </React.Fragment>

    );
}