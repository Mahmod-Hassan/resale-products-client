import { useEffect, useState } from "react";

const useToken = email => {
    const [token, setToken] = useState('');
    useEffect(() => {
        if (email) {
            fetch(`https://mobile-bazar-server-jet.vercel.app/user/send-token/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data?.accessToken) {
                        localStorage.setItem('access_token', data?.accessToken);
                        setToken(data?.accessToken);
                    }
                })
                .catch(err => console.log(err.message))
        }
    }, [email])
    return [token]
}
export default useToken;