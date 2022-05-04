import React from 'react';
import Animal from "../animal/Animal";

function AnimalList({ animals, handleAnimalDetail }) {
    return (
        <div className={'animal-list'}>
            {animals.map(animal => <Animal
                key={animal.id}
                id={animal.id}
                name={animal.nazev}
                latinName={animal.nazevLatinsky}
                imagePath={animal.foto}
                handleAnimalDetail={handleAnimalDetail}
            />)}
        </div>
    );
}

export default AnimalList;
