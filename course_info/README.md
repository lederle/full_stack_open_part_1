# Full Stack Open --- Part 1

## Course Info App

### Exercise 1.1: Course Information, step 1

The application that we will start working on in this exercise will be further developed in a few of the following exercises. In this and other upcoming exercise sets in this course, it is enough to only submit the final state of the application. If desired, you may also create a commit for each exercise of the series, but this is entirely optional.

Use Vite to initialize a new application. Modify main.jsx to match the following:
```react
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```
and App.jsx to match the following:
```react
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
```
Remove the extra files App.css and index.css, also remove the directory assets.

Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: `Header`, `Content`, and `Total`. All data still resides in the `App` component, which passes the necessary data to each component using props. `Header` takes care of rendering the name of the course, `Content` renders the parts and their number of exercises and `Total` renders the total number of exercises.

Define the new components in the file `App.jsx`.

The `App` component's body will approximately be as follows:
```react
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```
>>>>>>> ex_1.1
