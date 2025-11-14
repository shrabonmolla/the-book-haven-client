import React, { useContext, useEffect } from "react";
import { Authcontext } from "../Provider/AuthProvider";

export default function MyBooks() {
  const { user } = useContext(Authcontext);
  console.log(user.accessToken);

  useEffect(() => {
    fetch(`http://localhost:3000/myBooks/?email=${user.email}`, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log("my data", data));
  }, [user]);
  return <div>MyBooks</div>;
}
