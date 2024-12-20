import { memo } from 'react';
import { Button } from './Button';
import { ToDoList } from '@prisma/client';
//import { Memoize } from 'typescript-memoize';

const
  DELETE_ACTION = 'del',
  TOGGLE_CHECKBOX_ACTION = 'toggle-checkbox',
  START_EDIT = 'start_edit';



  export const Item = memo(function Item({ item }: {item: ToDoList}) {
    console.debug('Item render id=', item);
    const
      { id, checked, text } = item;
    return <li data-id={id} >
      <input type="checkbox" value={checked}  data-action={TOGGLE_CHECKBOX_ACTION}/>
      <span> {text}</span>
      <Button action={START_EDIT}>✔️Edit </Button>
      <Button action={DELETE_ACTION}>❌Del</Button>
      {checked && '💹'}
    </li>
  });
  
  

