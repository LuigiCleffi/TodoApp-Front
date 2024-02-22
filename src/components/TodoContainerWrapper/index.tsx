import Image from "next/image";
import { ReactNode } from "react";

interface TodoContainerWrapperProps {
  children?: ReactNode,
  amauntOfCreatedTasks?: number,
  amauntOfTasksDone?: number,
  sx?: string
}
interface ContainerHeaderProps {
  title: string;
  amauntOfTasks?: number,
}

const componentText = {
  tasksCreated: "Tarefas criadas",
  tasksDone: "Concluídas"

}

const ContainerHeader = ({ amauntOfTasks, title }: ContainerHeaderProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <p className={title !== componentText.tasksCreated ? "text-purple-dark" : "text-blue"}>{title}</p>
      <span className="w-6 h-6 rounded-full bg-gray-400 text-gray-200 flex items-center justify-center">
        {amauntOfTasks}
      </span>
    </div >

  );

}

function TodoContainerWrapper({
  children,
  amauntOfCreatedTasks = 0,
  amauntOfTasksDone = 0,
  sx }: TodoContainerWrapperProps) {
  return (
    <div className={`justify-center  ${sx}`}>
      <div className="w-full flex justify-between">

        <ContainerHeader
          title={componentText.tasksCreated}
          amauntOfTasks={amauntOfCreatedTasks}
        />

        <ContainerHeader
          title={componentText.tasksDone}
          amauntOfTasks={amauntOfTasksDone}
        />
      </div>
      {!!children ? children : (
        <section className="w-full flex flex-col items-center mt-6 border-t border-blue rounded-t-lg p-3">
          <div className="flex flex-col items-center mt-16">
            <Image src="/Clipboard.svg" width={80} height={80} alt="" />
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