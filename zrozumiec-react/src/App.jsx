import { PersonInfo } from "./components/PersonInfo";
import dogImg from "./assets/dog.jpg";

function App() {
    const jan = {
        name: "Jan",
        lastName: "Kowalski",
        mail: "j.kow@gmail.com",
        tel: "+48 888 000 111",
    };
    const janina = {
        name: "Janina",
        lastName: "Kowalska",
        mail: "janina.kow@gmail.com",
        tel: "+48 888 000 222",
    };
    const karol = {
        name: "Karol",
        lastName: "Kowalski",
        mail: "k.kow@gmail.com",
    };

    const imageLink = "https://zrozumiecreact.pl/dog.jpg";

    return (
        <>
            <PersonInfo person={jan} />
            <br />
            <PersonInfo person={janina} />
            <br />
            <PersonInfo person={karol} />
            <img src={imageLink} alt="" />
        </>
    );
}

export default App;
