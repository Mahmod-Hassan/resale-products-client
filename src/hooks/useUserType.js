import { useEffect, useState } from "react";


const useUserType = (email) => {
    const [userType, setUserType] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://mobile-bazar-server-jet.vercel.app/user/${email}`)
                .then(res => res.json())
                .then(data => {
                   if(data?.role === 'admin'){
                    setUserType('admin');
                    setIsLoading(false);
                   }
                   else if (data?.role === 'seller') {
                    setUserType('seller');
                    setIsLoading(false);
                   }
                   else{
                    setUserType('buyer')
                    setIsLoading(false);
                   }
                })
        }else{
            setUserType({})
            setIsLoading(false);
        }
        
    }, [email])

    return {userType, isLoading}
}
export default useUserType;