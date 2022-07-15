import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

import { TextField } from '@mui/material';
import { useState } from "react";

interface IForm {
   
    setNombre: (nombre: string) => void
  }
export default function Form( {setNombre}: IForm) {

const [text, setText] = useState<string>("")

  return (
    <Card
      style={{ display: "flex", flexDirection: "column" }}
      sx={{ minWidth: 275 }}
    >
      <CardContent style={{ display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={text}
          onInputCapture={(e: any) => {
            setText(e.target.value);
          }}
        />
      </CardContent>
      <CardActions style={{ display: "flex", justifyContent: "center" }}>
        <Button
          size="small"
          variant="contained"
          color="error"
          onClick={() => {
            setNombre("");
          }}
        >
          Log out
        </Button>
        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={() => {
            setNombre(text);
          }}
        >
          Log in
        </Button>
      </CardActions>
    </Card>
  );
}
