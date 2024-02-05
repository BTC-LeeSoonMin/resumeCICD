import * as React from 'react';
import { useState } from 'react';
import Modal from "@mui/material/Modal";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import ICanDoList from './ICanDoList';
import Tooltip from '@mui/material/Tooltip';

export default function ReactModal() {
    // 모달창 on/off (브라우저 width가 1024미만이면 새창으로 띄움)
    const [ReactisModalOpen, setReactIsModalOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const openModal = () => setReactIsModalOpen(true);
    const closeModal = () => setReactIsModalOpen(false);

    // 이벤트 핸들러 -> Tooltip 모달창과 겹치는 부분 해결하기위함
    const handleMouseEnter = () => {
        if (!ReactisModalOpen) {
            setShowTooltip(true);
        }
    };
    const handleMouseLeave = () => setShowTooltip(false);

    const modalBoxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        height: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    const list = [
        {
            title: "👌 저는 React로 이런걸 할 수 있어요!",
        },
        {
            element: "Axios Interceptors 기술을 이용해서 Token 인증 방식의 Refresh Token 자동 발급 코드를 구현할 수 있습니다.",
        },
        {
            element: "단방향 데이터 바인딩에 대해 이해하고 있으며, 이를 통해 데이터 전달 구조를 만들 수 있습니다.",
        },
        {
            element: "상태 관리 라이브러리 RTK, Recoil을 사용할 수 있습니다.",
        },
        {
            element: "Axios를 사용해서 서버와 통신 및 CRUD 화면을 정확히 구현할 수 있습니다.",
        },
    ]

    return (
        <React.Fragment>
            <Tooltip title="돋보기있는 Skill을 클릭시 더 자세한 정보를 볼 수 있어요." placement="right" arrow open={showTooltip}>
            <Typography
                onClick={openModal}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer' }}
            >
                React.js<SearchIcon color="primary" />
            </Typography>
            <Modal
                open={ReactisModalOpen}
                onClose={closeModal}
            >
                <Box sx={{ ...modalBoxStyle }}>
                    {
                        list.map((list) => (
                            <ICanDoList list={list} key={list.title}></ICanDoList>
                        ))
                    }
                </Box>
            </Modal>
            </Tooltip>
        </React.Fragment >
    );
}