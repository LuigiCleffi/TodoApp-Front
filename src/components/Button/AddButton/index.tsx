import { PlusCircleIcon } from "@heroicons/react/24/outline";

function AddButton({ ...props }) {
  return (
    <button className="btn flex bg-blue-dark hover:bg-blue p-2 rounded-md justify-center align-middle w-24 text-slate-300 font-bold gap-2" {...props}>
      Criar
      <PlusCircleIcon className="w-5 h-6 " />
    </button>
  );
}

export default AddButton;