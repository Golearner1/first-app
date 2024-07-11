'use server';

import { createAuthSession, Destroysession } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { CreateUser, getUSerByemail } from "@/lib/user";
import { redirect } from "next/dist/server/api-utils";


export async function signup(prevState,formData){
const email = formData.get('email');
const password = formData.get('password');

let errors={}
if (email. includes ('@')) {
    errors.email = 'Please enter a valid email address.';
    }
if (password. trim(), length < 8) {
        errors.password = 'Password must be at least 8 characters long.'
    }
if (Object. keys (errors). length > 0) {
    return {
    errors,//here we are returnin if any error exist to usefromstateas a formstate and display that error
    }
}
const hashedPassword= hashUserPassword();
try{
const id =CreateUser(email,hashedPassword);
await createAuthSession(id);
redirect('/training')
}catch(error){
    if(error.code=== 'SQLITE_CONSTRAINT_UNIQUE'){
        return{
            errors:{
                email:'It seems like an account for the chosen email already exists.'
            }
        }
    }
    throw error;
}

}

export async function Login(prevState,formData){
const email = formData.get('email');
const password = formData.get('password');
const existinguser =getUSerByemail(email)
if(!existinguser){
    return{
        errors :{
            email : 'could not authenticate user'
        }
    }
}
const isvalidPassword = verifyPassword(existinguser.password,password)
if(!isvalidPassword){
    return{
        errors :{
            password : 'could not authenticate user'
        }
    }
} 

await createAuthSession(existinguser.id);
redirect('/training');
}

export async function auth (mode,prevState,formData){
    if(mode=== 'login'){
        return Login(prevState,formData)
    }

    return signup(prevState,formData)

}

export async function Logout(){
await Destroysession();
redirect('/');
}
