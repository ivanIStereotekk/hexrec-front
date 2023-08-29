import Link  from "next/link"
import { useState,useEffect } from "react"


export default function UserStateProvider(){

    const userMeURL = process.env.BACKEND_URL + 'current_user'
    const loginURL = process.env.BACKEND_URL + 'auth/jwt/login'

    const [userState,checkUserState] = useState()

    useEffect(() => {

    })

    

    return <>
    <div>
        <Link href="/registration" ><button className="dark:hover:bg-black motion-safe:hover:-translate-x-0.5 motion-safe:transition ">Registration</button></Link>
    </div>
    
    </>
}



// const user = {
//     "id": "string",
//     "email": "string",
//     "is_active": true,
//     "is_superuser": true,
//     "is_verified": true,
//     "name": "string",
//     "surname": "string",
//     "phone_number": "string"
//   }



	

// {
//   "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4OCIsImF1ZCI6WyJmYXN0YXBpLXVzZXJzOmF1dGgiXSwiZXhwIjoxNjkyOTg1MTE0fQ.Gi0VZnk0AQj5L0oIAm_mbTu4zkhF28vAjT4HAVkgWAE",
//   "token_type": "bearer"
// }