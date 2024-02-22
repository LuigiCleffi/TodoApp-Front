import { TrashIcon } from "@heroicons/react/24/outline";
import { Box, Flex, Text } from "@radix-ui/themes";

function TodoCard({ task, isChecked = false }: { task: string, isChecked: boolean }) {
  return (<div className="p-6 bg-gray-400 rounded-lg mt-5" >
    <Flex justify="between" align="start" gap="4">
      <Flex align="start" gap="4">
        <Box>
          <input type="radio" checked={isChecked} />
        </Box>
        <Text size="3" weight="light" className={`text-gray-100 text-justify ${isChecked ? 'line-through' : undefined}`}>{task}</Text>
      </Flex>

      <TrashIcon className="w-14 h-7 text-gray-300 rounded-md hover:bg-gray-300 hover:text-danger p-1 cursor-pointer" />

    </Flex>


  </div>);
}

export default TodoCard;