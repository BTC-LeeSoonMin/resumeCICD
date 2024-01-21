import * as React from 'react';

export default function InfoList({ info }) {



    return (
        <React.Fragment>
            <div style={{fontWeight: 800}}>
                <li>{info.title} : {info.text}</li>
            </div>
        </React.Fragment>
    );
}