import Link  from "next/link"


export default function UserStateProvider(){
    const user = {
        "id": "string",
        "email": "string",
        "is_active": true,
        "is_superuser": true,
        "is_verified": true,
        "name": "string",
        "surname": "string",
        "phone_number": "string"
      }

    return <>
    <div>
        <Link href="registration"></Link>
    </div>
    
    </>
}