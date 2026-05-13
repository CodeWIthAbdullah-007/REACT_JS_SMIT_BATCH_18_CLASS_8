import { useState } from "react";

const DataBinding = () => {

    let [name, setName] = useState("");
    let [email, setEmail] = useState("");
    let [users, setUsers] = useState([]);
    let [log, setLog] = useState({
        name : "Abdullah",
        email : "mabdullahnawr85@gmail.com"
    })
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
        <div>
            <h2>Two Way Data Binding</h2>
            <p>Name : {name}</p>
            <p>Email : {email}</p>
            <input type="text"value={name}onChange={(e) => setName(e.target.value)} />
            <input type="text"value={email} onChange={(e) => setEmail(e.target.value)} />
            <button>Submit</button>
        </div>
    );
};

export default DataBinding;