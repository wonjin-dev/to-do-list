import styled from "styled-components";
import {STRINGS} from "../../constants/ko";
import Publicbtn from "../atoms/PublicBtn";

interface Props {
  onClickAll?: () => void;
  onClickComplete?: () => void;
  onClickWIP?: () => void;
}

const Filter = (props: Props) => {
  return (
    <Container>
        <Publicbtn value={STRINGS.viewAll} onClickBtn={props.onClickAll} />
        <Publicbtn value={STRINGS.viewWIP} onClickBtn={props.onClickWIP} />
        <Publicbtn value={STRINGS.vieCompleted} onClickBtn={props.onClickComplete} />
    </Container>
  )
}

export default Filter;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  background-color: inherit
`