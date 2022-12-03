import React, {useCallback, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axiosApi from "../../axiosApi";
import {Quote, QuoteList} from "../../types";
import {Alert, Box, LinearProgress, Typography} from "@mui/material";
import {AxiosResponse} from "axios";
import QuoteItem from "../../components/QuoteItem";

const Quotes = () => {
  const {name} = useParams();
  const [quote, setQuote] = useState<Quote[]>([]);
  const [loader, setLoader] = useState(false);

  const updateQuotes = async (newQuote:AxiosResponse<QuoteList>) => {
    const newQuotes:Quote[] = newQuote.data ? Object.keys(newQuote.data).map(key => {
      const quotes:Quote = newQuote.data[key];
      quotes.id = key;

      return quotes;
    }) : []
    setQuote(newQuotes);
  }


  const resQuotes = useCallback(async () => {

    try {
      setLoader(true)
      const newQuote = name ? (
        await axiosApi.get<QuoteList>(`/quotes.json?orderBy="category"&equalTo="${name}"`)
      ) : await axiosApi.get<QuoteList>("/quotes.json")

      await updateQuotes(newQuote);

    } finally {
      setLoader(false)
    }


  }, [name])

  useEffect(() => {
    resQuotes().catch(console.error)
  }, [resQuotes])

  const removeQuote = async (id: string) => {
    try {
      await axiosApi.delete('/quotes/' + id + '.json');
      const newQuote = await axiosApi.get<QuoteList>(`/quotes.json?orderBy="category"&equalTo="${name}"`);

      await updateQuotes(newQuote);

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
        {name || 'Все цитаты'}
      </Typography>

      <Box sx={{overflowY: 'scroll', height: '80vh'}}>
        {!loader ? (
          quote.length !== 0 ? quote.map(item => (
            <QuoteItem key={item.id} removeQuote={removeQuote} item={item}/>
          )) : <Alert severity="info">В данный момент цитат нет</Alert>
        ) : <LinearProgress sx={{p: '5px'}} />
        }
      </Box>
    </>
  );
};

export default Quotes;