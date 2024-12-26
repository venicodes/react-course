/* nested html structure:

    <div id= "parent">
        <div id= "child">
            <h1>I am a H1 Tag</h1>
        </div>
    </div> 
*/

const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id:"child"},[
        React.createElement("h1",{},"I am a H1 Tag"),
        React.createElement("h2",{},"I am a H2 Tag"),
    ])
);





/* const heading = React.createElement(
    "h1",
    {id:"heading"},
    "Hello WORLD from React"
 ); */

 console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);