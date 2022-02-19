import styled from "styled-components"

interface Props {
  value?: string | number;
  onClickBtn?: () => void;
}

const PublicBtn = (props: Props) => {
  return (
    <>
      <StyledBtn onClick={props.onClickBtn}>{props.value}</StyledBtn>
    </>
  )
}

export default PublicBtn;

const StyledBtn = styled.button`
  width: 100%;
  height: 25px;
  background-color: #a5d8ff;
  border: none;
  border-radius: 20px;
`