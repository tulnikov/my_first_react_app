import Table from "./components/Table";
import Form from "./components/Form";
import {useState, useEffect} from "react";
import "./App.css";
import persons from "./data/persons";


function App(props) {

    const API_URL = 'https://jsonplaceholder.typicode.com/posts'
    const [DB, setDB] = useState(persons)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(json => console.log(json))
            .finally(setIsLoading(false))

    }, []);


    function handlerBDChange(input) {
        const count = DB.length + 1
        setDB(
            [...DB, {
                id: count,
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

            {isLoading ? <h1>Loading...</h1> :
                <>
                    <Form onSubmit={handlerBDChange} count={DB.length} clTbl={clearTable}/>
                    <Table mydb={DB}/>
                </>}
        </div>
    );


}

export default App;
