import ReactDOM from "react-dom/client";
import { Link } from "./components/Link";
import { HeadingItalic } from "./components/HeadingItalic";
import { Logger } from "./components/Logger";
const element = (
    <>
        <Logger>
            <HeadingItalic>Nasza super strona</HeadingItalic>
        </Logger>
        <main>
            <Logger>
                <Link text="Sprawdź stronę kursu!" shouldOpenNewTab={true} />
            </Logger>
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
