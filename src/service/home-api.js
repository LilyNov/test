import * as Constants from "../constants";

export const fetchClients = async () => {
  return await fetch(Constants.GRAPHQL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: Constants.GET_CLIENT_QUERY,
    }),
  }).then((res) => res.json());
};
