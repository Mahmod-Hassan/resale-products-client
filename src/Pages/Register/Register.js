import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { HiOutlineLockClosed, HiOutlineMail, HiOutlineUpload, HiOutlineUser, HiSelector } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    const imageHostKey = process.env.REACT_APP_imgbb_Key;
//    console.log(token);
   
    // after getting token user will be redirect to home page
    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, userEmail])


    // registration form event handler start
    const handleRegister = data => {
       
        const { name, email, password, userType } = data;

        // validate the password
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

        const image = data.image[0];
        const formData = new FormData();
        console.log(image);
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`

        // post an image to imgbb server and get the imgUrl from big imgData
        fetch(url, {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(imgData => {
            createUser(email, password)
            .then(result => {
                const userInfo = {
                    displayName: name,
                    photoURL: imgData?.data?.url,
                }
                
                updateUser(userInfo)
                    .then((result) => {
                        savedUserToDatabase(name, email, userType)
                    })
                    .catch(err => {
                        toast.error(err.message);
                    })
            })
            .catch(err => {
                toast.error(err.message);
            })
        })
    }
    const savedUserToDatabase = (name, email, userType) => {
        const user = {name, email, userType};
      axios.put(`https://mobile-bazar-server-jet.vercel.app/user?email=${email}`, user)
      .then(({data}) => {
        if(data.acknowledged) {
            setUserEmail(email)
            setError('');
            toast.success('user created successfully')
        }
      })
    }
   

    return (
            <div>
                {/* form start here */}
                <form className='space-y-4' onSubmit={handleSubmit(handleRegister)}>

                    <div className="relative">
                        <HiOutlineUser className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineUser>
                        <input {...register("name", { required: "name is required" })} type="text" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40" placeholder="Username" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>

                    <div>
                    <label htmlFor="dropzone-file" className="flex px-2 py-3 bg-white border-2 border-dashed rounded-lg cursor-pointer">
                        <HiOutlineUpload className='text-2xl text-gray-200'></HiOutlineUpload>
                        <h2 className="mx-3 text-gray-400">Profile Photo</h2>
                        <input {...register("image", { required: "image is required" })} id="dropzone-file" type="file"  />
                   </label>
                   {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
                   </div>

                    <label className="flex px-2 py-3 bg-white border rounded-lg cursor-pointer">
                    <HiSelector className='text-2xl text-gray-200'></HiSelector>
                    <select {...register("userType")} className='w-full outline-none text-gray-400'>
                            <option>buyer</option>
                            <option>seller</option>
                    </select>
                    </label>
                    

                    <div className="relative">
                        <HiOutlineMail className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineMail>
                        <input {...register("email", { required: "email required" })} type="email" placeholder="email" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40"  />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>

                    <div className="form-control">
                        <HiOutlineLockClosed className='absolute mt-3 ml-2 text-2xl text-gray-200'></HiOutlineLockClosed>
                        <input {...register("password", { required: "password field required" })} type="password" placeholder="password" className="text-gray-700 w-full py-3 bg-white border rounded-lg px-10 outline-none focus:ring-blue-300 focus:ring focus:ring-opacity-40"  />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    </div>

                    {
                        error && <p className='text-red-500'>{error}
                        </p>
                    }

                    <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 mb-5" type="submit">Sign Up</button>
                </form>
                {/* form end here */}

               <Link to='/create-account-with/login' className="text-sm text-blue-500 hover:underline">Already have an account ?</Link>
        </div>
    );
};

export default Register;