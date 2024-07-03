import Table from "./components/Table";
import Form from "./components/Form";
import {useState} from "react";
import "./App.css";
import persons from "./data/persons";


function App(props) {
    const [DB, setDB] = useState(persons)

    function handlerBDChange(input) {
        const count = DB.length+1
        setDB(
            [...DB, {
                id:count,
                firstName: input.firstName.value,
                lastName: input.lastName.value,
                gender: input.gender.value,
                email: input.email.value,
                phone: input.phone.value
            }]
        )
    }

    const clearTable = () => {

        setDB([])
    }

    return (
        <div className="App">
            <Form onSubmit={handlerBDChange} count={DB.length}  clTbl={clearTable}/>
            <Table mydb={DB}/>

        </div>
    );
}

export default App;
