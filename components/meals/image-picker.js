"use client"
import { useRef, useState } from 'react';
import classes from './image-picker.module.css'
import Image from 'next/image';


export default function ImagePicker({label,name}){
    const [pickedImage,SetPickedImage]=useState();
    const Imageinput=useRef();
function Clickimage(){
    Imageinput.current.click();
    }
    function Imagehandler(event){
        const file = event.target.files[0]
        if (!file){
            SetPickedImage(null);
            return ;
        }
        const filereader = new FileReader(file)
        filereader.onload=()=>{
            SetPickedImage(filereader.result)
        }
        filereader.readAsDataURL(file);
    }
return (
        <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes. controls}>
            <div className={classes.preview}>
            {!pickedImage && <p>No image picked yet.</p>}
        {pickedImage &&(
        <Image
        src={pickedImage}
        alt="The image selected by the user."
        fill
        />  
        )}
            </div>
        <input
        className={classes.input}
        type="file" id={name}
        accept="image/png, image/jpeg" 
        name={name}
        ref={Imageinput}
        onChange={Imagehandler}
        required
        />
     <button className={classes.button} type='button' onClick={Clickimage}>
        Pick Image
        </button>
        </div>
        </div>
        
        );
}