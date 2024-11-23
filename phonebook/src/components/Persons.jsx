import Person from './Person'

const Persons = ({persons, deleteEvent}) => {
    return (
        <div>
        {persons.map(person =>
          <Person key = {person.id} name = {person.name} number = {person.number} deleteEvent={deleteEvent} id = {person.id}/>
        )}
      </div>
    )
}

export default Persons