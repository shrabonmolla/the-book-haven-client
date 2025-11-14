import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { useSearchParams } from "react-router";
import Table from "../Components/Table";

export default function MyBooks() {
  const { user } = useContext(Authcontext);
  console.log(user.accessToken);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/myBooks/?email=${user.email}`, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDisplayData(data));
  }, [user]);
  return (
    <div>
      <h1>{displayData.length}</h1>
      <div>
        {displayData && displayData.map((data) => <Table book={data}></Table>)}
      </div>
    </div>
  );
}
