import React from 'react'
import './style.css'

function Animal({ id, imagePath, name, latinName, handleAnimalDetail }) {
    const handleClick = () => {
        console.log(id)
        handleAnimalDetail(id)
    }
    return (
        <div className={'animal'} onClick={handleClick}>
            <div className="animal__image">
                <img src={imagePath} alt={name}/>
            </div>
            <div className="animal__desc">
                <div className="animal__name">{name}</div>
                <div className="animal__latin">{latinName}</div>
            </div>
        </div>
    );
}

export default Animal;