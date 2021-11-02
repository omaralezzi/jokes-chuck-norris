import React, { useContext, useEffect } from 'react';

//Import the context
import MyContext from '../context/MyContext';

const DropDown = () => {
  //Get all the needed states and functions from the context
  const context = useContext(MyContext);
  const { select, selectDispatcher, URI, categories, categoriesDispatcher } =
    context;

  //Change the URI to fetch all the categories from the API
  const categoriesURI = `${URI}categories`;

  //Deconstruct the properties from the categories state object
  const { results, loading, error } = categories;

  //Use a useEffect to fetch our categories from the API
  useEffect(() => {
    fetch(categoriesURI)
      .then((response) => response.json())
      .then((results) =>
        categoriesDispatcher({
          type: 'GET_CATEGORIES',
          payload: { ...categories, results: results, loading: false },
        })
      )

      .catch((error) => {
        categoriesDispatcher({
          type: 'ERROR',
          payload: { ...categories, error },
        });
      });
  }, [categories, categoriesURI, categoriesDispatcher]);

  //If the data from the fetch is still downloading show loading...
  if (loading) return <p>Loading...</p>;

  //If there is a network error show the error
  if (error) return <p>{error}</p>;

  //Create a dropdown list dynamically from the categories list fetched from the API
  //When selected update the select state
  return (
    <select
      defaultValue={select}
      onChange={(e) =>
        selectDispatcher({ type: 'CHANGE', payload: e.target.value })
      }>
      <option value='default'>Please select a category</option>
      {results.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default DropDown;
