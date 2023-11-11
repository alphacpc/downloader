"use client"
import React, { ChangeEvent} from 'react'
// import axios from "axios"

const FormDownload = () => {

    const handleChangeInput = async(e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        
        if(value.startsWith("https://www.youtube")){
            // const response = await axios.get('https://api.example.com/data');       
    
        }else{
            console.log("URL invalide")
        }
    }

    return (
        <div>
            <h1 className="text-4xl text-center">Téléchargement de vidéos <span className="text-orange-600 font-bold">YouTube</span></h1>
            <form className=" my-12 py-4 flex justify-center">
                <input type="text" name="link" 
                    id="link" placeholder="Collez ici le lien de votre vidéo" 
                    className="py-3 px-4 text-lg text-slate-800 rounded outline-none w-1/3"
                    onChange={ handleChangeInput }
                />
            </form>
        </div>
    )
}

export default FormDownload