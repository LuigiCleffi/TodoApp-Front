import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Box, Flex, Text } from "@radix-ui/themes";
import { UseSortableArguments, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface TodoCardProps extends UseSortableArguments {
  id: string;
  task: string;
  handleCheckInput: () => void;
  handleRemoveTask: () => void;
  isChecked: boolean;

}

function TodoCard({ task, handleCheckInput, handleRemoveTask, isChecked, id, ...props }: TodoCardProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging, } = useSortable({ id, ...props });

  const style = isDragging ? {
    transform: CSS.Transform.toString(transform),
    transition: transition ?? undefined,
    opacity: 0.5
  } : undefined;

  return (
    <Box className="p-6 bg-gray-400 rounded-lg mt-5" ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Flex justify="between" align="start" gap="4">
        <Flex align="start" gap="4">
          <Box>
            {!isChecked ? (
              <div className="rounded-full ring-1 ring-blue-dark h-6 w-6 cursor-pointer" onClick={handleCheckInput} />
            ) : (
              <CheckCircleIcon className="rounded-full  h-6 w-6 cursor-pointer text-purple-dark" onClick={handleCheckInput} />
            )}
          </Box>
          <Text
            size="3"
            weight="light"
            className={
              `text-gray-100 text-justify ${isChecked ?
                'line-through' :
                undefined} `}
          >{task}</Text>
        </Flex>
        <TrashIcon className="w-8 h-7 text-gray-300 rounded-md hover:bg-gray-300 hover:text-danger p-1 cursor-pointer" onClick={handleRemoveTask} />
      </Flex>
    </Box>
  );
}

export default TodoCard;