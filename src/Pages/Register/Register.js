import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const handleRegister = data => {
        console.log(data);
    }
    return (
        <div>
            <div className='md:w-1/2 mx-auto border-4 border-secondary  p-5'>
                <h2 className="text-4xl text-secondary font-bold text-center">Register Now</h2>
                <form onSubmit={handleSubmit(handleRegister)}>

                    <div className="form-control">
                        <label className="label">Name</label>
                        <input {...register("name", { required: true })} type="text" placeholder="Name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">Photo Url</label>
                        <input {...register("photoUrl", { required: true })} type="text" placeholder="Photo Url" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">Email</label>
                        <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">Password</label>
                        <input {...register("password", { required: true })} type="text" placeholder="password" className="input input-bordered" />
                    </div>


                    {errors.exampleRequired && <span>This field is required</span>}

                    <button className='btn btn-secondary mt-4 w-full' type="submit">Sign Up</button>
                </form>
                <p className='text-sm mt-5'>Already have an account ? <Link to='/login' className='text-blue-500 underline hover:underline-offset-8 font-bold'>please login</Link></p>

            </div>
        </div>
    );
};

export default Register;