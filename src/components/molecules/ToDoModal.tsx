import {useState, useCallback} from 'react';
import styled from "styled-components";
import {useDispatch, useSelector} from 'react-redux';
import {ReduxState} from '../../store/index';
import {ToDoSchema, updateToDo} from '../../store/slices/toDoSlice';
import {STRINGS} from '../../constants/ko';
import PublicBtn from "../atoms/PublicBtn";
import InputForm from "../molecules/InputForm";

interface Props {
  index: number;
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

  return (
    <>
      <ModalWrapper>
        <Container>
          <InputForm
            details={modalDetails}
            onChange={onChange}
            onClickAdd={() => {
              updateAction(modalDetails);
              alert('수정되었습니다');
            }}
          />
          <BtnContainer>
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
  margin-top: 7px;
`