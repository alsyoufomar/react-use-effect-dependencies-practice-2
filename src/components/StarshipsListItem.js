import { useEffect, useState } from "react";

function StarshipsListItem (props) {
  const { starship } = props;
  const [firstPilot, setFirstPilot] = useState([])
  function addPilot (pilot) {
    fetch(pilot)
      .then(res => res.json())
      .then(res => {
        return setFirstPilot(x => [...x, res.name])
      })
  }
  useEffect(() => {
    if (starship.pilots.length === 0) {
      setFirstPilot('no piolts')
      return
    }
    starship.pilots.map(pilot => {
      return addPilot(pilot)
    })
  }, [starship])
  return <li>{ starship.name } - First Pilot ({ firstPilot })</li>;
}

export default StarshipsListItem;
