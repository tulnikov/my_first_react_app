import styles from "./Form.module.css";
import Button from "./Button";

const Form = (props) => {


    const handlerSubmitForm = (event) => {
        event.preventDefault()

        props.onSubmit(event.target)


    }

    return <form onSubmit={handlerSubmitForm}>
        <label>Имя: </label><input name='name'/>
        <label>Возраст: </label><input name='age'/>
        <label>Пол: </label><input name='sex'/>
        <Button type='submit'>Добавить</Button>
    </form>
}

export default Form