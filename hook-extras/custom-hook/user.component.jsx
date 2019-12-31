// import React from "react";
import useFetch from "./effects/use-fetch.effect";

const User = ({ userId }) => {
  const user = useFetch(
    `https://jsonplaceholder.typicode.com.users?id=${userID}`
  );

  return user;
};
export default User;