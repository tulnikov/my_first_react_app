import TRow from "./TRow";
import styles from "./Table.module.css";

const Table = (props) => {

    return <table>
        <tbody>
        {props.mydb.map(item =>
            <TRow mrow={item} key={Math.random()}/>)}
        </tbody>
    </table>


}

export default Table