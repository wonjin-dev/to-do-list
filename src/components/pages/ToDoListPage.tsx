import {useSelector} from 'react-redux';
import {ReduxState} from '../../store/index';
import ToDoListTemplate from'../templates/ToDoListTemplate';

const ToDoListPage = () => {
  const details = useSelector((state: ReduxState) => state.toDo);
  return (
    <ToDoListTemplate details={details} />
  );
}

export default ToDoListPage;