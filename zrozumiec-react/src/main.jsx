import ReactDOM from "react-dom/client";

const stringContent = "Test 1!";
const numberContent = 13;
const calcContent = 10 + 5;
function getRandomNumber() {
    console.log(Math.round(Math.random() * 100));
}
const person = {
    name: "Filip",
    age: 29,
};
const paragraphElement = (
    <>
        <h2>Heading</h2>
        <a href="http://zrozumiecReact.pl" className="link" for="">
            Strona kursu
        </a>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            numquam, corporis nam voluptate libero quas. Placeat ipsum unde
            quidem voluptatem.
        </p>
    </>
);
const element = (
    <div>
        {paragraphElement}
        {paragraphElement}
        {paragraphElement}
        {paragraphElement}
        {paragraphElement}
        {paragraphElement}
    </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
