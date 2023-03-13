import styles from '../App.module.css'

const Filter = (props) => {
    
    return (
            <button className={styles['filter-btn']} aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}>{props.name}</button>

    );
}

export default Filter;
