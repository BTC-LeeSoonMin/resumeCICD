import * as React from 'react';
import Link from '@mui/material/Link';

export default function InfoList({ info }) {

    return (
        <React.Fragment>
            <div style={{ fontWeight: "400", fontFamily: "Georgia" }}>
                {info.link ? <span>{info.title} : <Link href={info.link} underline="none" target="_blank" >{info.text}</Link></span> : `${info.title} : ${info.text}`}
            </div>
        </React.Fragment>
    );
}