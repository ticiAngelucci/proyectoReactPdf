import Button from "@mui/material/Button";
import React from "react";
import Checkbox from "./Checkbox";
export default function EmailList(props) {
  const { list, setList } = props;
  /* Con onChangeStatus estamos editando el contenido del prop list (para eliminar algun email de la lista)  */
  const onChangeStatus = (e) => {
    const { name, checked } = e.target;
    const updateList = list.map((item) => ({
      ...item,
      done: item.id === name ? checked : item.done,
    }));
    setList(updateList);
  };
  /* Mediante onClickRemoveItem estamos eliminando los registros seleccionados*/
  const onClickRemoveItem = (e) => {
    const updateList = list.filter((item) => !item.done);
    setList(updateList);
  };
  /* En listMapeo estamos creando la lista con su componente para que sea dinamica,depende de cuantos registros tenga list*/
  const listMapeo = list.map((item) => (
    <div class="checkbox">
      <Checkbox key={item.id} data={item} onChange={onChangeStatus} />
      <hr></hr>
    </div>
  ));
  return (
    <div>
      <h2 class="firmantesText">Firmantes a notificar</h2>
      <p class="firmantesText">
        Los siguientes contactos serán notificados para firmar el presente
        documento.
      </p>
      {list.length ? listMapeo : "No email"}
      {list.length ? (
        <Button onClick={onClickRemoveItem} variant="outlined" color="error">
          Eliminar
        </Button>
      ) : null}
    </div>
  );
}
