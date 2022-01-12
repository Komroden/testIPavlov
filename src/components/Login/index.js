import React,{useState,useEffect} from 'react';
import './style.scss';
import {useInputV} from "../../hooks/useInputV";
import {SnackBar} from "../SnackBar";

export const Login = () => {
    const [text,setText]=useState('')
    const [visible,setVisible]=useState(false)
    const password=useInputV('',{isEmpty:true,minLength:6,maxLength:10});
    const email=useInputV('',{isEmpty:true,isEmail:true});
    const handleSend=(e)=>{
        e.preventDefault()
        setVisible(true)
        setText(`${email.value} ${password.value} `)
    }
    const handleAlert=(text)=>{
        setVisible(true)
        setText(text)
    }
    useEffect(()=>{
        if(visible){
            setTimeout(()=>setVisible(false),5000)
        }
    },[visible])
    return (

            <div className={'login'}>
                <div className={'login__modal'}>
                    <div className="login__container">
                        <div className="login__content">
                            <div className={'login__closeWrapper'}>
                                <img src={'/images/close.svg'} alt={'logo'} className={'login__closeIcon'} onClick={(e)=>{
                                    handleAlert('Закрыть')}} />
                            </div>
                            <div className={'login__logoWrapper'}>
                            <img src={'/images/Subtract.svg'} alt={'logo'} className={'login__logoImg login__logoImg_marginTop'} />
                            <h3 className={'login__logoTitle login__logoTitle_marginTop'}>WRKNG</h3>
                            </div>
                            <form onSubmit={handleSend} className={'login__form login__form_marginTop'}>
                                <input type='email' className={'login__formInput'} placeholder={'Введите email'} onBlur={e => email.onBlur(e)} onChange={e=>email.onChange(e)} value={email.value}/>
                                {(email.isDirty && email.isEmpty) && <span className="login__requiredFail"> Обязательное поле</span>}
                                {(email.isDirty && email.emailError &&!email.isEmpty) && <span className="login__requiredFail"> Неверный формат</span>}
                                <input type='password' className={'login__formInput login__formInput_marginTop'} placeholder={'Введите пароль'} onBlur={e => password.onBlur(e)} onChange={e=>password.onChange(e)} value={password.value}/>
                                {(password.isDirty && password.isEmpty) && <span className="login__requiredFail"> Обязательное поле</span>}
                                {(password.isDirty && password.minLengthError &&!password.isEmpty) && <span className="login__requiredFail"> Пароль должен быть больше 6 символов</span>}
                                {(password.isDirty && password.maxLengthError&&!password.isEmpty) && <span className="login__requiredFail"> Пароль должен быть меньше 10 символов</span>}
                                <p className={'login__formMessageEmail login__formMessageEmail_marginTop'}>На вашу почту придет письмо с подтверждением</p>
                                <button disabled={!email.inputValid||!password.inputValid} className={'login__formButtonSubmit login__formButtonSubmit_marginTop'} type={'submit'}>Войти</button>
                                <p className={'login__formMessageEmail login__formMessageEmail_marginTop'}>Если у вас нет аккаунта то вы можете <a href={'/'} onClick={(e)=>{e.preventDefault()
                                handleAlert('Регистрация')}} className={'login__formMessageLink'} > Зарегистрироваться</a></p>
                            </form>
                        </div>

                    </div>

                </div>
                <SnackBar text={text} visible={visible}/>
            </div>


    );
};

