import Link from "next/link";
import Image from "next/image";

const NewPage = () => {
  return (
    <>
      <main className="h-dvh w-dvw flex justify-center items-center">
        <div className="w-[30%]">
          <header className="flex justify-between items-center mb-4 px-5 bg-[#5C5470] p-3">
            <h1 className="text-2xl font-bold">Add New Task</h1>
            <Link
              href={".."}
              className="h-9 flex items-center px-3 py-2 rounded-md hover:bg-[#352F44] hover:scale-100 hover:translate-x-1 hover:font-bold hover:border-0 focus-within:bg-[#B9B4C7] outline-none transition duration-300 border-2 border-[#FAF0E6] text-sm"
            >
              Cancel
            </Link>
          </header>

          <form action="" className="flex justify-center items-center">
            <input
              type="text"
              name="title"
              id="title"
              className="p-3 w-[83%] h-11 mr-[2%] text-[#352F44] text-xs bg-[#B9B4C7] focus-within:border-slate-300"
            />
            <button className="flex justify-center h-11 items-center w-[15%] bg-[#B9B4C7] cursor-pointer text-[#352F44] text-xl font-extrabold hover:bg-[#FAF0E6] hover:scale-100 hover:-translate-y-1 hover:font-bold hover:border-0 focus-within:bg-[#B9B4C7] outline-none transition duration-300">
              +
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default NewPage;
