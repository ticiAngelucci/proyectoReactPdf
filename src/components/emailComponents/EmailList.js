import React from "react";
import Checkbox from "./Checkbox";
export default function EmailList(props) {
  const { list, setList } = props;

  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };
  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };
  const chk = list.map((item) => (
    <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
  ));
  return (
    <div>
      {list.length ? chk : "No email"}
      {list.length ? (
        <p>
          <button onClick={onClickRemoveItem}>Delete all done</button>
        </p>
      ) : null}
    </div>
  );
}
