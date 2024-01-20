import * as React from 'react';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from "@mui/material/Modal";
import SearchIcon from '@mui/icons-material/Search';

export default function SpringbootModal() {
    // 모달창 on/off (브라우저 width가 1200미만이면 새창으로 띄움)
    const openInNewTab = url => {
        window.open(url, '_blank').focus();
      };
    const [ReactisModalOpen, setReactIsModalOpen] = useState(false);
    const openModal = () => {
        window.innerWidth < "1024px"
            ? openInNewTab("https://gupodong-seal.tistory.com/162")
            : setReactIsModalOpen(true);
    }
    const closeModal = () => setReactIsModalOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
    };

    return (
        <React.Fragment>
            <Typography
                onClick={openModal}
                sx={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer'}}
            >
                Springboot<SearchIcon color="primary" />
            </Typography>
            <Modal
                open={ReactisModalOpen}
                onClose={closeModal}
            >
                <Box sx={{ ...style }}>
                    SPRINGBOOT 모달 TEST~
                </Box>
            </Modal>
        </React.Fragment >
    );
}