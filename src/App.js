import { CSVLink } from "react-csv";
import JSONdata from "./data.json";

const App = () => {
  const handleDownload = () => {
    // this doesn't work
    var link = window.document.createElement("a");
    link.setAttribute(
      "href",
      "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(JSONdata.data)
    );
    link.setAttribute("download", "upload_data.csv");
    link.click();
    // window.open(encodeURI(JSONdata.data));
  };

  return (
    <div className="App">
      <h1>CSV Download Test</h1>
      <CSVLink data={JSONdata.data} filename={"Cluster CSV FILE"}>
        Download
      </CSVLink>
      <br />
      <button onClick={handleDownload}>CLICK FOR NON PACKAGE DOWNLOAD</button>
    </div>
  );
};

export default App;
