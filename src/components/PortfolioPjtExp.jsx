import { Typography } from '@mui/material';
import * as React from 'react';

export default function PortfolioPjtExp() {
    return (
        <React.Fragment >
            <Typography variant="h6" sx={{mt: 1.5, fontFamily: 'JalnanGothic'}} >
                포트폴리오
            </Typography>
            <Typography variant="subtitle2" sx={{fontFamily: 'JalnanGothic', color: '#8d8f8d'}}>
                개인 프로젝트
            </Typography>
            <Typography variant="body2" >
                React.js으로 제작된 웹 포트폴리오입니다. <br />
                Jenkins를 통해 CICD를 구현했고 AWS S3 정적 웹 호스팅으로 배포 되었습니다.
            </Typography>

        </React.Fragment>
    );
}