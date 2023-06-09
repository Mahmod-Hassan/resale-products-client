import { useEffect, useState } from "react";

const useSeller = email => {
    const [isSeller, setIsSeller] = useState('');
    const [isSellerLoading, setIsSellerLoading] = useState(true);
    useEffect(() => {
        if (email) {
            fetch(`https://assigntment-12-server.vercel.app/users/seller/${email}`)
                .then(res => res.json())
                .then(data => {
                    setIsSeller(data?.isSeller);
                    setIsSellerLoading(false);
                })
        }
    }, [email]);
    return [isSeller, isSellerLoading]
}
export default useSeller;