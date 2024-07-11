"use client"
import {useFormStatus} from 'react-dom'


export default function Formsubmit(){
    const status = useFormStatus();
    console.log(status);
    if (status.pending){
        <p>Creating</p>
    }
    return(<>
     <button type="reset">Reset</button>
     <button>Create Post</button>
    </>

    );
}