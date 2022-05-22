const DOMAIN = "2022b.yarden.dahan";
// USER URLS
const POST_USER_ENDPOINT = "http://localhost:8085/iob/users?";
const PUT_USER_ENDPOINT = "http://localhost:8085/iob/users/2022b.yarden.dahan/";
const GET_USER_LOGIN__ENDPOINT =
  "http://localhost:8085/iob/users/login/2022b.yarden.dahan/";

//INSTANCES URLS
const INSTANCE_ENDPOINT = "http://localhost:8085/iob/instances";
const GET_INSTANCE_BY_NAME_ENDPOINT =
  "http://localhost:8085/iob/instances/search/byName/";
const GET_INSATNCES_BY_TYPE =
  "http://localhost:8085/iob/instances/search/byType/";

//ACTIVITY URL
const ACTIVITY_ENDPOINT = "http://localhost:8085/iob/activities";

const INSTANCE_DOMAIN = "userDomain=2022b.yarden.dahan";
//INSTANCES URLS
const INSTANCE_ENDPOINT = "http://localhost:8085/iob/instances";
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
    .then((response) => {
      console.log(response.json());
      return response.json();
    })
    .catch((error) => console.log("Authorization failed: " + error.message));
  return response;
};
export const fetchInstanceByType = async (email, type) => {
  let url =
    GET_INSATNCES_BY_TYPE +
    type +
    "?" +
    INSTANCE_DOMAIN +
    "&userEmail=" +
    email;
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response)
    // .then((d) => console.log(d))
    .catch((error) => console.log("Authorization failed: " + error.message));
  console.log(response);
  return response;
};
export const fetchInstanceByName = async (name) => {
  let url = GET_INSTANCE_BY_NAME_ENDPOINT + name + "?" + INSTANCE_PERMISSION;
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

export const putUser = async (user, role) => {
  await fetch(PUT_USER_ENDPOINT + user.userId.email, {
    method: "PUT",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: { domain: "2022b.yarden.dahan", email: user.userId.email },
      role: role,
      name: user.email,
      username: user.username,
      avatar: user.avatar,
    }),
  });
};
export const putUserInstance = async (instance, email) => {
  let id = instance[0]["instanceId"]["id"];
  await fetch(
    INSTANCE_ENDPOINT +
      "/" +
      DOMAIN +
      "/" +
      id +
      "?userDomain=" +
      DOMAIN +
      "&userEmail=" +
      email,
    {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        type: instance[0]["type"],
        name: instance[0]["name"],
        active: instance[0]["active"],
        location: {
          lat: instance[0]["location"]["lat"],
          lng: instance[0]["location"]["lng"],
        },
        instanceAttributes: {
          firstName: instance[0]["instanceAttributes"]["firstName"],
          lastName: instance[0]["instanceAttributes"]["lastName"],
          dob: instance[0]["instanceAttributes"]["dob"],
          gender: instance[0]["instanceAttributes"]["gender"],
          counterEvents: instance[0]["instanceAttributes"]["counterEvents"],
          suggestedEvents: instance[0]["instanceAttributes"]["suggestedEvents"],
          attendedEvents: instance[0]["instanceAttributes"]["attendedEvents"],
        },
      }),
    }
  );
};

export const postUserInstance = async (user, type) => {
  const d = await fetch(INSTANCE_ENDPOINT, {
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
};
export const postEventInstance = async (userEvent, user, type) => {
  const d = await fetch(INSTANCE_ENDPOINT, {
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
        userId: { domain: DOMAIN, email: user.userId.email },
      },
      location: { lat: userEvent.origin.lat, lng: userEvent.origin.lng },
      instanceAttributes: {
        title: userEvent.title,
        genre: userEvent.genre,
        origin: userEvent.origin,
        dest: userEvent.dest,
        futureDate: userEvent.futureDate,
        attendedCounter: userEvent.attendedCounter,
        assignedUsers: userEvent.assignedUsers,
      },
    }),
  }).then((response) => {
    return response.json();
  });

  let userInstance = await fetchInstanceByName(user.userId.email);
  let id = d.instanceId["id"];
  userInstance[0]["instanceAttributes"]["attendedEvents"][
    userInstance[0]["instanceAttributes"]["counterEvents"]
  ] = id;
  userInstance[0]["instanceAttributes"]["counterEvents"] += 1;
  await putUserInstance(userInstance, user.userId.email);
};
export const postFetchSuggestedEventsActivity = async (user) => {
  console.log(user);
  let email =  user.user.userId["email"]
  let userInstance = await fetchInstanceByName(email);
  console.error("198."+userInstance);

  const data = await fetch(ACTIVITY_ENDPOINT, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      type: "fetchSuggestedEvents",
      instance: {instanceId:{domain:DOMAIN,id:userInstance[0]["instanceId"]["email"]}},
      createdTimestamp: null,
      invokedBy: {
        userId: { domain: DOMAIN, email: email },
      },
      activityAttributes: {
        instanceType: "eventUser",
        distance: 20.0,
        page: 0,
        size: 15,
      },
    }),
  }).then((response)=> {return response.json();});
  console.log("195." + email);
  userInstance[0]["instanceAttributes"]["suggestedEvents"] = data;
  await putUser(user, "Manager");
  await putUserInstance(userInstance, email);
  await putUser(user, "Player");



  return data;
};
