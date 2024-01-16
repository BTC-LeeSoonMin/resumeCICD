import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import imgLogo from '../assets/SoonminAndCat.jpg';

export default function MyImg () {
    return (
        <Stack direction="row" spacing={1} sx={{mt: 10, mb: 3}}>
            <Avatar
                alt="logo image"
                src={imgLogo}
                sx={{ width: 150, height: 150}}
            />
        </Stack>
    );
}