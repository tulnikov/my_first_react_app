import Table from "./components/Table";
import Form from "./components/Form";
import {useState} from "react";
import "./App.css";

let mydb = [
    {
        "name": "Dimas",
        "age": 41,
        "sex": "male"
    },
    {
        "name": "Jane",
        "age": 42,
        "sex": "female"
    },
    {
        "name": "Tanya",
        "age": 35,
        "sex": "female"
    },
    {
        "name": "Leon",
        "age": 51,
        "sex": "male"
    }]


function App(props) {
    const [DB, setDB] = useState(mydb)

    function handlerBDChange(input) {

        setDB(
            [...DB, {name: input.name.value, age: input.age.value, sex: input.sex.value}]
        )
    }

    return (
        <div className="App">
            <Form onSubmit={handlerBDChange}/>
            <Table mydb={DB}/>

        </div>
    );
}

export default App;
