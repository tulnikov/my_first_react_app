import TRow from "./TRow";
import styles from "./Table.module.css";

const Table = (props) => {

    return <table>
        <thead>
        <tr>
            <td>№</td>
            <td>Имя</td>
            <td>Фамилия</td>
            <td>Пол</td>
            <td>Почта</td>
            <td>Телефон</td>
        </tr>
        </thead>
        <tbody>
        {props.mydb.map((item, index) =>

            <TRow mrow={item} key={index}/>)}
        </tbody>
    </table>


}

export default Table