import React, {useState} from 'react';
import {Box, Typography,} from "@mui/material";
import {QuoteMutation} from "../../types";
import axiosApi from "../../axiosApi";
import Form from "../../components/Form/Form";

const CreateQuote = () => {
  const [loader, setLoader] = useState(false);

  const addQuote = async (quote: QuoteMutation | null) => {
    try {
      setLoader(true)
      await axiosApi.post('/quotes.json', quote);
    } finally {
      setLoader(false)
    }
  }

  return (
    <>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        sx={{pt: 1}}
      >
        Создать цитату
      </Typography>

      <Box component='div' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90%'}}>
        <Form loader={loader} onSubmit={addQuote}/>
      </Box>
    </>
  );
};

export default CreateQuote;