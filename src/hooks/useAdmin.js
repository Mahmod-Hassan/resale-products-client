import { useEffect, useState } from "react";


const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState();
    const [isAdminLoading, setIsAdminLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://mobile-bazar-server-jet.vercel.app/user/${email}`)
                .then(res => res.json())
                .then(data => {
                   if(data?.role === 'admin'){
                    setIsAdmin(true);
                    setIsAdminLoading(false);
                   }
                   else{
                    setIsAdmin(false);
                    setIsAdminLoading(false);
                   }
                })
        }

    }, [email])

    return [isAdmin, isAdminLoading]
}
export default useAdmin;