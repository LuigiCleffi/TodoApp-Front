"use client";
import AddButton from "@/components/Button/AddButton";
import TodoContainerWrapper from "@/components/TodoContainerWrapper";
import TodoInput from "@/components/TodoInput";
import Image from "next/image";

import TodoCard from "@/components/TodoCard";
import { useCallback, useState } from "react";


interface TaskList {
  taskVal: string;
  isChecked: boolean;
}

export default function Home() {

  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<TaskList[]>([]);

  const handleTaskValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const handleAddTask = useCallback(() => {
    setTasks(prevTasks => [...prevTasks, { taskVal: task, isChecked: false }]);
    setTask("");
  }, [task]);


  const handleCheckInput = (index: number) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = { ...updatedTasks[index], isChecked: !updatedTasks[index].isChecked };
      return updatedTasks;
    });
  };

  const handleRemoveTask = (index: number) => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  const amountOfTasksDone = tasks.filter(task => task.isChecked).length;

  return (
    <main className="h-dvh bg-gray-600 relative">
      <section className="bg-gray-700 h-[20%] flex justify-center items-center">
        <div>
          <Image src="/Logo.svg" alt="" width={200} height={200} />
        </div>
      </section>
      <div className="w-full flex justify-center items-center gap-2 absolute top-70 transform -translate-y-1/2">
        <div className="w-6/12 flex justify-center items-center gap-2">
          <TodoInput handleTaskValue={handleTaskValue} value={task} />
          <AddButton handleAddTask={handleAddTask} />
        </div>
      </div>
      <TodoContainerWrapper amountOfCreatedTasks={tasks.length} amountOfTasksDone={amountOfTasksDone} sx="w-6/12 mt-16 mx-auto" >
        {tasks.length !== 0 ?
          tasks?.map((task, index) =>
            <TodoCard
              key={index}
              handleCheckInput={() => handleCheckInput(index)}
              handleRemoveTask={() => handleRemoveTask(index)}
              isChecked={task.isChecked}
              task={task.taskVal}
            />)
          : null}
      </TodoContainerWrapper>
    </main >
  );
}
