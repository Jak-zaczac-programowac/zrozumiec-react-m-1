import ReactDOM from "react-dom/client";
import { Link } from "./components/Link";

const element = (
    <>
        <h1>Nasza strona!</h1>
        <main>
            <Link text="Sprawdź stronę kursu!" shouldOpenNewTab={true} />
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                labore blanditiis magnam eveniet rem ratione, voluptatum nulla
                inventore quaerat necessitatibus.
            </p>
            <Link shouldOpenNewTab={false} />
        </main>
    </>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
