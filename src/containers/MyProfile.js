import React from 'react';
// import { extendedUser, user } from './Login';
// const user = {};
// const extendedUser = {};
// export const setUser = (data) =>{
//   user = data;
// }
// export const setExtendedUser = (data) =>{
//   extendedUser = data;
// }
const MyProfile =() => {
  // console.error(user);
  // console.error(extendedUser);
  return(

    <div>MyProfile
      <h1 style ={{paddingTop:"150px"}}>Hello my profile page</h1>
      {/* <h2>user: {JSON.stringify(user)}</h2>
      <p>extendedUser: {JSON.stringify(extendedUser)}</p> */}
    </div>
  )
}

export { MyProfile};