import { PersonInfo } from "./components/PersonInfo";

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
    return (
        <>
            <PersonInfo person={jan} />
            <br />
            <PersonInfo person={janina} />
            <br />
            <PersonInfo person={karol} />
        </>
    );
}

export default App;
