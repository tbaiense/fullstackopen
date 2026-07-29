const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>Part name: {props.name} | Exercises: {props.exercises}</p>
  )
}
const Content = (props) => {
  return (
    <>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  )
}

const Total = ({ exercises }) => {
  const sum = (Array.isArray(exercises)
    ? exercises.reduce((acc, e) => { return acc + e })
    : 0
  );

  return (
    <p>Number of exercises: { sum }</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content
        parts={course.parts}
      />
      <Total exercises={course.parts.map(p => p.exercises)} />
    </div>
  )
}

export default App
