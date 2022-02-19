import styled from "styled-components";

interface Props {
  type?: string
  name: string;
  placeholder?: string;
  value?: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PublicInput = (props: Props) => {
  return (
    <StlyedInput
      type={props.type || 'text'}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  )
}

export default PublicInput;

const StlyedInput = styled.input`
  padding: 16px;
  margin-bottom: 6px;
  background-color: rgba(200,254,254,0.6);
  border: none;
  border-radius: 10px;
`