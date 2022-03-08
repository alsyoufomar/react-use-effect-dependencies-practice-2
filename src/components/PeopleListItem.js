import { useEffect, useState } from "react";

function PeopleListItem (props) {
  const { person } = props;

  const [homeworld, setHomeworld] = useState('');
  useEffect(() => {
    fetch(person.homeworld)
      .then(res => res.json())
      .then(res => {
        console.log('hey barry i am json data', res.name)
        return setHomeworld(res.name)
      })
  }, [person])

  // console.log("person", person, person.homeworld)

  return (
    <ul>
      <li>{ person.name } - Homeworld: { homeworld }</li>
    </ul>
  );
}

export default PeopleListItem;
