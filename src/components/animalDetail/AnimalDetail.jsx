import React from 'react';
import './style.css'

function AnimalDetail({ imagePath, name, nameLatin, detail, origin, biotope, food, size, zoos }) {
    return (
        <div className="detail">
            <div className="detail__content">

                <div className="detail__header">
                    <img className="detail__image" src={imagePath} alt="xxx"/>
                    <div className="detail__title">
                        <h2 className="detail__name"><span>{name}</span></h2>
                        <div className="detail__latin"><span>{nameLatin}</span></div>
                    </div>
                </div>

                <div className="detail__info">
                    <p className="detail__desc">
                        {detail}
                    </p>

                    <div className="detail__items">
                        <div className="detail__item">
                            <h3>Domovina</h3>
                            <p>{origin}</p>
                        </div>
                        <div className="detail__item">
                            <h3>Biotop</h3>
                            <p>{biotope}</p>
                        </div>
                        <div className="detail__item">
                            <h3>Potrava</h3>
                            <p>{food}</p>
                        </div>
                        <div className="detail__item">
                            <h3>Velikost</h3>
                            <p>{size}</p>
                        </div>
                    </div>

                    <div className="detail__zoo">
                        <h3>Najdete v těchto ZOO</h3>
                        <p>{zoos}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AnimalDetail;