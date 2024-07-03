import styles from './ControlPanel.modules.css';

const ControlPanel = props => {
    return <div className={styles.MyControlPanel}>
        {props.children}
    </div>
}

export default ControlPanel