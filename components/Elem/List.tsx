import { Item } from './Item';
import { memo, Fragment } from 'react';
import classes from './List.module.css';
import type { AppProps } from "next/app";

// type Object = {
//   list: Array, editedId: number, editForm: object
// };

export const List = memo(function ({ list, editedId, editForm }) {
  console.debug('List render');
  return <fieldset className={classes.list}>
    <legend>Список дел</legend>
    <ol>
      {list.map((item, id) =>
        String(item.id) === editedId
          ? <Fragment key={item.id}> {editForm}  </Fragment>
          : <Item key={id} item={item} />
      )}
    </ol>
  </fieldset>
});



