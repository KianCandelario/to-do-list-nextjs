"use client";

type TodoProps = {
    id: string,
    title: string,
    complete: boolean,
    toggleToDo: (id: string, complete: boolean) => void
}

const TodoItems = ({ id, title, complete, toggleToDo}: TodoProps) => {
    return ( 
        <li className="flex gap-1 items-center text-[#352F44] bg-[#B9B4C7] mb-2 p-3">
            <input 
            type="checkbox"
            className="cursor-pointer peer"
            defaultChecked={complete}
            onChange={e => toggleToDo(id, e.target.checked)} 
            />
            <label htmlFor={id}
            className="peer-checked:line-through peer-checked:text-slate-500 cursor-pointer">
                {title}
            </label>
        </li>
    );
}
 
export default TodoItems;