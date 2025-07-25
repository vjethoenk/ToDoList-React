import { useState } from "react";
import ToDoData from "./ToDo.Data";
import ToDoInput from "./ToDo.Input";

interface IToDos {
  id: number;
  title: string;
  isComplete: boolean;
}
const ToDoList = () => {
  //   const todos = [
  //     {
  //       id: 1,
  //       title: "Hom nay an gi",
  //       isComplete: true,
  //     },
  //     {
  //       id: 2,
  //       title: "Viet Hoang",
  //       isComplete: false,
  //     },
  //     {
  //       id: 3,
  //       title: "Hom nay an gi",
  //       isComplete: true,
  //     },
  //   ];
  const [listTodo, setListToDo] = useState<IToDos[]>([]);

  const AddNewToDo = (todo: IToDos) => {
    setListToDo([...listTodo, todo]);
  };
  const DeleteToDo = (id: number) => {
    const newToDo = listTodo.filter((p) => p.id != id);
    setListToDo(newToDo);
  };
  return (
    <>
      <div
        style={{
          width: 600,
          border: "1px solid #ccc",
          padding: 10,
          margin: "50px auto",
          borderRadius: 10,
        }}
      >
        <h4 style={{ marginBottom: 0 }}>My ToDoList</h4>
        <hr />
        <ToDoInput addNewToDo={AddNewToDo}></ToDoInput>
        <ToDoData todos={listTodo} age={12} deleteToDo={DeleteToDo}></ToDoData>
      </div>
    </>
  );
};
export default ToDoList;
