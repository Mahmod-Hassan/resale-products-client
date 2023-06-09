import { useEffect, useState } from "react";


const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState('');
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://assigntment-12-server.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsAdmin(data.isAdmin);
                    setIsAdminLoading(false);
                })
        }

    }, [email])

    return [isAdmin, isAdminLoading]
}
export default useAdmin;