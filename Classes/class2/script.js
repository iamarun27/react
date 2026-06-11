// var h1 = document.createElement("h1");
// h1.innerHTML = "Hello from JS";

// document.body.appendChild(h1);

var h1 = React.createElement("h1", { id: "parent" }, "Hello from JS");

var root = document.querySelector("#root");

var r1 = ReactDOM.createRoot(root);
r1.render(h1);
