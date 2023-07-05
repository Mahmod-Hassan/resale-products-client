import { useEffect, useState } from "react";

const useSeller = email => {
    const [isSeller, setIsSeller] = useState();
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://mobile-bazar-server-jet.vercel.app/user/${email}`)
                .then(res => res.json())
                .then(data => {
                    if(data?.userType === 'seller'){
                        setIsSeller(true);
                        setIsSellerLoading(false);
                    }else{
                        setIsSeller(false)
                        setIsSellerLoading(false);
                    }
                    
                })
        }
    }, [email]);
    return [isSeller, isSellerLoading]
}
export default useSeller;