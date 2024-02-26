import { Box } from "@radix-ui/themes";
import Image from "next/image";
import { ReactNode } from "react";


interface TodoContainerWrapperProps {
  children?: ReactNode,
  amountOfCreatedTasks?: number,
  amountOfTasksDone?: number,
}
interface ContainerHeaderProps {
  title: string;
  amountOfTasks?: number,
  totalAmountOfTasks?: number
}

const componentText = {
  tasksCreated: "Tarefas criadas",
  tasksDone: "Concluídas",

}

const ContainerHeader = ({ amountOfTasks, totalAmountOfTasks, title }: ContainerHeaderProps) => {
  return (
    <div className="flex flex-col items-center sm:flex-row sm:items-center justify-center sm:justify-between gap-2">
      <p className={title !== componentText.tasksCreated ? "text-purple-dark" : "text-blue"}>{title}</p>
      <div className="text-gray-200 flex items-center">
        <span className={`${title !== componentText.tasksDone ? 'w-10' : 'w-28'} p-2 rounded-full bg-gray-400 text-gray-200 flex items-center justify-center`}>
          {title !== componentText.tasksCreated ? `${amountOfTasks} de ${totalAmountOfTasks}` : amountOfTasks}
        </span>
      </div>
    </div>
  );
}

function TodoContainerWrapper({
  children,
  amountOfCreatedTasks = 0,
  amountOfTasksDone = 0,
}: TodoContainerWrapperProps) {
  return (
    <div className='justify-center w-6/12 mt-16 mx-auto '>
      <div className="w-full flex justify-between">

        <ContainerHeader
          title={componentText.tasksCreated}
          amountOfTasks={amountOfCreatedTasks}
        />

        <ContainerHeader
          title={componentText.tasksDone}
          amountOfTasks={amountOfTasksDone}
          totalAmountOfTasks={amountOfCreatedTasks}
        />
      </div>
      {amountOfCreatedTasks !== 0 ? (
        <Box className="max-h-[60dvh] mt-6 overflow-y-auto custom-scrollbar pr-4">
          {children}
        </Box>
      ) : (
        <section className="w-full flex flex-col items-center mt-6 border-t border-blue rounded-t-lg p-3">
          <div className="flex flex-col items-center mt-16">
            <Image src="/Clipboard.svg" width={80} height={80} alt="" priority />
            <div className="mt-4">
              <div className="text-center">
                <p className="text-gray-300 font-bold text-lg ">
                  Você ainda não tem tarefas cadastradas
                </p>
              </div>
              <div className="text-center ">
                <p className="text-gray-300 text-lg">
                  Crie tarefas e organize seus itens a fazer
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default TodoContainerWrapper;