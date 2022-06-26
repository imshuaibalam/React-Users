import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const res = await axios.get("http://localhost:3003/users");
        // console.log(res.data);
        // setUsers(res.data);
        // jo data add new add hua hai usko upper dikhane ke liyen 
        setUsers(res.data.reverse());
    }

    const deleteUser= async(id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    return (
        <>
            <div className="container">
                <div>
                    <h1>Home Page</h1>
                    <table class="table border shadow">
                        <thead className="bg-dark text-light">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((value, index) => {
                                    return (
                                        <tr>
                                            <th scope="row">{index + 1}</th>
                                            {/* <th scope="row">{value.id}</th> */}
                                            <td>{value.name}</td>
                                            <td>{value.username}</td>
                                            <td>{value.email}</td>
                                            <td>
                                                <Link to={`/users/${value.id}`} className="btn btn-primary mx-1">View</Link>
                                                <Link className="btn btn-success mx-1"  to={`/users/edit/${value.id}`}>Edit</Link>
                                                <Link to={"/"} className="btn btn-danger mx-1" onClick={()=>deleteUser(value.id)}>Delete</Link>
                                            </td>
                                        </tr>)
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Home;