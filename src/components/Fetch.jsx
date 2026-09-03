import { useState, useEffect } from "react";

function Fetch() {
  const [userData, setuserData] = useState();

  useEffect(() => {
    
    const fetchapi = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";

      const response = await fetch(url);
      const data = await response.json();
      setuserData(data);
    };

    fetchapi();
  }, []);

  return (
    <>
      {userData?.map((user) => (
        <div>
        {/* <Profile name= {user.name} /> */}
          <p>{user.username}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </>
  );
}

export default Fetch;
