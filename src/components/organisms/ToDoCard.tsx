import {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import moment from 'moment';
import {ToDoSchema, updateToDo, deleteToDo} from '../../store/slices/toDoSlice';
import ToDoDetails from '../molecules/ToDoDetails';
const now = moment().format('YYYY-MM-DD');

interface Props {
  details: ToDoSchema;
  onClickUpdate?: () => void;
}

const ToDoCard: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const [complete ,setComplete] = useState(props.details.isCompleted);

  const deleteAction = useCallback((id: number) =>
    dispatch(deleteToDo({id})),
    [dispatch]);

  const updateComplete = useCallback(
    (toDo: ToDoSchema, completes?: boolean) => {
      if(!complete){
        dispatch(updateToDo({
          ...toDo,
          ctd: now,
          isCompleted: completes
        }))
      } else {
        dispatch(updateToDo({
          ...toDo,
          ctd: undefined,
          isCompleted: completes
        }))
      }
    },
    [dispatch]
  );

  useEffect(() => {
    updateComplete(props.details, complete);
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
        onClickDelete={() => deleteAction(props.details.id)}
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