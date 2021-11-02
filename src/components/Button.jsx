import React, { useContext } from 'react';

//Import the context
import MyContext from '../context/MyContext';

const Button = () => {
  //Get all the needed states and functions from the context
  const context = useContext(MyContext);
  const { select, handleJokeButton } = context;

  //Grab a new joke from the API everytime the button is clicked
  return <>{select && <button onClick={handleJokeButton}>Get joke</button>}</>;
};

export default Button;
