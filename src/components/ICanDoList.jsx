import * as React from 'react';

export default function ICanDoList({ list }) {

    return (
        <React.Fragment>
            <div style={{ fontWeight: "400", fontFamily: "Georgia" }}>
                {list.title ? <p style={{fontSize: 20, fontWeight: "600"}}>{list.title}</p> : <li>{list.element}</li>}
            </div>
        </React.Fragment>
    );
}