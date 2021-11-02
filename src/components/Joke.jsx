import React, { useContext } from 'react';

import MyContext from '../context/MyContext';

const Joke = () => {
  //Get all the needed states and functions from the context and deconstruct
  const context = useContext(MyContext);
  const { joke } = context;
  const { results, loading, error } = joke;

  //Show select message
  if (loading)
    return (
      <div className='joke'>
        <p>Select a category and then click on the button...</p>
      </div>
    );

  //Show network errors
  if (error) return <p>{error}</p>;

  return (
    <div className='joke'>
      <img src={results.icon_url} alt='icon' />
      <p>{results.value}</p>
    </div>
  );
};

export default Joke;
