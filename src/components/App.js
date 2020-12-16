import { Grid, makeStyles, Paper } from "@material-ui/core";
import "../styles/App.css";
import Add from "./layouts/Add";
import Todos from "./layouts/Todos";

const useStyles = makeStyles((theme) => {
  return {
    paper: { padding: 10 },
  };
});

function App() {
  const classes = useStyles();

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={12} md={8}>
        <Paper className={classes.paper}>
          <Add />

          <Todos />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
