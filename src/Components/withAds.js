import { useEffect, useState } from "react";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { types } from "../types";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const WithAds = (Component) => {
  const WithAdsComponent = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const classes = useStyles();

    useEffect(() => {
      setVisible(state.ads.visible);
      setTimeout(() => {
        setVisible(false);
        dispatch({
          type: types.SET_ADD,
          payload: { visible: false, info: null },
        });
        // actualizar mi store con ads: visible = false
      }, 4000);
    }, [state.ads.visible]);
    return (
      <>
        <Component />
        <Modal
          className={classes.modal}
          open={visible}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
        >
          <Fade in={visible}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">Transition modal</h2>
              <p id="transition-modal-description">
                react-transition-group animates me.
              </p>
            </div>
          </Fade>
        </Modal>
      </>
    );
  };
  return WithAdsComponent;
};

export default WithAds;
