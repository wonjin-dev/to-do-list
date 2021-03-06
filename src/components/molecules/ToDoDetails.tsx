import {useState, useMemo} from "react";
import styled from "styled-components";
import {useSelector} from 'react-redux';
import {ReduxState} from '../../store/index';
import {ToDoSchema} from "../../store/slices/toDoSlice"
import {STRINGS} from "../../constants/ko";
import ConfirmModal from './modals/ConfirmModal';

interface Props {
  details: ToDoSchema;
  completed?: boolean;
  onClickComplete?: () => void;
  onClickUpdate?: () => void;
  onClickDelete?: () => void;
}

const ToDoDetails: React.FC<Props> = (props: Props) => {
  const [modal, setModal] = useState(false);
  const tagState = useSelector((state: ReduxState) => state.tags);
  const splited =
    props.details.tags
      ? props.details.tags?.split(',')
      : undefined;

  const tagList = useMemo(() => {
    // let a = '';
    if(splited) {
      // eslint-disable-next-line array-callback-return
      return tagState.map((tags, index) => {
          for(let i=0; i<splited.length; i++) {
            if(splited[i] === tagState[index].title) {
              if(tags.title.length > 4) {
                return <Tags key={index} color={tags.bgColor}>{tags.title.slice(0,4)}...</Tags>
              } else {
                return <Tags key={index} color={tags.bgColor}>{tags.title}</Tags>
              }
            }
          }
        })
    } else {
      return null;
    }
  }, [splited, tagState]);

  return (
    <Container>
      <CheckboxContainer>
        <input
          type="checkbox"
          checked={props.completed || false}
          onChange={props.onClickComplete}
        />
      </CheckboxContainer>
      <DetailsContainer>
        <Details>{STRINGS.nameColon}{props.details.title}</Details>
        <Details>{STRINGS.descColon}{props.details.desc}</Details>
        <Details>{STRINGS.ddd}{props.details.ddd}</Details>
        {tagList !== null
          ? <Details>{tagList}</Details>
          : null
        }
      </DetailsContainer>
      <BtnContainer>
        <StyledBtn onClick={props.onClickUpdate}>{STRINGS.edit}</StyledBtn>
        <StyledBtn onClick={() => setModal(true)}>{STRINGS.delete}</StyledBtn>
      </BtnContainer>
      {modal && <ConfirmModal index={props.details.id} onClickCancel={() => setModal(false)} />}
    </Container>
  );
}

export default ToDoDetails;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: space-between;
  padding: 20px;
`

const CheckboxContainer = styled.div`
  width: 10%;
  padding: 20px;
  background-color: inherit;
`

const Details = styled.div`
  display: flex;
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #f8f9fa;
  border: none;
  border-radius: 12px;
`

const Tags = styled.div`
  display: flex;
  justify-content: center;
  width: 18%;
  margin-left: 3px;
  padding: 4px;
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 20px;
`

const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const StyledBtn = styled.button`
  margin-bottom: 8px;
  width: 50px;
  height: 25px;
  background-color: #a5d8ff;
  border: none;
  border-radius: 20px;
`