import styled from "styled-components";
import {ToDoSchema} from "../../store/slices/toDoSlice";
import {STRINGS} from "../../constants/ko";
import PublicInput from "../atoms/PublicInput";
import PublicBtn from "../atoms/PublicBtn";

interface Props {
  details: ToDoSchema;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickAdd?: () => void;
}

const InputForm: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      <PublicInput
        name="title"
        placeholder={STRINGS.name}
        value={props.details.title}
        onChange={props.onChange}
      />
      <PublicInput
        name="desc"
        placeholder={STRINGS.desc}
        value={props.details.desc}
        onChange={props.onChange}
      />
      <PublicInput
        name="tags"
        placeholder={STRINGS.tagPlaceholder}
        value={props.details.tags}
        onChange={props.onChange}
      />
      <PublicInput
        type="date"
        name="ddd"
        value={props.details.ddd}
        onChange={props.onChange}
      />
      <BtnConatiner>
      <PublicBtn
        onClickBtn={props.onClickAdd}
        value={STRINGS.submit}
      />
      </BtnConatiner>
    </Container>
  );
}

export default InputForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const BtnConatiner = styled.div`
  justify-content: center;
  align-items: center;
`