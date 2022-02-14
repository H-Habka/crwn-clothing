import React from 'react'
import './menu-item.style.scss';
import { Link } from 'react-router-dom';


const MenuItem = ({ title, imageUrl, size, linkUrl }) => (
    <Link to={linkUrl} className={`${size} menu-item`}>
        <div style={{
            backgroundImage: `url(${imageUrl})`
        }} className="background-image" />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle"> shop now</span>
        </div>
    </Link>
)


export default MenuItem