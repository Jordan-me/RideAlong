// USER URLS
const POST_USER_ENDPOINT = "http://localhost:8085/iob/users?";
const PUT_USER_ENDPOINT = "http://localhost:8085/iob/users/2022b.yarden.dahan/";
const GET_USER_LOGIN__ENDPOINT = "http://localhost:8085/iob/users/login/2022b.yarden.dahan/";


//INSTANCES URLS
const POST_INSTANCE_ENDPOINT = "http://localhost:8085/iob/instances";
const GET_INSTANCE_BY_NAME_ENDPOINT = "http://localhost:8085/iob/instances/search/byName/";

  
const INSTANCE_MANAGER_PERMISSION =
  "userDomain=2022b.yarden.dahan&userEmail=manager@google.com";
const INSTANCE_PERMISSION =
  "userDomain=2022b.yarden.dahan&userEmail=player@google.com";
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
  let url = GET_INSTANCE_BY_NAME_ENDPOINT + name + "?" + INSTANCE_PERMISSION;
  console.log(url);
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

export const putUser = async (user,role) => {
  await fetch(PUT_USER_ENDPOINT + user.userId.email, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: { domain: "2022b.yarden.dahan", email: user.userId.email },
      role:role,
      name: user.email,
      username:user.username,
	    avatar:user.avatar
    }),
  });
};
export const putInstance = async (instance) => {
  await fetch(PUT_USER_ENDPOINT , {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      
    }),
  });
};

export const postUserInstance = async (user, type) => {
  const d = await fetch(POST_INSTANCE_ENDPOINT, {
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
        userId: { domain: "2022b.yarden.dahan", email: user.email },
      },
      location: { lat: user.lat, lng: user.lng },
      instanceAttributes: {
        firstName: user.firstName,
        lastName: user.lastName,
        dob: user.dob,
        gender: user.gender,
        counterEvents: 0,
        suggestedEvents: [],
        attendedEvents: [],
      },
    }),
  });
  console.log(d);
};

export const postEventInstance = async(userEvent,user, type) =>{
  console.log(user.userId.email);
  let userInstance = await fetchInstanceByName(user.userId.email);
  console.log(userInstance[0]["instanceAttributes"]["counterEvents"]);
  // await putInstance(userInstance);
  const d = await fetch(POST_INSTANCE_ENDPOINT, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      type: type,
      name: userEvent.title,
      active: true,
      createdTimestamp: null,
      createdBy: {
        userId: { domain: "2022b.yarden.dahan", email: user.userId.email },
      },
      location: { lat: userEvent.dest.lat, lng: userEvent.dest.lng },
      instanceAttributes: {
        title: userEvent.title,
        genre: userEvent.genre,
        origin: userEvent.origin,
        dest: userEvent.dest,
        futureDate: userEvent.futureDate,
        attendedCounter:userEvent.attendedCounter,
        assignedUsers:userEvent.assignedUsers,
      },
    }),
  });
  console.log(d);
};
