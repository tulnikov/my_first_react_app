import styles from "./Form.module.css";
import Button from "./Button";
import {useState} from "react";
import ControlPanel from "./ControlPanel";

const Form = (props) => {

    const [data, setData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        email: '',
        phone: ''

    })

    const handlerSubmitForm = (event) => {
        event.preventDefault()
        props.onSubmit(event.target)
    }

    const sayMyName = ['Dimas', 'Dima', 'Dimka']

    const handleInputChange = (text, name) => {
        if (name === 'firstName' && sayMyName.includes(text)) {
            alert('Привет тезка!')
        }
        setData({...data, [name]: text})
    }

    return <form onSubmit={handlerSubmitForm}>
        <label>Имя: <input type='text' name='firstName' value={data.firstName}
                           onChange={e => {
                               handleInputChange(e.target.value, 'firstName')
                           }}/></label>
        <label>Фамилия: <input type='text' name='lastName' value={data.lastName}
                               onChange={e => {
                                   handleInputChange(e.target.value, 'lastName')
                               }}/></label>
        <label>Пол: <input type='text' name='gender' value={data.gender}
                           onChange={e => {
                               handleInputChange(e.target.value, 'gender')
                           }}/></label>
        <label>Email: <input type='text' name='email' value={data.email}
                             onChange={e => {
                                 handleInputChange(e.target.value, 'email')
                             }}/></label>
        <label>Телефон: <input type='tel' name='phone' value={data.phone}
                               onChange={e => {
                                   handleInputChange(e.target.value, 'phone')
                               }}/></label>
        <ControlPanel>
            <Button type='submit' count={props.count}>Добавить</Button>
            <button type="reset" onClick={props.clTbl}>Очистить</button>
        </ControlPanel>
    </form>
}

export default Form