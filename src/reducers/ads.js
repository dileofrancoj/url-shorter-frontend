import { types } from "../types";

const initialState = {
  visible: false,
  info: null, // {title : "titulo de la publicidad", description : "descripcion"}
};

export const adsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ADD:
      // lo que retorno es lo que se propaga al store
      return {
        visible: action.payload.visible,
        info: action.payload.info || null,
      };

    default:
      return state;
  }
};
