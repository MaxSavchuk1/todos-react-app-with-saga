import React, { useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../actions';
import styles from './TodoList.module.sass';

function TodoList () {
  const { error, isFetching, todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const { getTodosAction, deleteTodoAction } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    getTodosAction();
  }, [todos]);

  // console.log('in list', todos);

  const mapTodo = ({ body, isDone, id }) => {
    const deleteHandler = () => {
      deleteTodoAction(id);
    };
    return (
      <li key={id}>
        <input type='checkbox' />
        {body}
        <button onClick={deleteHandler}>
          <DeleteIcon fontSize='small' />
        </button>
      </li>
    );
  };

  return <ul className={styles.listContainer}>{todos.map(mapTodo)}</ul>;
}

export default TodoList;
