import React, { useEffect } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './../../actions';
import styles from './TodoList.module.sass';

function TodoList () {
  const { todos } = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const {
    statusTodoAction,
    getTodosAction,
    deleteTodoAction,
  } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getTodosAction();
  }, []);

  console.log(todos); //почему он рендерит несколько раз? надо разобраться... получается сначала он грузит тудушки из локального state, а потом подгружает через API? useEffect выполняется после каждого рендера. Истина где-то рядом...

  const mapTodo = ({ body, isDone, id }) => {
    const deleteHandler = () => {
      deleteTodoAction(id);
    };
    const changeStatusHandler = () => {
      statusTodoAction(id);
    };
    return (
      <li key={id}>
        <input
          type='checkbox'
          checked={isDone}
          onChange={changeStatusHandler}
        />
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
