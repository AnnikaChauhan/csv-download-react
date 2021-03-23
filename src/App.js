import { CSVLink } from "react-csv";

const App = () => {
  const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" },
  ];

  // const data = [
  //   { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
  //   { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
  //   { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  // ];

  const data = "client_id↵883982↵1675849↵2216671↵2952070↵6758438";

  return (
    <div className="App">
      <h1>CSV Download Test</h1>
      <CSVLink data={data} filename={"Cluster CSV FILE"}>
        Download
      </CSVLink>
    </div>
  );
};

export default App;
