import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import emailjs from 'emailjs-com';
import toast from 'react-hot-toast';

const SendMessageToMail = () => {

    const { user } = useContext(AuthContext);

    const handleMessageForm = event => {
        event.preventDefault();
        emailjs.sendForm('service_vhzmsfd', 'template_xrr72wn', event.target, '67aJGAwKUc474x7j4')
            .then(res => {
                toast.success('thank you ! you message recieved')
                event.target.reset();
            })
            .catch(error => console.log(error))
    }
    return (
        <>
            <h2 className="text-4xl text-center mt-10 md:mb-5 font-bold text-primary">Sent Message</h2>
            <div className='grid md:grid-cols-2 gap-10 place-items-center'>
                <div className='p-10'>
                    <h3 className='text-4xl font-bold text-red-500'>Fell free to inform us. We are preset 24/7 for you.</h3>
                </div>
                <div className='grid p-5'>
                    <form onSubmit={handleMessageForm}>
                        <label>Name</label>
                        <input name="name" className='input input-bordered w-full mb-4' type="text" value={user?.displayName} readOnly />

                        <label>Email</label>
                        <input name="user_email" className='input input-bordered w-full mb-4' type="text" value={user?.email} readOnly />

                        <label>Message</label>
                        <textarea name="message" className='input input-bordered w-full' type="text" placeholder='send message ...' />
                        <button type="submit" className='btn'>Send</button>
                    </form>
                </div>
            </div>
        </>

    );
};

export default SendMessageToMail;