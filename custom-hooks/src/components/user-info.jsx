// import { useCurrentUser } from "./current-user.hook";
// import { useUser } from "./user.hook";
// import { useResource } from "./resource.hook";

// useCallback is a React Hook that caches a function definition between re-renders. It is primarily a 
// performance optimization tool used to prevent unnecessary re-renders of child components that rely 
// on referential equality.

import { useCallback } from "react";
import { useDataSource } from "./data-source.hook";
import axios from "axios";

const fetchFromServer = resourceUrl => async () => {
  const response = await axios.get(resourceUrl);
  return response.data;
};

const getFromLocalStorage = key => () => {
  return localStorage.getItem(key);
};

export const UserInfo = ({ userId }) => {
  console.log('Im Rendering');
  const fetchUser = useCallback(fetchFromServer(`/users/${userId}`), [userId]);
  // const user = useResource(`users/${userId}`);
  const user = useDataSource(fetchUser);
  const message = useDataSource(getFromLocalStorage('msg'));

  const { name, age, country, books } = user || {};
  
  return user ? (
    <>
      <h2>{name}</h2>
      <p>Age: {age} years</p>
      <p>Country: {country}</p>
      <h2>Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book}> {book} </li>
        ))}
      </ul>
    </>
  ) : (
    <h1>Loading...</h1>
  );
};
