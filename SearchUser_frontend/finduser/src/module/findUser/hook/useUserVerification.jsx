import { useState } from "react"
import { userVerification } from "../service/UserVerification.service"
import { useMutation } from '@tanstack/react-query'

export const useUserVerification = () =>{
    const [error, setError] = useState()

    const {mutate, data} = useMutation(['useUserVerification'], (body) => userVerification(body),
    {
        onSuccess: () =>{
            setError();
        },
        onError: (err) =>{
            setError(err.response?.data?.message);
        }

    }
    ) 

    return {mutate, error, data}
}