import * as React from 'react';
import MyImg from '../components/MyImg';
import SubHeadAboutMe from '../components/SubHeadAboutMe';
import SubHeadSkill from '../components/SubHeadSkill';
import SubHeadProject from '../components/SubHeadProject';
import { Box } from '@mui/material';

export default function Home () {
    return (
        <React.Fragment>
            <MyImg />
            <SubHeadAboutMe />
            <Box sx={{m: 2}}></Box>
            <SubHeadSkill />
            <br/>
            <SubHeadProject/>
        </React.Fragment>
    );
}