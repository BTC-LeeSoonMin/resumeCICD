import { Typography } from '@mui/material';
import * as React from 'react';

export default function SwimpyoPjtExp() {
    return (
        <React.Fragment >
            <Typography variant="h6" sx={{mt: 1.5, fontFamily: 'JalnanGothic'}} >
                쉼표
            </Typography>
            <Typography variant="subtitle2" sx={{fontFamily: 'JalnanGothic', color: '#8d8f8d'}}>
                BTC FullStack 프로젝트 (4인)
            </Typography>
            <Typography variant="body2" >
                숙박 서비스 제공 플랫폼을 제작 했습니다.<br />
                숙소를 이용할 사용자가 리뷰에 있는 여행지를 참고하여 여행 계획을 세울 수 있습니다.
            </Typography>

        </React.Fragment>
    );
}