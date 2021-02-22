import { useQuery } from "react-query";

export default function Table() {
  const {} = useQuery("contacts", () =>
    fetch(`https://test-task.expane.pro/api/graphql`).then((res) => res.json())
  );

  return (
    <table class="center">
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>80</td>
      </tr>
    </table>
  );
}
