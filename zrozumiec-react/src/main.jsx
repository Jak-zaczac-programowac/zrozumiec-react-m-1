import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement(
    "a",
    { href: "https://zrozumiecReact.pl" },
    "test2"
);
const elementInJSX = <a href="https://zrozumiecReact.pl">test 3</a>;
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
