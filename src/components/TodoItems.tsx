type TodoProps = {
    id: string,
    title: string,
    complete: boolean
}

const TodoItems = ({ id, title, complete }: TodoProps) => {
    return ( 
        <li className="flex gap-1 items-center">
            <input type="checkbox" className="cursor-pointer peer" />
            <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-700 cursor-pointer">{title}</label>
        </li>
    );
}
 
export default TodoItems;