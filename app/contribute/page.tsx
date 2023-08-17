"use client"
import { useState } from "react";
import Button from '@mui/material/Button';

export default function Registration() {
    
    // our useState which stores Form Data
    const [formData, setFormData] = useState({
        name:"",
        email:"",
        message:"",
    })
    // Success state hook
    const [formSuccess, setSuccess] = useState(false)

    // Success message hook
    const[successMessage, setSuccessMessage] = useState("")

    // Input handler Function
    // const inputHandler = (evnt) => {

    // }

    return <>
    <div className="flex min-h-screen flex-col items-center justify-between p-24"> 
        <h1>Contribution page </h1>
        <form id="myForm" className="flex">


        </form>

    </div>
    </>
}
  