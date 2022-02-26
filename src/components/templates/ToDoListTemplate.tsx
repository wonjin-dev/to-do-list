/* eslint-disable array-callback-return */
/* eslint-disable no-lone-blocks */
import {useState, useCallback} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {STRINGS} from '../../constants/ko';
import {ToDoSchema, deleteToDo} from '../../store/slices/toDoSlice';
import Filter from '../molecules/Filter';
import ToDoCard from '../organisms/ToDoCard';
import ToDoCreator from '../organisms/ToDoCreator';
import ToDoModal from '../molecules/modals/ToDoModal';

interface Props {
  details: ToDoSchema[];
}

interface ModalProps {
  show: boolean;
  index: number;
}

type filterState = 'all' | 'wip' | 'complete';

const ToDoListTemplate: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();
  const [filterState, setFilterState] = useState<filterState>('all');
  const [modal, setModal] = useState<ModalProps>({index: 0, show: false});

  const onClickCancel = () => {
    setModal({show:false, index:0});
  }

  const deleteAction = useCallback((id: number) =>
    dispatch(deleteToDo({id})),
    [dispatch]);

    const onClickUpdate = useCallback(() => {
      setModal({show:false, index:0});
    }, []);
  return (
    <Container>
      <Content>
        <Title>{STRINGS.projectTitle}</Title>
        <ToDoCreator />
        <Filter
          onClickAll={() => setFilterState('all')}
          onClickComplete={() => setFilterState('complete')}
          onClickWIP={() => setFilterState('wip')}
        />
        {filterState === 'complete' ? (<BtnConatiner>
          <SpecialBtn onClick={() => {
            {props.details.map(docs => {
              if(docs.isCompleted){
                deleteAction(docs.id);
              }
            })}
          }}>{STRINGS.deleteCompleted}</SpecialBtn>
        </BtnConatiner>) : null}
        {props.details.map((details: ToDoSchema, index:number) => {
          if(filterState === 'all') {
            return (
              <ToDoCard
                key={details.id}
                details={details}
                onClickUpdate={() => setModal({show:true, index})}
              />
            )
          } else if(filterState === 'complete') {
            return details.isCompleted ? (<ToDoCard
                  key={details.id}
                  details={details}
                  />) : null
          } else {
            return !details.isCompleted ? (<ToDoCard
              key={details.id}
              details={details}
              />) : null
          }})
        }
      </Content>
      {modal.show && <ToDoModal index={modal.index} onClickCancel={onClickCancel} onClickUpdate={onClickUpdate}/>}
    </Container>
  );
}

export default ToDoListTemplate;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
`

const Title = styled.h1`
  padding: 0.9rem;
  margin-bottom: 4rem;
`

const BtnConatiner = styled.div`
  display: flex;
  justify-content: flex-end;
`

const SpecialBtn = styled.button`
  margin-top: 15px;
  padding: 4px;
  background-color: #ffa8a8;
  color: white;
  border: none;
  border-radius: 10px;
`