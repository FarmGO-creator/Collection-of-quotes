import React from 'react';
import {Button, ButtonGroup, Card, CardActions, CardContent, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {NavLink} from "react-router-dom";
import {Quote} from "../types";

interface Props {
  item: Quote;
  removeQuote: (id: string) => void;
}

const QuoteItem:React.FC<Props> = ({item, removeQuote}) => {
  return (
    <Card elevation={6} sx={{ width: '100%', my: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Категория: {item.category}
        </Typography>

        <Typography variant="h5" component="div">
          Автор: {item.author}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Цитата: {item.text}
        </Typography>


        <CardActions>
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button onClick={() => removeQuote(item.id)} variant="outlined" startIcon={<DeleteIcon />}>Удалить</Button>
            <Button variant="outlined" startIcon={<EditIcon />}><NavLink to={'/EditQuote/' + item.id}>Изменить</NavLink></Button>
          </ButtonGroup>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default QuoteItem;