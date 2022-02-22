import {useCallback} from 'react';
import styled from "styled-components";
import {useDispatch} from 'react-redux';
import {deleteToDo} from '../../../store/slices/toDoSlice';
import {STRINGS} from '../../../constants/ko';
import PublicBtn from "../../atoms/PublicBtn";

interface Props {
  index: number;
  onClickCancel: () => void;
}

const ConfirmModal = (props: Props) => {
  const dispatch = useDispatch();
  const deleteAction = useCallback((id: number) =>
  dispatch(deleteToDo({id})),
  [dispatch]);

  return (
    <>
      <ModalWrapper>
        <Container>
          <BtnContainer>
            <PublicBtn onClickBtn={() => deleteAction(props.index)} value={STRINGS.delete} />
            <PublicBtn onClickBtn={props.onClickCancel} value={STRINGS.close} />
          </BtnContainer>
        </Container>
      </ModalWrapper>
    </>
  )
}

export default ConfirmModal;

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
  padding: 50px;
  background-color: white;
`

const BtnContainer = styled.div`
  display: flex;
`