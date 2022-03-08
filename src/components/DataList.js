import PeopleListItem from "./PeopleListItem";
import PlanetsListItem from "./PlanetsListItem";
import StarshipsListItem from "./StarshipsListItem";

function DataList (props) {
  const { dataType, data } = props;

  return (
    <>
      <h2>{ dataType }</h2>
      <ul>
        { dataType === "people" && renderPeople(data) }
        { dataType === "planets" && renderPlanets(data) }
        { dataType === "starships" && renderStarships(data) }
      </ul>
    </>
  );
}

function renderPeople (people) {
  return people.map((person, index) => (
    <PeopleListItem key={ index } person={ person } />
  ));
}

function renderPlanets (planets) {
  return planets.map((planet, index) => (
    <PlanetsListItem key={ index } planet={ planet } />
  ));
}

function renderStarships (starships) {
  return starships.map((starship, index) => (
    <StarshipsListItem key={ index } starship={ starship } />
  ));
}

export default DataList;
