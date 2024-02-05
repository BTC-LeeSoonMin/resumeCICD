import * as React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import InfoList from './InfoList';

export default function SubHeadAboutMe() {


    const infos = [
        {
            title: "📞",
            text: "010-4580-8075",
        },
        {
            title: "💌",
            text: "soonmin07@gmail.com",
        },
        {
            title: "🌐",
            text: "GitHub",
            link: "https://github.com/BTC-LeeSoonMin"
        },
        {
            title: "👋",
            text: "Blog",
            link: "https://gupodong-seal.tistory.com/"
        },
    ]

    return (
        <React.Fragment>
            <Box align="left" >
                <Typography variant="h4" sx={{ fontFamily: 'NPSfontBold' }}>
                    안녕하세요,<br />성장형 개발자 이순민입니다.
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 1, fontFamily: 'Georgia' }}>
                    저의 성장뿐만 아니라 회사, 동료와 함께 성장하는 공동 성장을 지향합니다.<br /><br />
                </Typography>
                {
                    infos.map((info) => (
                        <InfoList info={info} key={info.title}></InfoList>
                    ))
                }
                <br />
            </Box>
        </React.Fragment>

    );
}