import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const welcome = {
  greeting: 'hey',
  title: "react",
};
function toUpperGreeting(greeting){
  return greeting.toUpperCase();
}



const App = () => {
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  return (
    <div>
      <h1>Hacker Stories</h1>

      <hr />
      <Search />
      <List list = {stories}/>
    </div>
  )
}

const Search = () => {
  const handleChange = (event) => {
    // synthetic event
    console.log(event);
    // value of target (here: input HTML element)
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id="search" type="text" onChange={handleChange}/>
    </div>
  )
}

const List = (props) =>(
    <ul>
        {props.list.map((item) => (
          <Item key = {item.objectID} item = {item} />
        ))}
    </ul>
  
)

const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}>{props.item.title} </a>
    </span>
    <span>{props.item.author} </span>
    <span>{props.item.num_comments} </span>
    <span>{props.item.points} </span>
  </li>
)
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App
