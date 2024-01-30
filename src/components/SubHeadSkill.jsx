import * as React from 'react';
import Typography from '@mui/material/Typography';
import ReactModal from './ReactModal';
import SpringbootModal from './SpringbootModal';

export default function SubHeadSkill() {

    return (
        <React.Fragment>
            <Typography variant="h5" align="left">
                Skill
            </Typography>
            <Typography align="left">
                <Typography sx={{ display: 'inline', fontWeight: 'bold' }}>FrontEnd : </Typography>
                <ReactModal /><br />
                <Typography sx={{ display: 'inline', fontWeight: 'bold' }}>BackEnd : </Typography>
                <SpringbootModal />, Mybatis, Node.js, express<br />
                <Typography sx={{ display: 'inline', fontWeight: 'bold' }}>DB : </Typography>
                MySQL, MongoDB<br />
                <Typography sx={{ display: 'inline', fontWeight: 'bold' }}>Tool : </Typography>
                Git&Github, Jira, Postman ...
            </Typography>



        </React.Fragment>

    );
}