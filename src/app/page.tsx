import AddButton from "@/components/Button/AddButton";
import TodoContainerWrapper from "@/components/TodoContainerWrapper";
import TodoInput from "@/components/TodoInput";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-dvh bg-gray-600 relative">
      <section className="bg-gray-700 h-[20%] flex justify-center items-center">
        <div>
          <Image src="/Logo.svg" alt="" width={200} height={200} />
        </div>
      </section>
      <div className="w-full flex justify-center items-center gap-2 absolute top-70 transform -translate-y-1/2">
        <div className="w-5/12 flex justify-center items-center gap-2">
          <TodoInput />
          <AddButton />
        </div>
      </div>
      <TodoContainerWrapper sx="w-5/12 mt-10 mx-auto" />
    </main>
  );
}
