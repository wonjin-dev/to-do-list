import {useState} from 'react';
import styled from 'styled-components';
import {useDispatch} from 'react-redux';
import {addToDo} from '../../store/slices/toDoSlice';
import InputForm from '../molecules/InputForm';
import {tagSplit} from "../utils/tagSplitter";
import {addTag, TagSchema} from '../../store/slices/tagSlice';

const ToDoCreator: React.FC = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const [details, setDetails] = useState({
    id: id,
    title: '',
    desc: '',
    tags: '',
    ddd: '',
    isCompleted: false
  });

  const onClickAdd = () => {
    setId(id => id + 1);
    const todo = {
      id: id,
      title: details.title,
      desc: details.desc,
      tags: details.tags,
      ddd: details.ddd,
      isCompleted: details.isCompleted
    };
    const splited: TagSchema[] = tagSplit(todo.tags);
    let tagsLeng = splited.length;
    for(let i=0; i<tagsLeng; i++){
      dispatch(addTag(splited[i]))
    }
    dispatch(addToDo(todo));
    setDetails({
      id: id,
      title: '',
      desc: '',
      tags: '',
      ddd: '',
      isCompleted: false
    });
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <Container>
      <InputForm
        details={details}
        onChange={onChange}
        onClickAdd={onClickAdd}
      />
    </Container>
  );
}

export default ToDoCreator;

const Container = styled.div`
  width: 100%;
`