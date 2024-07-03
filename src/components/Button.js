import styles from './Button.module.css';

const Button = props => {
    return <button>
        {props.children} ({props.count})</button>
}

export default Button