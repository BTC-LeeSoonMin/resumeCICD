import * as React from 'react';
import Typography from '@mui/material/Typography';
import ReactModal from './ReactModal';
import SpringbootModal from './SpringbootModal';
import Tooltip from '@mui/material/Tooltip';

export default function SubHeadSkill() {

    return (
        <React.Fragment>
            <Typography variant="h5" align="left">
                Skill
            </Typography>
            <Typography align="left">
                <Typography sx={{ display: 'inline', fontWeight: 'bold' }}>FrontEnd : </Typography>
                <Tooltip title="돋보기있는 Skill을 클릭시 더 자세한 정보를 볼 수 있어요." placement="right" arrow>
                    <span>
                        <ReactModal />
                    </span>
                </Tooltip>
                <br />
                <Typography sx={{ display: 'inline', fontWeight: 'bold' }}>BackEnd : </Typography>
                <SpringbootModal />, Mybatis, Node.js, express
                <br />
                <Typography sx={{ display: 'inline', fontWeight: 'bold' }}>DB : </Typography>
                MySQL, MongoDB
                <br />
                <Typography sx={{ display: 'inline', fontWeight: 'bold' }}>Tool : </Typography>
                Git&Github, Jira, Postman 등
            </Typography>



        </React.Fragment>

    );
}