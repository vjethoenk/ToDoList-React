import { ChangeEvent, useState } from "react";
interface IToDos {
  id: number;
  title: string;
  isComplete: boolean;
}
interface IProps {
  name?: string;
  addNewToDo: (v: IToDos) => void;
}
const ToDoInput = (props: IProps) => {
  const { addNewToDo } = props;
  const [todo, setTodo] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };
  const randomInteger = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const handleClick = () => {
    addNewToDo({
      id: randomInteger(1, 100000),
      title: todo,
      isComplete: false,
    });
    setTodo("");
  };
  return (
    <>
      <div style={{ margin: "10px 0", display: "flex", gap: 15 }}>
        <input type="text" value={todo} onChange={handleInputChange} />
        <button onClick={handleClick}>Add</button>
      </div>
    </>
  );
};
export default ToDoInput;
