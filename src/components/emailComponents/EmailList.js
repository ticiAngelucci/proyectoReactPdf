import Button from "@mui/material/Button";
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
    <div style={{ width: "60%" }}>
      <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
      <hr></hr>
    </div>
  ));
  return (
    <div>
      <h2 style={{ textAlign: "initial" }}>Firmantes a notificar</h2>
      <p style={{ textAlign: "initial" }}>
        Los siguientes contactos serán notificados para firmar el presente
        documento.
      </p>
      {list.length ? chk : "No email"}
      {list.length ? (
        <Button onClick={onClickRemoveItem} variant="outlined" color="error">
          Eliminar
        </Button>
      ) : null}
    </div>
  );
}
