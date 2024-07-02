import styles from './Table.module.css';

const TRow = (props) => {
    return <tr>
        <td>{props.mrow.name}</td>
        <td>{props.mrow.age}</td>
        <td>{props.mrow.sex}</td>
    </tr>
}

export default TRow;