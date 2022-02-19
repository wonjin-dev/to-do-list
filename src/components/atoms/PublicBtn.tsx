import styled from "styled-components"

interface Props {
  value?: string | number;
  onClickBtn?: () => void;
}

const PublicBtn = (props: Props) => {
  return (
    <>
      <FilterBtn onClick={props.onClickBtn}>{props.value}</FilterBtn>
    </>
  )
}

export default PublicBtn;

const FilterBtn = styled.button`
  width: 100%;
  height: 25px;
  background-color: #a5d8ff;
  border: none;
  border-radius: 20px;
`