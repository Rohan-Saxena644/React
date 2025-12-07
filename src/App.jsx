import "./App.css"
//import
import {Title} from "./Title.jsx";
import Product from "./Product.jsx";
import ProductTab from "./ProductTab.jsx";
import Msg from "./MsgBox.jsx";
import Button from "./Button.jsx";
import Form from "./Form";

function Description(){
  return <h3>I am the description</h3>
}

function App() {
  return (   
    <>
    {/* <ProductTab/>
    <Msg name="RO" clr="blue"/>
    <Msg name="Ra" clr="yellow"/> */}
    <Form/>
    </>              
  );
}

export default App;
