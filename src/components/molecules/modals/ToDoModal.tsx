import {useState, useCallback} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux';
import {ReduxState} from '../../../store/index';
import {ToDoSchema, updateToDo} from '../../../store/slices/toDoSlice';
import {STRINGS} from '../../../constants/ko';
import PublicBtn from "../../atoms/PublicBtn";
import PublicInput from '../../atoms/PublicInput';

interface Props {
  index: number;
  onClickUpdate: () => void;
  onClickCancel: () => void;
}

const ToDoModal = (props: Props) => {
  const originReduxState = useSelector((state: ReduxState) => state.toDo);
  const details = originReduxState[props.index];
  const [modalDetails, setModalDetails] = useState(details)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {    
    setModalDetails({
      ...modalDetails,
      [e.target.name]: e.target.value
    });
  };
  const dispatch = useDispatch();
  const updateAction = useCallback((toDo: ToDoSchema) => {
      dispatch(updateToDo({
      ...toDo
    }
  ))}, [dispatch]);

  const updateDetail = () => {
    updateAction(modalDetails);
    props.onClickUpdate();
  }
  
  return (
    <>
      <ModalWrapper>
        <Container>
          <PublicInput
            name="title"
            placeholder={STRINGS.title}
            value={modalDetails.title}
            onChange={onChange}
          />
          <PublicInput
            name="desc"
            placeholder={STRINGS.desc}
            value={modalDetails.desc}
            onChange={onChange}
          />
          <PublicInput
            type='date'
            name="ddd"
            placeholder={STRINGS.ddd}
            value={modalDetails.ddd}
            onChange={onChange}
          />
          <BtnContainer>
            <PublicBtn onClickBtn={updateDetail} value={STRINGS.edit} />
            <PublicBtn onClickBtn={props.onClickCancel} value={STRINGS.close} />
          </BtnContainer>
        </Container>
      </ModalWrapper>
    </>
  )
}

export default ToDoModal;

const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: white;
  width: 40vw;
`

const BtnContainer = styled.div`
  display: flex;
  margin-top: 7px;
`