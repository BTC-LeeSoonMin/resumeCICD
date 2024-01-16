import * as React from 'react';
import MyImg from '../components/MyImg';
import SubHeadAboutMe from '../components/SubHeadAboutMe';
import SubHeadSkill from '../components/SubHeadSkill';
import SubHeadProject from '../components/SubHeadProject';


export default function Home () {
    return (
        <React.Fragment>
            <MyImg />
            <SubHeadAboutMe />
            <br/>
            <SubHeadSkill />
            <br />
            <SubHeadProject/>
        </React.Fragment>
    );
}