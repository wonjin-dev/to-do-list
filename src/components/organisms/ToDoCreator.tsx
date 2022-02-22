import {useState, useEffect} from 'react';
import styled from 'styled-components';
import moment from "moment";
import {useDispatch} from 'react-redux';
import {addToDo} from '../../store/slices/toDoSlice';
import {addTag, TagSchema} from '../../store/slices/tagSlice';
import {tagSplit} from "../utils/tagSplitter";
import {STRINGS} from '../../constants/ko';
import InputForm from '../molecules/InputForm';
const now = moment().format('YYYY-MM-DD');

const ToDoCreator: React.FC = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);
  const [details, setDetails] = useState({
    id: id,
    title: '',
    desc: '',
    tags: '',
    ddd: '',
    crd: now,
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
      crd: now,
      isCompleted: details.isCompleted
    };
    
    const splited: TagSchema[] = tagSplit(todo.tags);
    const set = new Set(splited);
    const finalArr = Array.from(set);
    const tagsLeng = finalArr.length;
    
    for(let i=0; i<tagsLeng; i++){
      dispatch(addTag(finalArr[i]));
    }
    dispatch(addToDo(todo));
    if(details.title !== ''){
      setDetails({
        id: id,
        title: '',
        desc: '',
        tags: '',
        ddd: '',
        crd: now,
        isCompleted: false
      });
    } else {
      alert(`${STRINGS.titleNecessary}`);
    }
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({
      ...details,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    if(details.title.length > 10) {
      setDetails({
        ...details,
        title: details.title.slice(0,9)
      })
      alert(`${STRINGS.titleNeed10}`);
    }
  }, [details.title]);
  
  useEffect(() => {
    const {title, desc, ddd, tags} = details
    if(title !== '' || desc !== '' || ddd !== '' || tags !== ''){
      window.addEventListener('beforeunload', (e) => {
        e.returnValue = `${STRINGS.confirmExit}`;
      });
    }
  }, [details]);

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