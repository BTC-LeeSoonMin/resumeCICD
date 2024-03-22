import * as React from 'react';
import { useState } from 'react';
import { Box } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Modal from "@mui/material/Modal";
import PortfolioImage from './PortfolioImage';
import PortfolioPjtExp from './PortfolioPjtExp';

export default function PortfolioPJT() {
    // 모달창 on/off (브라우저 width가 1024미만이면 새창으로 띄움)
    const openInNewTab = url => {
        window.open(url, '_blank').focus();
    };
    const [ModalOpen, setIsModalOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);

    const openModal = () => {
        window.innerWidth < 1024
            ? openInNewTab("https://gupodong-seal.tistory.com/167")
            : setIsModalOpen(true);
    }
    const closeModal = () => setIsModalOpen(false);

    // 이벤트 핸들러 -> Tooltip 모달창과 겹치는 부분 해결하기위함
    const handleMouseEnter = () => {
        if (!ModalOpen) {
            setShowTooltip(true);
        }
    };
    const handleMouseLeave = () => setShowTooltip(false);

    const modalBoxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        height: 650,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    }; 

    const outerBoxStyle = {
        position: 'relative',
        width: '100%',
        height: 400,
        borderTop: '1px solid #000',
        borderBottom: '1px solid #000',
        cursor: 'pointer'
    };

    const lineBoxStyle = {
        position: 'absolute',
        bottom: '30%',
        left: 0,
        width: '100%', // 가로선의 너비를 박스의 전체 너비로 설정
        height: '1px', // 가로선의 두께
        bgcolor: 'grey', // 가로선의 색상
    };

    return (
        <React.Fragment>
            <Tooltip title="클릭시 프로젝트의 자세한 정보를 볼 수 있어요." placement="top" arrow open={showTooltip}>
                <Box
                    sx={outerBoxStyle}
                    onClick={openModal}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <PortfolioImage />
                    <Box sx={lineBoxStyle} align="left">
                        <PortfolioPjtExp />
                    </Box>
                </Box>
                <Modal
                    open={ModalOpen}
                    onClose={closeModal}
                >
                    <Box sx={{ ...modalBoxStyle }}>
                        <iframe
                            src="https://gupodong-seal.tistory.com/167"
                            style={{ width: '100%', height: '100%' }}
                            title="저는 React로 이런 것을 할 수 있습니다."
                        />
                    </Box>
                </Modal>
            </Tooltip>
        </React.Fragment>
    );
}