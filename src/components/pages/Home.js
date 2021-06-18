import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

function Home() {

    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3000/users")
        setUser(result.data);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-12 py-4">
                    <table className="table border shadow py-4">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <Link className="btn btn-sm btn-primary mr-2">View</Link>
                                            <Link className="btn btn-sm btn-outline-primary mr-2">Edit</Link>
                                            <Link className="btn btn-sm btn-danger mr-2">Delete</Link>
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home;