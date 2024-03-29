import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/db";
import TodoItems from "@/components/TodoItems";

const getTodos = () => {
  return prisma.todo.findMany();
};

const toggleToDo = async (id: string, complete: boolean) => {
  "use server";

  await prisma.todo.update({
    where: { id },
    data: { complete },
  });
};

const Home = async () => {
  const todos = await getTodos();

  return (
    <main className="h-dvh w-dvw flex justify-center items-center">
      <div className="w-[30%]">
        <header className="flex justify-between items-center mb-4 px-5 bg-[#5C5470] p-3">
          <h1 className="text-2xl font-bold">To Do List</h1>
          <Link
            href={"/new"}
            className="flex items-center px-3 py-2 rounded-md hover:bg-[#352F44] hover:scale-100 hover:translate-x-1 hover:font-bold focus-within:bg-[#B9B4C7] outline-none transition duration-300"
          >
            <Image
              src="assets/icons/add-circle-svgrepo-com.svg"
              width={27}
              height={27}
              alt="Add button"
              className="mr-2"
            />
            New
          </Link>
        </header>
        <ul>
          {todos.length > 0 ? (
            todos.map((todo) => (
              <TodoItems
                key={todo.id}
                {...todo}
                toggleToDo={toggleToDo}
              ></TodoItems>
            ))
          ) : (
            <li className="bg-[#B9B4C7] text-[#352F44] flex justify-center items-center p-5">
              No todos available.
            </li>
          )}
        </ul>
      </div>
    </main>
  );
};

export default Home;
