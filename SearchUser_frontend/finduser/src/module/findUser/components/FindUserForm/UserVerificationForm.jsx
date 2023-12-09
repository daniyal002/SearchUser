import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useUserVerification } from '../../hook/useUserVerification';
import style from './UserVerificationForm.module.css'
import NumberInput from '../../../../UI/Input/InputMaskNumber/InputMaskNumber';

const UserVerificationFrom = () => {
    const {mutate, error, data} = useUserVerification();
    const {register,handleSubmit} = useForm();

    const [number, setNumber] = useState(0)

    const onSubmit = (body) =>{
        const updateBody = {...body, number:number.split("-").join("")}
        mutate(updateBody)
    }

    const handleInput = ({ target: { value } }) => setNumber(value)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.userVerificationForm}>
        <h1 className={style.userVerificationFormHeader} >Введите <span className={style.userVerificationFormHeaderSpan}>Email</span> или <span className={style.userVerificationFormHeaderSpan}>номер</span> для проверки пользователя</h1>
        <div className={style.userVerificationFormLabelInput}>
            <label htmlFor="email" className={style.userVerificationFormLabel}>E-mail:</label>
            <input type="email" {...register("email")} id='email' className={style.userVerificationFormInput} placeholder='E-mail'/>
        </div>

        <div className={style.userVerificationFormLabelInput}>
            <label htmlFor="number" className={style.userVerificationFormLabel}>Номер:</label>
            <NumberInput  number={number} handleInput={handleInput}  />
        </div>

        <button type="submit" className={style.userVerificationFormButton}>Проверить</button>



        {data && (<h4 className={style.UserVerificationFormDataText}>Результат:</h4>)}

        {data &&
        data.map((user,index)=>(
            <div key={index} className={style.UserVerificationFormData}>
            <p className={style.UserVerificationFormDataText}>Email: {user.email}</p>
            <p className={style.UserVerificationFormDataText}>Номер: {user.number}</p>
            </div>
        ))}
        
       {error && ( <div className={style.UserVerificationFormDataError}>
        <p className={style.UserVerificationFormDataErrorText}>{error}</p>
       </div> )}

    </form>
  )
}

export default UserVerificationFrom