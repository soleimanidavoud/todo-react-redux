import {
  Chip,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { selectTodos, deleteTodo } from "../data/DataSlice";

const useStyles = makeStyles((theme) => {
  return {
    paper: { padding: 10 },
    idTypo: { fontWeight: 800, fontSize: 20 },
    textTypo: { fontWeight: 300, fontSize: 30, marginTop: 10 },
    conditionGrid: { margin: 10 },
    conditionTitleTypo: { fontSize: 20, fontWeight: 300 },
    conditionTypo: { fontSize: 20, fontWeight: 800, marginLeft: 10 },
    expand: { flexGrow: 1 },
  };
});

export default function Todos() {
  const classes = useStyles();
  const [condition, setCondition] = useState("Nothing to show!");

  const dispatch = useDispatch();
  const todos = useSelector(selectTodos, shallowEqual);

  useEffect(() => {
    getCondition();
  }, [todos]);

  const getCondition = (_) => {
    if (todos.length === 0) setCondition("Nothing to show!");

    if (todos.length > 0 && todos.length <= 2)
      setCondition("there is some todos here!");

    if (todos.length >= 3 && todos.length < 10)
      setCondition("there is more than three todos here!");

    if (todos.length >= 10)
      setCondition("there is a large amount of todos here!");
  };

  const handleDeleteTodo = (todoId) => {
    dispatch(deleteTodo(todoId));
  };

  return (
    <Grid container spacing={2}>
      <Grid container className={classes.conditionGrid}>
        <Typography className={classes.conditionTitleTypo}>
          Todos condition:
        </Typography>
        <Typography className={classes.conditionTypo}>{condition}</Typography>
      </Grid>
      {todos.length ? (
        todos.map((todo, index) => (
          <Grid item xs={6} key={index}>
            <Paper variant="outlined" className={classes.paper}>
              <Grid container>
                <Typography className={classes.idTypo}>{todo.id}</Typography>
                <div className={classes.expand} />
                <IconButton onClick={() => handleDeleteTodo(todo.id)}>
                  <Delete />
                </IconButton>
              </Grid>
              <Typography className={classes.textTypo}>{todo.text}</Typography>
            </Paper>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Grid container justify="center">
            <Chip label="There is no todo to show!" variant="outlined" />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
