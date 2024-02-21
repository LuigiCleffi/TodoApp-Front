import { ClipboardIcon } from "@heroicons/react/24/outline";
import { Text } from "@radix-ui/themes";
import Image from "next/image";
import { ReactNode } from "react";

function TodoContainerWrapper({ children, sx }: { children?: ReactNode, sx?: string }) {
  return (
    <div className={`justify-center  ${sx}`}>
      <div className="w-full flex justify-between">
        <div className="flex items-center justify-center gap-2">
          <p className="text-blue">Tarefas Criadas</p>
          <span className="w-6 h-6 rounded-full bg-gray-400 text-gray-200 flex items-center justify-center">
            0
          </span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-purple-dark">Concluidas</p>
          <span className="w-6 h-6 rounded-full bg-gray-400 text-gray-200 flex items-center justify-center">
            0
          </span>
        </div>
      </div>
      <section className="w-full flex flex-col items-center mt-6 border-t border-blue rounded-t-lg p-3">
        <div className="flex flex-col items-center mt-16">
          <Image src="/Clipboard.svg" width={80} height={80} alt="" />
          <div className="mt-4">
            <div className="text-center">
              <p className="text-gray-300 font-bold">
                Você ainda não tem tarefas cadastradas
              </p>
            </div>
            <div className="text-center mt-2">
              <p className="text-gray-300 ">
                Crie tarefas e organize seus itens a fazer
              </p>
            </div>
          </div>
        </div>
      </section>
      {children}
    </div>
  );
}

export default TodoContainerWrapper;