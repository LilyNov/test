import { useQuery } from "react-query";
import * as Constants from "../../constants";
console.log(Constants.GRAPHQL_API);
console.log(Constants.GET_CLIENT_QUERY);

const fetchGraphQl = async () => {
  await fetch("https://test-task.expane.pro/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
            {
    getClients {
  id
  firstName
  lastName
  phone
  avatarUrl
}
}
            `,
    }),
  });
};

export default function Table() {
  const { data, status } = useQuery("contacts", fetchGraphQl);

  console.log(data);

  return (
    <div>
      {status === "error" && <p>Not found anything</p>}

      {status === "loading" && <p>...Loading</p>}

      {status === "success" && (
        <>
          <ul>
            {/* {data.getClients.map(
              ({ id, firstName, lastName, phone, avatarUrl }) => (
                <li key={id}></li>
              )
            )} */}
          </ul>
        </>
      )}
    </div>
  );
}
