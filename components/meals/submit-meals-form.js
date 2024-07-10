'use client';
import{useFormStatus}from 'react-dom';
export default function Submitmeals(){
    const {pending} = useFormStatus();
    return <button disabled={pending}>
        {pending?"submitting...":"share meal"}
    </button>
}