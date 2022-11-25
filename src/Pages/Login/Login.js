import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleLogin = data => {
        console.log(data);
    }
    return (
        <div>
            <div className='md:w-1/2 mx-auto border-4 border-primary mt-5 p-5'>
                <h2 className="text-4xl text-primary font-bold">Please Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control">
                        <label className="label">Email</label>
                        <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">Password</label>
                        <input {...register("password", { required: true })} type="text" placeholder="password" className="input input-bordered" />
                    </div>


                    {errors.exampleRequired && <span>This field is required</span>}

                    <button className='btn btn-primary mt-4 w-full' type="submit">Login</button>
                </form>
                <p className='text-sm mt-10 mb-5'>New to this website <Link to='/register' className='text-blue-500 underline hover:underline-offset-8 font-bold'>please register</Link></p>

                <button className="btn btn-outline btn-white w-full">SignIn With Google</button>
            </div>
        </div>
    );
};

export default Login;