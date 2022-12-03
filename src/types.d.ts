export interface Quote {
  id: string;
  author: string,
  category: string,
  text: string,
}

export interface QuoteMutation {
  author: string,
  category: string,
  text: string,
}

export interface QuoteList {
  [id: string]: Quote;
}