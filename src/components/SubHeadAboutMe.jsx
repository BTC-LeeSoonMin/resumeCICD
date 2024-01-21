import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoList from './InfoList';

export default function SubHeadAboutMe() {

    const infos = [
        {
            title: "전화번호",
            text: "010-4580-8075",
        },
        {
            title: "Email",
            text: "soonmin07@gmail.com",
        },
        {
            title: "생년월일",
            text: "1994/05/10",
        },
        {
            title: "GitHub",
            text: "github.com/BTC-LeeSoonMin",
        },
        {
            title: "Blog",
            text: "gupodong-seal.tistory.com/",
        },
    ]

    return (
        <React.Fragment>
            <Box align="left" >
                <Typography variant="h4" >
                    이순민
                </Typography>
                &nbsp;&nbsp;성장형 개발자<br /><br />
                {
                    infos.map((info) => (
                        <InfoList info={info} key={info.title}></InfoList>
                    ))
                }
                <br />
                <Typography variant="h5" sx={{ display: 'inline' }}>
                    About me&nbsp;&nbsp;
                </Typography>
                <Typography variant="body" >
                    안녕하세요.
                </Typography>
            </Box>
        </React.Fragment>

    );
}