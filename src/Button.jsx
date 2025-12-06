function printHello(event){
    console.log("Hello!");
    console.log(event);
}

function printBye(){
    console.log("bye!");
}

function handleDblClick(){
    console.log("you double clicked");
}

export default function Button(){
    return (
    <div>
        <button onClick={printHello}>Click Me!</button>
        <p onMouseOver={printBye}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae doloribus nostrum quia dicta sequi, quisquam, debitis hic fugiat cupiditate, voluptate commodi excepturi praesentium tempore quasi magni alias dolorum iusto sit?</p>
        <button onDoubleClick={handleDblClick}>double click me!</button>
    </div>);
}