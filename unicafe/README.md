# Full Stack Open --- Part 1

## Unicafe App
|Contents                 |
| ----------------------- |
| [Step 1](#exercise-1.6) |
| [Step 2](#exercise-1.7) |
| [Step 3](#exercise-1.8) |
| [Step 4](#exercise-1.9) |
| [Step 5](#exercise-1.10) |

### Exercise 1.6
#### Unicafe, Step 1
Like most companies, the student restaurant of the University of Helsinki Unicafe collects feedback from its customers. Your task is to implement a web application for collecting customer feedback. There are only three options for feedback: good, neutral, and bad.

The application must display the total number of collected feedback for each category. Your final application could look like this:

![](src/assets/13e.png)

Note that your application needs to work only during a single browser session. Once you refresh the page, the collected feedback is allowed to disappear.

It is advisable to use the same structure that is used in the material and previous exercise. File main.jsx is as follows:

```react
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

You can use the code below as a starting point for the App.jsx file:
```react
import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      code here
    </div>
  )
}

export default App
```

### Exercise 1.7
#### Unicafe, Step 2 [&#8593;](#unicafe-app)

Expand your application so that it shows more statistics about the gathered feedback: the total number of collected feedback, the average score (good: 1, neutral: 0, bad: -1) and the percentage of positive feedback.

![](./src/assets/14e.png)

### Exercise 1.8
#### Unicafe, Step 3 [&#8593;](#unicafe-app)

### Exercise 1.9
#### Unicafe, Step 4 [&#8593;](#unicafe-app)

### Exercise 1.10
#### Unicafe, Step 5 [&#8593;](#unicafe-app)
