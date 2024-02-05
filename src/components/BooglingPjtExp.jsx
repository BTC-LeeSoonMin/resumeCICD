import { Typography } from '@mui/material';
import * as React from 'react';

export default function BooglingPjtExp() {
    return (
        <React.Fragment >
            <Typography variant="h6" sx={{mt: 1.5, fontFamily: 'JalnanGothic'}} >
                부글링
            </Typography>
            <Typography variant="subtitle2" sx={{fontFamily: 'JalnanGothic', color: '#8d8f8d'}}>
                BTC FE 프로젝트 (4인)
            </Typography>
            <Typography variant="body2" >
                React.js으로 제작되었고 부산 지역 아파트 구매를 원하는 사용자들에게 아파트 실거래가를 제공합니다.
            </Typography>

        </React.Fragment>
    );
}