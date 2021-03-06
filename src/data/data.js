import { Event } from "jquery";

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
const INSTANCE_DOMAIN = "userDomain=2022b.yarden.dahan";
//ACTIVITY URL
const ACTIVITY_ENDPOINT = "http://localhost:8085/iob/activities";

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
export const putUserInstanceInPartner = async (user, instance, email) => {
  const putUserMySelf = async () => {
    let id = instance["instanceId"]["id"];
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
          type: instance["type"],
          name: instance["name"],
          active: instance["active"],
          location: {
            lat: instance["location"]["lat"],
            lng: instance["location"]["lng"],
          },
          instanceAttributes: {
            firstName: instance["instanceAttributes"]["firstName"],
            lastName: instance["instanceAttributes"]["lastName"],
            dob: instance["instanceAttributes"]["dob"],
            gender: instance["instanceAttributes"]["gender"],
            counterEvents: instance["instanceAttributes"]["counterEvents"],
            suggestedEvents: instance["instanceAttributes"]["suggestedEvents"],
            attendedEvents: instance["instanceAttributes"]["attendedEvents"],
          },
        }),
      }
    );
  };

  putUser(user, "Manager").then(() =>
    putUserMySelf()
      // .then(() => setSpinnerState("SUCCESS"))
      .then(async () => putUser(await fetchUser(user.email), "Player"))
  );
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
  let email = user.user.userId["email"];
  let userInstance = await fetchInstanceByName(email);
  var dis = 1210.0;
  console.log(email);
  const data = await fetch(ACTIVITY_ENDPOINT, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      type: "fetchSuggestedEvents",
      instance: {
        instanceId: { domain: DOMAIN, id: userInstance[0]["instanceId"]["id"] },
      },
      createdTimestamp: null,
      invokedBy: {
        userId: { domain: DOMAIN, email: email },
      },
      activityAttributes: {
        instanceType: "eventUser",
        distance: parseFloat(dis),
        page: 0,
        size: 15,
      },
    }),
  })
    .then((response) => response.json())
    .then((jsonData) => jsonData);
  return data;
};
export const getInstanceById = async (email, id) => {
  let URL =
    INSTANCE_ENDPOINT +
    "/" +
    DOMAIN +
    "/" +
    id +
    "?" +
    INSTANCE_DOMAIN +
    "&userEmail=" +
    email;
  let instance = await fetch(URL, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((rawData) => rawData.json())
    .catch((err) => console.log(err));
  return instance;
};

export const fetchUsersEvents = async (user) => {
  let email = user.user.userId["email"];
  let userInstance = await fetchInstanceByName(email);
  let eventsIdList = userInstance[0].instanceAttributes.attendedEvents;
  let myEvents = [];
  if (eventsIdList) {
    for (let i = 0; i < eventsIdList.length; i++) {
      const eventId = eventsIdList[i];
      let EVENT_ENDPOINT =
        INSTANCE_ENDPOINT +
        "/" +
        DOMAIN +
        "/" +
        eventId +
        "?" +
        INSTANCE_DOMAIN +
        "&userEmail=" +
        email;
      const firstData = await fetch(EVENT_ENDPOINT, {
        method: "GET",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const jsonD = await firstData.json();
      // console.log(jsonD);
      myEvents.push(jsonD);
    }
    return myEvents;
  }
};
export const putEventUserInstance = async (instance, email, user) => {
  /*_id
:
"2022b.yarden.dahan_81da3d90-d2e9-46ec-8ece-979f49cdb769"
TYPE
:
"eventUser" //this
NAME
:
"miami baby" //this
ACTIVE
:
true
CREATED_TIME_STAMP
:
2022-05-23T19:58:51.475+00:00
CREATED_BY
:
Object
userId
:
Object
domain
:
"2022b.yarden.dahan"
email
:
"dd@dd.com"
LOCATION
:
Object
lat
:
31.046051
lng
:
34.851612
INSTANCE_ATTRIBUTES
:
Object
title
:
"miami baby"
genre
:
"Flight"
origin
:
Object
lat
:
31.046051
lng
:
34.851612
address
:
"Israel"
dest
:
Object
lat
:
25.790654
lng
:
-80.1300455
address
:
"Miami Beach, FL, USA"
futureDate
:
"2022-05-05"
attendedCounter
:
0
assignedUsers
:
Array
_class
:
"iob.data.InstanceEntity"*/
  const putEventUser = async () => {
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
          type: instance["type"],
          name: instance["name"],
          active: instance["active"],
          location: {
            lat: instance["location"]["lat"],
            lng: instance["location"]["lng"],
          },
          instanceAttributes: {
            title: instance["instanceAttributes"]["title"],
            genre: instance["instanceAttributes"]["genre"],
            origin: {
              lat: instance["instanceAttributes"]["origin"]["lat"],
              lng: instance["instanceAttributes"]["origin"]["lng"],
              address: instance["instanceAttributes"]["origin"]["address"],
            },
            dest: {
              lat: instance["instanceAttributes"]["dest"]["lat"],
              lng: instance["instanceAttributes"]["dest"]["lng"],
              address: instance["instanceAttributes"]["dest"]["address"],
            },
            futureDate: instance["instanceAttributes"]["futureDate"],
            attendedCounter: instance["instanceAttributes"]["attendedCounter"],
            assignedUsers: instance["instanceAttributes"]["assignedUsers"],
          },
        }),
      }
    );
  };
  let id = instance["instanceId"]["id"];
  let managerUser = { ...user, role: "Manager" };
  putUser(user, "Manager").then(() =>
    putEventUser()
      // .then(() => setSpinnerState("SUCCESS"))
      .then(async () => await putUser(user, "Player"))
  );
};
