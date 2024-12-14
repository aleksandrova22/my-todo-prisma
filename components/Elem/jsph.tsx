import { ToDoList } from "@prisma/client";
import { ReactNode } from "react";

//type todo = {id: number, text: string,  checked: string};

export type Column = {
    title: string,
    content?: (_: ToDoList) => ReactNode,
    setVal?: (s: string) => Partial<ToDoList>,
    getVal?: (obj: ToDoList) => string

};
export type Config = { columns: Column[] }

export const config: Config = {
    columns: [
        { title: 'id', content: todo => todo.id },
        { title: 'checked', content: todo => todo.checked },
        { title: 'text', getVal: ((todo) => todo.text), setVal: text => ({ text }) }

    ]
};


