import React, { useReducer } from 'react';

//Import all of our reducer functions
import selectReducer from '../reducers/selectReducer';
import categoriesReducer from '../reducers/categoriesReducer';
import jokeReducer from '../reducers/joekReducer';

//Import our context
import MyContext from './MyContext';

const MyProvider = (props) => {
  //Setup our initial URI
  const URI = 'https://api.chucknorris.io/jokes/';

  //Create our select useReducer for use within our DropDown component
  const [select, selectDispatcher] = useReducer(selectReducer, null);

  //Create the categories useReducer to hold the categories list from the API
  const [categories, categoriesDispatcher] = useReducer(categoriesReducer, {
    results: [],
    loading: true,
    error: '',
  });

  //Create the joke useReducer to hold the joke from the API
  const [joke, jokeDispatcher] = useReducer(jokeReducer, {
    results: {},
    loading: true,
    error: '',
  });

  //Change the URI to fetch the category selected and fetch the joke
  const handleJokeButton = () => {
    const URIJoke = `${URI}random?category=${select}`;

    fetch(URIJoke)
      .then((response) => response.json())
      .then((results) =>
        jokeDispatcher({
          type: 'GET_JOKE',
          payload: { ...joke, results: results, loading: false },
        })
      )

      .catch((error) => {
        jokeDispatcher({ type: 'ERROR', payload: { ...joke, error } });
      });
  };

  return (
    //Wrap all the children in our provider and send all the relevant values
    <MyContext.Provider
      value={{
        select,
        selectDispatcher,
        URI,
        categories,
        categoriesDispatcher,
        joke,
        handleJokeButton,
      }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
