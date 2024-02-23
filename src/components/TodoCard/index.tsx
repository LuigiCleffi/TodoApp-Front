import { CheckCircleIcon } from "@heroicons/react/16/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Box, Flex, Text } from "@radix-ui/themes";

function TodoCard({ task, handleCheckInput, handleRemoveTask, isChecked }: { task: string, isChecked: boolean, handleCheckInput: () => void, handleRemoveTask: () => void }) {
  return (<div className="p-6 bg-gray-400 rounded-lg mt-5" >
    <Flex justify="between" align="start" gap="4">
      <Flex align="start" gap="4">
        <Box>
          {!isChecked ? (
            <div className="rounded-full ring-1 ring-blue-dark h-6 w-6 cursor-pointer" onClick={handleCheckInput} />
          ) : (
            <CheckCircleIcon className="rounded-full  h-6 w-6 cursor-pointer text-purple-dark" onClick={handleCheckInput} />
          )}
        </Box>
        <Text size="3" weight="light" className={`text-gray-100 text-justify ${isChecked ? 'line-through' : undefined}`}>{task}</Text>
      </Flex>

      <TrashIcon className="w-8 h-7 text-gray-300 rounded-md hover:bg-gray-300 hover:text-danger p-1 cursor-pointer" onClick={handleRemoveTask} />

    </Flex>


  </div>);
}

export default TodoCard;