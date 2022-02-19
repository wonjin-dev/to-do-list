import {TagSchema} from "../../store/slices/tagSlice";

export const tagSplit = (text: string) => {
  const stringArr: TagSchema[] = [];
  const splitString = text.split(',');
  for(let index in splitString) {
    stringArr.push({
      title: splitString[index],
      bgColor: "#" + ((1<<24)*Math.random() | 0).toString(16)
    })
  }
  return stringArr;
}