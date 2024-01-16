import * as React from 'react';
import { useState } from 'react';
import Modal from "@mui/material/Modal";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

export default function ReactModal() {
    // 모달창 on/off (브라우저 width가 1024미만이면 새창으로 띄움)
    const openInNewTab = url => {
        window.open(url, '_blank').focus();
      };
    const [ReactisModalOpen, setReactIsModalOpen] = useState(false);
    const openModal = () => {
        window.innerWidth < 1024
            ? openInNewTab("https://gupodong-seal.tistory.com/161")
            : setReactIsModalOpen(true);
    }
    const closeModal = () => setReactIsModalOpen(false);

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

    return (
        <React.Fragment>
            <Typography
                onClick={openModal}
                sx={{ display: 'inline-flex', alignItems: 'center', cursor: 'pointer'}}
            >
                React.js<SearchIcon color="primary" />
            </Typography>
            <Modal
                open={ReactisModalOpen}
                onClose={closeModal}
            >
                <Box sx={{ ...modalBoxStyle }}>
                    <iframe 
                        src="https://gupodong-seal.tistory.com/161"
                        style={{ width: '100%', height: '100%' }}
                        title="저는 React로 이런 것을 할 수 있습니다."
                    />
                </Box>
            </Modal>
        </React.Fragment >
    );
}