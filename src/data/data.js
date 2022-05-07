const POST_USER_ENDPOINT = "http://localhost:8085/iob/users?";
const POST_INSTANCE_USER_ENDPOINT =
  "http://localhost:8085/iob/instances";
const GET_USER_LOGIN__ENDPOINT = "http://localhost:8085/iob/users/login/2022b.yarden.dahan/";
const GET_INSTANCE_BY_NAME_ENDPOINT ="http://localhost:8085/iob/instances/search/byName/";
const INSTANCE_PERMISSION = "userDomain=2022b.yarden.dahan&userEmail=manager@google.com";
const GET_INSTANCE_ENDPOINT = 
  "http://localhost:8085/iob/instances/search/byName/Yossi?userDomain=2022b.yarden.dahan&userEmail=manager@google.com";


export const fetchInstance = async () => {
  const response = await fetch(GET_INSTANCE_ENDPOINT, {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log("Authorization failed: " + error.message));
  return response;
};
export const fetchInstanceByName = async (name) => {
  let url = GET_INSTANCE_BY_NAME_ENDPOINT + name +'?'+ INSTANCE_PERMISSION;
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .catch((error) => console.log("Authorization failed: " + error.message));
  return response;
};
export const fetchUser = async (email) => { 
  
  let urlLogin = GET_USER_LOGIN__ENDPOINT + email;
  const data = await fetch(urlLogin, {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
    },
  })
  .then((rawData) => rawData.json())
  .catch((error) => console.log("Login failed: " + error.message));
  return data;
};
export const postUser = async (user) => {
  fetch(POST_USER_ENDPOINT, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(user),
  });
};
export const postInstance = async (user, type) => {
  fetch(POST_INSTANCE_USER_ENDPOINT, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      type: type,
      name: user.email,
      active: true,
      createdTimestamp: null,
      createdBy: {
        userId: { domain: "2022b.yarden.dahan", email: "manager@google.com" },
      },
      location: { lat: user.lat, lng: user.lng },
      instanceAttributes: { firstName: user.firstName, lastName:  user.lastName , dob:user.dob,gender:user.gender},
    }),
  });
};
