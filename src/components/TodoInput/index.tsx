
function TodoInput({ handleTaskValue, ...props }: { handleTaskValue: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <input
      type="text"
      className="p-3 text-sm rounded-lg bg-gray-500 transition duration-300 ease-in-out focus:ring-1 focus:ring-purple-dark w-full text-gray-200"
      placeholder="Adicione uma nova tarefa"
      onChange={handleTaskValue}
      {...props} />
  );
}

export default TodoInput;