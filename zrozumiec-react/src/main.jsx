import ReactDOM from "react-dom/client";
import { Link } from "./components/Link";

const element = (
    <>
        <h1>Nasza strona!</h1>
        <main>
            <Link />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                labore blanditiis magnam eveniet rem ratione, voluptatum nulla
                inventore quaerat necessitatibus.
            </p>
            <Link />
        </main>
    </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
