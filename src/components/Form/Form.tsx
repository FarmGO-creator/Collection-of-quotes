import React, {useState} from 'react';
import {Box, Button, CircularProgress, TextField} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import {QuoteMutation} from "../../types";
import EditIcon from "@mui/icons-material/Edit";
import './Form.css'

interface Props {
  onSubmit: (quote: QuoteMutation) => void;
  quote?: QuoteMutation;
  loader?: boolean;
}

const Form:React.FC<Props> = ({onSubmit, quote, loader}) => {

  const [value, setValue] = useState<QuoteMutation>(quote || {
    category: '',
    author: '',
    text: '',
  })

  const onChange = (event:React.ChangeEvent<HTMLInputElement & HTMLSelectElement>) => {
    const {name, value} = event.target;
    setValue(prev => ({...prev, [name]: value}))
  }

  const onFromSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...value
    })

    setValue({
      category: '',
      author: '',
      text: '',
    })
  }

  return (
    <Box component='form' onSubmit={onFromSubmit} sx={{width: '500px'}}>

      <select className='target' name="category" value={value.category} onChange={onChange} required>
        <option value="" disabled>Выберите</option>
        <option value='star-wars'>Star Wars</option>
        <option value='famous-people'>Famous people</option>
        <option value='saying'>Saying</option>
        <option value='humour'>Humour</option>
        <option value='motivational'>Motivational</option>
      </select>

      <TextField
        sx={{mb: 2}}
        fullWidth
        id="outlined-basic"
        label="Название цитаты"
        variant="outlined"
        name='author'
        value={value.author}
        onChange={onChange}
        required
      />

      <TextField
        sx={{mb: 2}}
        fullWidth
        id="standard-multiline-flexible"
        label="Текст цитаты"
        multiline
        rows={8}
        variant="outlined"
        name='text'
        value={value.text}
        onChange={onChange}
        required
      />

      <Button type='submit' sx={{width: 150}} variant="contained" endIcon={ quote ? <EditIcon /> : <AddCircleIcon />}>
        {
          !loader ? (quote ? 'изменить' : 'создать') : <CircularProgress color="secondary" />
        }
      </Button>
    </Box>
  );
};

export default Form;