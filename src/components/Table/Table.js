import { useQuery } from "react-query";
import { fetchClients } from "../../service/home-api";

export default function Table() {
  const { data, status } = useQuery("clients", fetchClients);
  const defaultAvatar =
    "https://dummyimage.com/480x600/2a2a2a/ffffff&text=foto";

  return (
    <div>
      {status === "error" && <p>Not found anything</p>}

      {status === "loading" && <p>...Loading</p>}

      {status === "success" && (
        <table>
          <thead>
            <tr>
              <th>firstName</th>
              <th>lastName</th>
              <th>phone</th>
              <th>avatar</th>
            </tr>
          </thead>

          <tbody>
            {data?.data.getClients.map(
              ({ id, firstName, lastName, phone, avatarUrl }) => (
                <tr key={id + phone}>
                  <td>
                    <img
                      style={{ heigth: 100, width: 100 }}
                      src={avatarUrl ? avatarUrl : defaultAvatar}
                      alt={phone}
                    />
                  </td>
                  <td>{firstName}</td>
                  <td>{lastName}</td>
                  <td>{phone}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}
