const GET_USER_ENDPOINT =
"http://localhost:8085/iob/users/login/2022b.yarden.dahan/admin@google.com";
const GET_INSTANCE_ENDPOINT =
  "http://localhost:8085/iob/instances/search/byName/Yossi?userDomain=2022b.yarden.dahan&userEmail=manager@google.com";
  export const fetchUser = async () => {
    const data = await fetch(GET_USER_ENDPOINT, {
      method: "GET",
      mode: "cors",
      headers: {
        // "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
      },
      
    }).then((rawData) => rawData.json());
    return data;
  };
  export const fetchInstance = async () => {
    
    const response = await fetch(GET_INSTANCE_ENDPOINT, {
      method: "GET",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Accept": "application/json",
      }
      ,

    }).then(response => response.json())
    .catch(error => console.log('Authorization failed: ' + error.message));
    return response
  };