# Full Stack Open --- Part 1

## Course Info App
|Contents                 |
| ----------------------- |
| [Step 1](#exercise-1.1) |
| [Step 2](#exercise-1.2) |
| [Step 3](#exercise-1.3) |
| [Step 4](#exercise-1.4) |
### Exercise 1.1
#### Course Information, Step 1 [&#8593;](#course-info-app)

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

## Exercise 1.2
### Course Information, Step 2 [&#8593;](#course-info-app)

Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead, it only renders three Part components of which each renders the name and number of exercises of one part.

```react
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

## Exercise 1.3
### Course Information, Step 3 [&#8593;](#course-info-app)

Let's move forward to using objects in our application. Modify the variable definitions of the App component as follows and also refactor the application so that it still works:

```react
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```

## Exercise 1.4
### Course Information, Step 4 [&#8593;](#course-info-app)

Place the objects into an array. Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:

```react
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      ...
    </div>
  )
}
```

**N.B.** At this point you can assume that there are always three items, so there is no need to go through the arrays using loops. We will come back to the topic of rendering components based on items in arrays with a more thorough exploration in the next part of the course.

However, do not pass different objects as separate props from the App component to the components Content and Total. Instead, pass them directly as an array:

```react
const App = () => {
  // const definitions

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
```
