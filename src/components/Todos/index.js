import React from 'react'
import PropTypes from 'prop-types'
import styles from './Todos.module.css'
import classNames from 'classnames'

import minusIcon from '../../assets/minus-icon.svg'
import plusIcon from '../../assets/plus-icon.svg'

const Todos = ({ todos, onSubstraction, onAdditon }) => {
  return (
    <div className={styles.todos}>
    {todos.map((todo, index, arr) => {
      return (
        <div key={ index } className={classNames(styles.todo, { [styles.todoDivider]: !(arr.length === index + 1) })}>
          {todo.title}
          <div className={styles.todoIconWrapper}>

            <div className={styles.todoCount}>{todo.count}</div>

            <button onClick={() => onSubstraction(index)} className={styles.todoActionBtn}>
              <img src={minusIcon} alt="minus icon" />
            </button>

            <button onClick={() => onAdditon(index)} className={styles.todoActionBtn}>
              <img src={plusIcon} alt="plus button" />
            </button>
          </div>
        </div>
      )
    })}
  </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    count: PropTypes.number
  })),
  onSubstraction: PropTypes.func,
  onAdditon: PropTypes.func
}

export default Todos
