import { useState } from "react";

const DataBinding = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [users, setUsers] = useState([]);
  let [log, setLog] = useState({
    name: "Abdullah",
    email: "mabdullahnawr85@gmail.com",
  });

  let obj = {
    name: name,
    email: email,
  };

  console.log("name", name);
  console.log("email", email);
  console.log("render");
  console.log("obj", obj);
  console.log("log", log);

  return (
    <div className="db-container">
      <div className="db-glass-card">
        <h2 className="db-title">Two Way Data Binding</h2>
        <div className="db-display">
          <p className="db-label">Name : <span className="db-value">{name}</span></p>
          <p className="db-label">Email : <span className="db-value">{email}</span></p>
        </div>
        <div className="db-inputs">
          <input
            type="text"
            className="db-input"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="db-input"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="db-btn">Submit</button>
      </div>
    </div>
  );
};

export default DataBinding;
