interface IProps {
  todos: {
    id: number;
    title: string;
    isComplete: boolean;
  }[];
  age: number;
  deleteToDo: (v: number) => void;
}
const ToDoData = (props: IProps) => {
  const { todos, deleteToDo } = props;

  const handDelete = (id: number) => {
    deleteToDo(id);
  };
  return (
    <>
      <div>
        {todos.map((item) => (
          <div key={item.id}>
            {item.id} - {item.title}
            <button onClick={() => handDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default ToDoData;
