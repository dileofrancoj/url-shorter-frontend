// Permite al usuario dar de alta una url
// Cuando el back le responde con la URL recortada el componente
// Dispara una publicidad
import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { types } from "../../../types";

const CreateUrlForm = React.memo(({ addPage }) => {
  const dispatch = useDispatch();
  const handleCreateUrl = (e) => {
    e.preventDefault();
    const [{ value: valueUrl }] = e.target.elements; // elements
    addPage({ id: 200, shortUrl: valueUrl, fullUrl: "fullUrl 200" });
    dispatch({
      type: types.SET_ADD,
      payload: {
        visible: true,
        info: { title: "Una publicidad", description: "la descripcion" },
      },
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleCreateUrl}>
      <TextField
        id="add-url"
        label="Ingresa la URL a recortar"
        name="url"
        fullWidth
      />
    </form>
  );
});

CreateUrlForm.propTypes = {
  addPage: PropTypes.func.isRequired,
};

export default CreateUrlForm;
