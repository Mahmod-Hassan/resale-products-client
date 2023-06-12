import React, { useContext, useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const [userEmail, setUserEmail] = useState('');
    const [token] = useToken(userEmail);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token])


    // login form evnet handler start
    const handleLogin = data => {
        const { email, password } = data;
        signIn(email, password)
            .then(result => {
                toast.success('successfully logged In');
                setUserEmail(email);
            })
            .catch(err => {
                toast.error(err.message);
            })
    }
    // login form evnet handler end

    // google signin method start
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUserEmail(user?.email);
                savedUserToDatabase(user?.displayName, user?.email)
            })
            .catch(err => {
                toast.error(err.message);
            })
    }
    // google sign in method end

    const savedUserToDatabase = (name, email) => {
        const user = { name, email, user_type: 'buyer' }
        fetch(`https://assigntment-12-server.vercel.app/users?email=${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setUserEmail(email)
                    toast.success('Google sign in successful')
                }
            })
    }
    

    return (
                <div>
                    {/* form start here */}
                    <form onSubmit={handleSubmit(handleLogin)}>

                        <div className="form-control">
                            <label className="label">Email</label>
                            <input {...register("email", { required: "email is required" })} type="text" placeholder="email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded outline-none focus:ring-opacity-40 focus:ring focus:ring-blue-300" />
                            {
                                errors.email && <p className='text-red-500'>{errors.email.message}</p>
                            }
                        </div>

                        <div className="form-control">
                            <label className="label">Password</label>
                            <input {...register("password", { required: "password is required" })} type="password" placeholder="password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded outline-none focus:ring-opacity-40 focus:ring focus:ring-blue-300" />
                            {
                                errors.password && <p className='text-red-500'>{errors.password.message}</p>
                            }
                        </div>
                        <div className="flex items-center justify-between my-4">
                            <Link to='#' className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</Link>
                            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-sm hover:bg-blue-400">
                                Sign In
                            </button>
                        </div>
                    </form>
                  {/* form end here */}

                    <button onClick={handleGoogleSignIn} className="btn btn-outline btn-white w-full">SignIn With Google</button>
                    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
                        <Link to='/register' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</Link>
                   </div>
                </div>

    );
};

export default Login;
