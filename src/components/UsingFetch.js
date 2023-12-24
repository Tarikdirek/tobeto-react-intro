import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";



export default function UsingFetch() {

    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .finally(() => setLoading(false));
    }, []);

  return (
    <div>
          <div className="row mt-5">
      <div className="col">
        <h1>Using Fetch</h1>
        <hr />
      </div>
    </div>

    {
        loading&&
        <div className="row">
        <div className="col">
            <div className="alert alert-info">
                <i className="fa fa-sync-alt fa-spin me-2"></i>Loading...
            </div>
        </div>
    </div>

    }

    <div className="row mt-3">
        <ul className="list-group">
            {
                users.map((user) =>  <li key={user.id} className="list-group-item">{user.name} ({user.username})</li>)
                                    
            }
        </ul>
    </div>

    <Link to="/axios">axios</Link>
    
    </div>
  
  );
}
