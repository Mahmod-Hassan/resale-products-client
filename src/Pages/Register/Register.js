import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleRegister = data => {
        const { email, password, name, photoUrl } = data;
        if (!/[A-Z]/.test(password)) {
            setError('at least one uppercase');
            return;
        }
        if (!/[0-9]/.test(password)) {
            setError('at least One number');
            return;
        }
        if (password.length < 6) {
            setError('at least 6 character')
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    displayName: name,
                    photoUrl: photoUrl,
                }
                updateUser(userInfo)
                    .then(result => {
                        console.log(result.user)
                        setError('');
                        navigate('/');
                    })
                    .catch(err => {
                        console.log(err);
                        toast.error(err.message);
                    })
                toast.success('Congratulations registration Successful')
            })
            .catch(err => {
                console.log(err);
                toast.error(err.message);
            })
    }
    return (
        <div>
            <div className='md:w-1/2 mx-auto border-4 border-secondary  p-5'>
                <h2 className="text-4xl text-secondary font-bold text-center">Register Now</h2>
                <form onSubmit={handleSubmit(handleRegister)}>

                    <div className="form-control">
                        <label className="label">Name</label>
                        <input {...register("name", { required: "name is required" })} type="text" placeholder="Name" className="input input-bordered" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">Photo Url</label>
                        <input {...register("photoUrl")} type="text" placeholder="Photo Url" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">Email</label>
                        <input {...register("email", { required: "email required" })} type="text" placeholder="email" className="input input-bordered" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control">
                        <label className="label">Password</label>
                        <input {...register("password", { required: "password field required" })} type="text" placeholder="password" className="input input-bordered" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    {
                        error && <p className='text-red-500'>{error}
                        </p>
                    }

                    <button className='btn btn-secondary mt-4 w-full' type="submit">Sign Up</button>
                </form>
                <p className='text-sm mt-5'>Already have an account ? <Link to='/login' className='text-blue-500 underline hover:underline-offset-8 font-bold'>please login</Link></p>

            </div>
        </div>
    );
};

export default Register;