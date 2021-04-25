import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import CreateUrlForm from "./Components/CreateUrlForm";
import ListPages from "./Components/ListPages";
import { useGet } from "../../hooks/useGet";
import WithAds from "../../Components/withAds";

const useStyles = makeStyles((theme) => ({
  mt2: {
    marginTop: theme.spacing(2),
  },
  mt4: {
    marginTop: theme.spacing(4),
  },
}));

const Home = () => {
  const classes = useStyles(); // classes.mt2
  const [pages, setPages] = useState([]);

  const [urls, fetching] = useGet("urls");
  // peticion al backend para traer las urls existentes :D

  const addPage = (page) => {
    setPages([...pages, page]);
  };

  useEffect(() => {
    setPages(urls);
  }, [urls]);
  return (
    <>
      <Grid container justify="center">
        <Grid item className={classes.mt2} xs={5}>
          <CreateUrlForm addPage={addPage} />
        </Grid>
      </Grid>
      <Grid container justify="center" className={classes.mt4}>
        <Grid item>
          <ListPages pages={pages} />
        </Grid>
      </Grid>
    </>
  );
};

export default WithAds(Home);
