
function TodoInput({ ...props }) {

  return (
    <input
      type="text"
      className="p-3 text-sm rounded-lg bg-gray-500 focus:ring-1 focus:ring-purple-dark w-full text-gray-200"
      placeholder="Adicione uma nova tarefa"
      {...props} />
  );
}

export default TodoInput;