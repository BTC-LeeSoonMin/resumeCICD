import * as React from 'react';
import { useState } from 'react';
import Modal from "@mui/material/Modal";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import ICanDoList from './ICanDoList';
import Tooltip from '@mui/material/Tooltip';

export default function SpringbootModal() {
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
            title: "👌 저는 Springboot로 이런걸 할 수 있어요!",
        },
        {
            element: "Spring Security를 구성하고 JWT를 통한 인증과 인가를 구현할 수 있습니다.",
        },
        {
            element: "MyBatis를 이용해서 DB를 조작할 수 있습니다.",
        },
        {
            element: "scheduled 어노테이션을 통해 일정 시간 마다 API를 호출하고 DB에 저장 할 수 있습니다.",
        },
        {
            element: "Spring MVC 패턴을 이해하고 있으며, Controller, Service, Dao 로직을 나누어 API 개발을 진행합니다.",
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
                Springboot<SearchIcon color="primary" />
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