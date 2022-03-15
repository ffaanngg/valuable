import { useEffect,useState } from 'react';
import  axios  from 'axios';

function Play(){
        
    const [user,setUser] = useState({1: 1});
    
    useEffect(() => {
       
        axios.get('https://discord.com/api/users/@me',{
                headers: {
                    authorization : `Bearer ${localStorage.getItem('accessToken')}`
                }
        })
        .then((r) => {setUser(r.data)})        

    },[])
    
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    )

}

export default Play;