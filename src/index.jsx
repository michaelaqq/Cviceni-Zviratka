import React, {useEffect, useState} from 'react';
import { render } from 'react-dom';
import './style.css';
import AnimalList from "./components/animalList/AnimalList";
import AnimalDetail from "./components/animalDetail/AnimalDetail";

const App = () => {
    const [animals, setAnimals] = useState([])
    const [animalDetail, setAnimalDetail] = useState(null)

    const handleAnimalDetail = (id) => {
        animals.forEach((selectedAnimal) => {
            if (selectedAnimal.id === id) {setAnimalDetail(selectedAnimal)}}
        )

    }
    useEffect(
        () => {
            fetch('https://lrolecek.github.io/zviratka-api/zvirata.json')
                .then((response) => response.json())
                .then((json) => setAnimals(json.zvirata))
        },
        [])
  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
          <AnimalList animals={animals} handleAnimalDetail={handleAnimalDetail}/>
          {animalDetail && <AnimalDetail
                  imagePath={animalDetail.foto}
                  name={animalDetail.nazev}
                  nameLatin={animalDetail.nazevLatinsky}
                  detail={animalDetail.popis}
                  origin={animalDetail.domovina}
                  biotope={animalDetail.biotop}
                  food={animalDetail.potrava}
                  size={animalDetail.velikost}
                  zoos={animalDetail.zoo}
              />}

      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
