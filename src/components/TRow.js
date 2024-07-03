import styles from './Table.module.css';

const TRow = (props) => {
    return <tr>
        <td>{props.mrow.id}</td>
        <td>{props.mrow.firstName}</td>
        <td>{props.mrow.lastName}</td>
        <td>{props.mrow.gender}</td>
        <td>{props.mrow.email}</td>
        <td>{props.mrow.phone}</td>
    </tr>
}

export default TRow;