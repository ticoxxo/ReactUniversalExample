import React from 'react'

const pic = require('../../images/avatar.jpeg');

export default function HeroHeader() {
    return (
        <header>
            <span className="avatar">
                <img height="128px" src={pic} alt="" />
            </span>
            <h1>Jésus Cárdenas</h1>
            <p>professional furry</p>
        </header>
    );
}
