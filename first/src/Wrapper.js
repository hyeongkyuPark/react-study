import React from 'react';

function Wrapper({ children, name }) {
    const styel = {
        border: '2px solid black',
        padding: '0 16px 20px 16px',
        marginBottom: 20
    }
    
    return (
        <div style={styel}>
            <h1>{name}</h1>
            <div>{children}</div>
        </div>
    )
}

export default Wrapper;