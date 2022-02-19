import {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {ToDoSchema, updateToDo, deleteToDo} from '../../store/slices/toDoSlice';
import ToDoDetails from '../molecules/ToDoDetails';

interface Props {
  details: ToDoSchema;
  onClickUpdate?: () => void;
}

const ToDoCard: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const toDo = props.details;
  const [complete ,setComplete] = useState(toDo.isCompleted);

  const deleteAction = useCallback((id: number) =>
    dispatch(deleteToDo({id})),
    [dispatch]);

  const updateComplete = useCallback(
    (toDo: ToDoSchema, completes?: boolean) => {
      dispatch(updateToDo({
      ...toDo,
      isCompleted: completes
    }))},
    [dispatch]
  )

  useEffect(() => {
    updateComplete(toDo, complete);
  }, [complete])

  return (
    <Container>
      <ToDoDetails
        onClickComplete={() => {
          setComplete(!complete);
        }}
        completed={complete}
        details={props.details}
        onClickUpdate={props.onClickUpdate}
        onClickDelete={() => deleteAction(toDo.id)}
      />
    </Container>
  );
}

export default ToDoCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
`