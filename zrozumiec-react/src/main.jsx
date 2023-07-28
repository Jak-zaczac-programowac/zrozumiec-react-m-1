import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement(
    "a",

    { href: "https://zrozumiecreact.pl" },
    "Test"
);
const elementInJSX = <a href="https://zrozumiecreact.pl">Test 3</a>;
console.log(<h1>Test 2</h1>); // -> React.createElement('h1', {}, 'Test 2')
console.log(element);

const currentDate = new Date();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

console.log(hours, minutes);

const timer = (
    <div>
        {hours}:{minutes}
    </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(timer);
