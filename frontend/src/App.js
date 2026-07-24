import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
const [report, setReport] = useState(null);
const [loading, setLoading] = useState(false);
const [error, setError] = useState("");

const handleAudit = async () => {
  setLoading(true);
setError("");
  try {
    const response = await axios.post(
      "http://localhost:5000/api/audit",
      {
        url: url
      }
    );

    setReport(response.data.data);

  } catch (error) {
    setReport(null);

    setError(
  error.response?.data?.message || "Something went wrong"
);

  }

  finally {
  setLoading(false);
}


};
  return (
    <div className="App">
      <h1>🔍 Page Pulse</h1>

      <label>
  <strong>Website URL</strong>
</label>

      <input
  type="text"
  placeholder="Enter website URL"
  value={url}
  onChange={(e) => setUrl(e.target.value)}
/>

      <br /><br />

      <button
  onClick={handleAudit}
  disabled={loading}
>
  {loading ? "Auditing..." : "Audit Website"}
</button>

      <hr />

{error && (
  <p style={{ color: "red" }}>
    {error}
  </p>
)}

      <h2>Audit Report</h2>

{report ? (
  <table border="1" cellPadding="10">
    <tbody>
      <tr>
        <td><strong>HTTP Status</strong></td>
        <td>{report.status}</td>
      </tr>

      <tr>
        <td><strong>Response Time</strong></td>
        <td>{report.responseTime} ms</td>
      </tr>

      <tr>
        <td><strong>Title</strong></td>
        <td>{report.title}</td>
      </tr>

      <tr>
        <td><strong>Meta Description</strong></td>
        <td>{report.metaDescription}</td>
      </tr>

      <tr>
        <td><strong>H1 Count</strong></td>
        <td>{report.h1Count}</td>
      </tr>

      <tr>
        <td><strong>Images Missing Alt</strong></td>
        <td>{report.imagesMissingAlt}</td>
      </tr>

      <tr>
        <td><strong>Word Count</strong></td>
        <td>{report.wordCount}</td>
      </tr>
    </tbody>
  </table>
) : (
  <p>No report yet.</p>
)}

      <footer>
        <p>
          Built for{" "}
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noreferrer"
          >
            Digital Heroes Training Task
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;