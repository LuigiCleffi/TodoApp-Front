import { PlusCircleIcon } from "@heroicons/react/24/outline";
const componentText = {
  create: "Criar",
}

function AddButton({ handleAddTask, hasTask, ...props }: { handleAddTask: () => void, hasTask: boolean }) {
  return (
    <button disabled={hasTask ? true : false} className="btn flex bg-blue-dark hover:bg-blue p-2 rounded-md justify-center align-middle w-24 text-slate-300 font-bold gap-2" onClick={handleAddTask} {...props}>
      {componentText.create}
      <PlusCircleIcon className="w-5 h-6 " />
    </button>
  );
}

export default AddButton;