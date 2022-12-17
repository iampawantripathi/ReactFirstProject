import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue } = useForm();
    const [data, setData] = useState([]);


    const onSubmit = (values) => {
        const index = data.findIndex(item => item.id === id);
        const formData = { ...values, id: id }
        data.splice(index, 1, formData);
        localStorage.setItem('userDetails', JSON.stringify(data));
        navigate('/')
    }

    useEffect(() => {
        const oldData = JSON.parse(localStorage.getItem('userDetails'));
        setData(oldData)
        const single = oldData.filter(item => item.id === id);
        if (single.length) {
            setValue('firstName', single[0].firstName)
            setValue('email', single[0].email)
            setValue('phone', single[0].phone)
        }
    }, [id, setValue, setData]);


    return (
        <div className='list-item'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='w-50 mx-auto py-3 mt-5 px-4 rounded shadow-lg'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1 className=''>EDIT USER</h1>
                                <input {...register("firstName")} className="form-control" placeholder='username' /><br />
                                <input {...register("email")} className="form-control" placeholder='email' /><br />
                                <input {...register("phone")} className="form-control" placeholder='phone' /><br />
                                <input type="submit" className='btn btn-success' />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Edit