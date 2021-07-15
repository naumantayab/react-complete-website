import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
// const User = ({match}) =>{
//     return <h1>user {match.params.fname} page</h1>
// };

const User = () => {
  const { fname, lname } = useParams();
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <div className="page">
        <h1>
          User {fname} {lname} Page
        </h1>
        <p>My current location is {location.pathname}</p>
        {location.pathname === "/user/nauman/tayyab" ? (
          <button onClick={() => history.push("/")}> Homepage </button>
        ) : null}
      </div>
    </>
  );
};

export default User;
