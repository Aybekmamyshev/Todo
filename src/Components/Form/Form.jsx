import React, {useContext} from 'react';
import {Link, useLocation,useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import {CustomContext} from "../../utils/Context";
import {Navigate} from "react-router-dom";

const Form = () => {
    const  navigate = useNavigate()
    const location = useLocation()
    const {user,setUser} = useContext(CustomContext)

    const {
        reset,
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        mode:"onBlur"
    })

    const registerUser = (data) => {
        axios.post('http://localhost:3030/register',{
            ...data,
            categories:[]
        }).then((rec)=>{
            localStorage.setItem('user',JSON.stringify({
                token:rec.data.accessToken,
                ...rec.data.user
            }))
            reset()
           navigate('/')
        })
            .catch((err) =>{
                console.log(err)
            })
     }

     const  loginUser = (data) =>{
         axios.post('http://localhost:3030/login',{
             ...data,

         }).then((rec)=>{
             localStorage.setItem('user',JSON.stringify({
                 token:rec.data.accessToken,
                 ...rec.data.user
             }))
             reset()
             navigate('/')
         })
             .catch((err) =>{
                 console.log(err)
             })
     }


    if (user.email.length !== 0){
        return  <Navigate to='/'/>
    }
          const onSubmit = (data) =>{
             location.pathname === '/register'? registerUser(data):loginUser(data)
          }
       return (
        <>



            <div>
                <div className="form">
                    <form className='form__form' onSubmit={handleSubmit(onSubmit)} action="src/Components/Form/Form.jsx">
                        <h2 className='form__title'>{location.pathname === '/register'? 'Зарегистрироваться':'Войти'}</h2>
                        {location.pathname === '/register'?
                            <label htmlFor="">
                            <input placeholder='Введите логин' {...register("login",{
                                required:{
                                    message:"Заполните логин",
                                    value:true
                                },
                                maxLength: {
                                    message: 'Максимальная длинна 15 символов',
                                    value: 15
                                },
                                minLength:{
                                    message: 'Минимальная длинна 3',
                                    value: 3
                                }

                            })} className='form__field' type="login"/>
                            <span> {errors.login && errors.login.message}</span>
                        </label>:''}
                        <label htmlFor="">
                            <input placeholder='Введите email' {...register("email",{
                                required:{
                                    message:"Заполните email",
                                    value:true
                                },
                                maxLength: {
                                    message: 'Максимальная длинна',
                                    value: 15
                                },
                                minLength:{
                                    message: 'Минимальная длинна',
                                    value: 3
                                }

                            })} className='form__field' type="email"/>
                            <span> {errors.email && errors.email.message}</span>

                        </label>
                        <label htmlFor="">
                            <input placeholder='Введите пароль' {...register("password",{
                                required:{
                                    message:"Заполните пароль",
                                    value:true
                                },
                                maxLength: {
                                    message: 'Максимальная длинна 15',
                                    value: 15
                                },
                                minLength:{
                                    message: 'Минимальная длинна 3',
                                    value: 3
                                }

                            })} className='form__field' type="password"/>
                            <span> {errors.password && errors.password.message}</span>

                        </label>

                        <button type='submit' className='form__btn'>{location.pathname === '/register'? 'Зарегистрироваться':'войти'}</button>
                        <p className="form__text">{
                            location.pathname === '/register'?<>У меня есть аккаунт чтобы <Link to='/login'>войти</Link>}</>
                                :<>Нету аккаунта<Link to='/register'>Зарегистрироваться</Link></>
                        }
                        </p>
                    </form>
                </div>
            </div>
            );

        </>
    );
};

export default Form;