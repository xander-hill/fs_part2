const Person = ({name, number, deleteEvent, id}) => {
    return (
      <div>
        {name} : {number} <button onClick={() => deleteEvent(id, name)}>delete</button>
      </div>
    )
}

export default Person;