import { Item } from './Item';
import { memo, Fragment } from 'react';
import classes from './List.module.css';
import type { AppProps } from "next/app";

type Object = {
  list, editedId, editForm
};

export const List = memo(function ({ list, editedId, editForm }: Object) {
  console.debug('List render');
  return <fieldset className={classes.list}>
    <legend>To do List</legend>
    <ol>
      {list.map((item, id) =>
        String(item.id) === editedId
          ? <Fragment key={item.id}> {editForm}  </Fragment>
          : <Item key={id} item={item} />
      )}
    </ol>
  </fieldset>
});



