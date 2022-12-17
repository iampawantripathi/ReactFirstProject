import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const onSubmit = (values) => {
        console.log();
        let newData = [];
        const oldData = JSON.parse(localStorage.getItem('userDetails'));
        if (oldData) {
            newData = [...oldData, values]
        } else {
            newData.push(values)
        }
        localStorage.setItem('userDetails', JSON.stringify(newData))
        navigate('/')
    }

    return (
        <div className='list-item'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='w-50 mx-auto py-3 mt-5 px-4 rounded shadow-lg'>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1 className=''>CREATE USER</h1>
                                <input {...register("id")} className="form-control" placeholder='id' /><br />
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
    );
}

export default Create;