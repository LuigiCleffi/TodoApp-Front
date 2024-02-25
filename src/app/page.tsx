"use client";
import AddButton from "@/components/Button/AddButton";
import TodoContainerWrapper from "@/components/TodoContainerWrapper";
import TodoInput from "@/components/TodoInput";
import Image from "next/image";

import TodoCard from "@/components/TodoCard";
import { useCallback, useState } from "react";

import { DndContext, DragEndEvent, MouseSensor, closestCenter, useSensor } from "@dnd-kit/core"
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"


type TaskList = {
  id: string;
  taskVal: string;
  isChecked: boolean;
}

export default function Home() {

  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<TaskList[]>([]);

  const handleTaskValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value)
  }

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });

  const handleAddTask = useCallback(() => {
    setTasks(prevTasks => [...prevTasks, {
      id: Math.random().toString(),
      taskVal: task,
      isChecked: false
    }]);
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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      setTasks((tasks) => {
        const activeIndex = tasks.findIndex(task => task.id === active.id);
        const overIndex = tasks.findIndex(task => task.id === over.id);
        return arrayMove(tasks, activeIndex, overIndex);
      });
    }

  }

  const amountOfTasksDone = tasks.filter(task => task.isChecked).length;
  const checkIfTaskIsEmpty = task.length === 0;

  return (
    <main className="h-dvh bg-gray-600 relative">
      <section className="bg-gray-700 h-[20%] flex justify-center items-center">
        <div>
          <Image src="/Logo.svg" alt=""
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-[70px]"
            priority
          />
        </div>
      </section>
      <div className="w-full flex justify-center items-center gap-2 absolute top-70 transform -translate-y-1/2">
        <div className="sm:w-64 md:w-6/12 flex justify-center items-center gap-2">
          <TodoInput handleTaskValue={handleTaskValue} value={task} />
          <AddButton handleAddTask={handleAddTask} hasTask={checkIfTaskIsEmpty} />
        </div>
      </div>
      <TodoContainerWrapper amountOfCreatedTasks={tasks.length} amountOfTasksDone={amountOfTasksDone}  >
        <DndContext
          sensors={[mouseSensor]}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={tasks} strategy={verticalListSortingStrategy}>

            {tasks.length !== 0 ?
              tasks?.map((task, index) =>
                <TodoCard
                  id={task.id}
                  key={index}
                  handleCheckInput={() => handleCheckInput(index)}
                  handleRemoveTask={() => handleRemoveTask(index)}
                  isChecked={task.isChecked}
                  task={task.taskVal}
                />)
              : null}
          </SortableContext>

        </DndContext>

      </TodoContainerWrapper>
    </main >
  );
}
