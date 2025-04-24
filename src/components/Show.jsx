import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';

const Show = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userDetails'))
        setData(userData)
    }, [setData]);

    const handleDelete = (id) => {
        const index = data.findIndex(item => item.id === id);
        data.splice(index, 1);
        localStorage.setItem('userDetails', JSON.stringify(data));
        navigate('/')
    }

    return (
        <div className='list-item'>
            <div className='container '>
                <div className='row'>
                    <div className='col-12'>
                        <div className='py-5'>
                            <div className='d-flex justify-content-between align-items-center my-2 py-3 px-4'>
                                <h2>User Details</h2>
                                <Link to="/create">
                                    <button className='btn btn-success'>Create</button>
                                </Link>
                            </div>

                            <Table striped bordered hover>
                                <thead className='text-center'>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email Address</th>
                                        <th>Phone Number</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {
                                        data && data.length > 0
                                            ?
                                            data.map((item, key) => {
                                                return (
                                                    <tr key={key}>
                                                        <td key={item.id}>{item.id}</td>
                                                        <td>{item.firstName}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phone}</td>
                                                        <td >
                                                            <Link to={`/edit/${item.id}`} className='btn btn-info'>
                                                                EDIT
                                                            </Link>
                                                            &nbsp;
                                                            <button className='btn btn-danger' onClick={() => handleDelete(item.id)}>DELETE</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            :
                                            "No Record Found"
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Show
