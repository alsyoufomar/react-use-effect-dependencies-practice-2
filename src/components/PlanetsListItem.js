import { useEffect, useState } from "react";

function PlanetsListItem (props) {
  const { planet } = props;

  const [firstFilm, setFirstFilm] = useState('')
  useEffect(() => {
    fetch(planet.films[0])
      .then(res => res.json())
      .then(res => {
        console.log('hey i am json', res.title)
        return setFirstFilm(res.title)
      })
  }, [planet])
  console.log("Planet", planet);

  return <li>{ planet.name } - First Film { firstFilm }</li>;
}

export default PlanetsListItem;
