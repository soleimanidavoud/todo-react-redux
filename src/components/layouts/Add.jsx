import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../data/DataSlice";

const useStyles = makeStyles((theme) => {
  return {
    addButton: { marginLeft: 10 },
  };
});

export default function Add() {
  const classes = useStyles();

  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const textRef = useRef();

  const validate = (_) => {
    let isValid = true;
    let newErrors = [];

    if (textRef.current.value === "") {
      newErrors["todoText"] = "this field cannot be empty!";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleAddTodo = (_) => {
    if (validate()) {
      dispatch(addTodo({ text: textRef.current.value }));
    }
  };

  return (
    <Grid container wrap="nowrap" alignItems="center">
      <TextField
        name="todoText"
        variant="outlined"
        margin="dense"
        label="To-Do text"
        rows={4}
        fullWidth
        inputRef={textRef}
        error={errors["todoText"] !== undefined}
        helperText={errors["todoText"]}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTodo}
        className={classes.addButton}
      >
        ADD
      </Button>
    </Grid>
  );
}
