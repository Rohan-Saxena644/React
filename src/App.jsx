import "./App.css"
//import
import {Title} from "./Title.jsx";

function Description(){
  return <h3>I am the description</h3>
}

function App() {
  return (                 //<button>Hello World</button>
    <div>
      <h1>This is my app component</h1>
      <p>Inside app component we have the title component used</p>
      <Title/>
      <Description/>
    </div>
  );
}

export default App
