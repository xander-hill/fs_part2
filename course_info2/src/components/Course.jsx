const Header = (props) => {
    return (
      <div>
        <h2>{props.course}</h2>
      </div>
    )
}
  
const Course = (props) => {
console.log(props.course.parts[0])
    return (
        <div>
            <Header course = {props.course.name}/>
            <Content parts = {props.course.parts}/>
        </div>
    )
}

const Part = (props) => {
console.log(props.name)
console.log(props.exercises)
    return (
        <div>
            <p>{props.name} {props.exercises}</p>
        </div>
    )
}

const Content = (props) => {
    const {parts} = props
    const initial = 0
    const total =
        parts.reduce((sum, part) => sum + part.exercises, initial)
    return (
        <div>
            {parts.map(part =>
                <Part key = {part.id} name = {part.name} exercises = {part.exercises}/>
            )}
            <Total total = {total}/>
        </div>
    )
}

const Total = (props) => {
    return (
        <div>
            <h3>Number of exercises: {props.total}</h3>
        </div>
    )
}

export default Course