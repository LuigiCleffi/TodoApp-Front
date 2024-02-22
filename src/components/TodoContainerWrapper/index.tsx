import Image from "next/image";
import { ReactNode } from "react";


interface TodoContainerWrapperProps {
  children?: ReactNode,
  amountOfCreatedTasks?: number,
  amountOfTasksDone?: number,
  sx?: string
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
    <div className="flex items-center justify-center gap-2">
      <p className={title !== componentText.tasksCreated ? "text-purple-dark" : "text-blue"}>{title}</p>
      <span className={`${title !== componentText.tasksDone ? 'w-8' : 'w-14'} p-1  rounded-full bg-gray-400 text-gray-200 flex items-center justify-center`}>
        {title !== componentText.tasksCreated ? `${amountOfTasks} de ${totalAmountOfTasks}` : amountOfTasks}
      </span>
    </div >

  );

}

function TodoContainerWrapper({
  children,
  amountOfCreatedTasks = 0,
  amountOfTasksDone = 0,
  sx }: TodoContainerWrapperProps) {
  return (
    <div className={`justify-center  ${sx}`}>
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
      {children ?? (
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