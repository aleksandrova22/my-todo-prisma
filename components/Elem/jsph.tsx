import { todo } from "node:test";

type todo = {id: number, text: string,  checked: string};

export const config = {
        columns: [
        { title: 'id', content: (todo: todo) => todo.id },
        { title: 'checked', content: (todo: todo) => todo.checked },
        { title: 'text', getVal: ((todo: todo) => todo.text), setVal: text => ({ text }) }
       
    ]
};