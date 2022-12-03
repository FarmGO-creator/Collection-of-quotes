import React, {useCallback, useEffect, useState} from 'react';
import {Box, Typography} from "@mui/material";
import Form from "../../components/Form/Form";
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {QuoteMutation} from "../../types";

const EditQuote = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const [quote, setQuote] = useState<QuoteMutation | null>(null)
  const [loader, setLoader] = useState(false);

  const resQuotes = useCallback(async () => {
    const newQuote = await axiosApi.get<QuoteMutation>("/quotes/" + id + '.json');
    setQuote(newQuote.data);
  }, [id])

  useEffect(() => {
    resQuotes().catch(console.error)
  }, [resQuotes])


  const updateQuote = async (quote: QuoteMutation) => {
    try {
      setLoader(true)
      await axiosApi.put('/quotes/' + id + '.json', quote);
      navigate('/')
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
        Редактировать цитату
      </Typography>

      <Box component='div' sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90%'}}>
        {quote && <Form loader={loader} onSubmit={updateQuote} quote={quote}/>}
      </Box>
    </>
  );
};

export default EditQuote;