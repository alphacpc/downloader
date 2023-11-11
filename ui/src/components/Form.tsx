import React, {useState} from 'react'

const FormDownload = () => {


    const handleChangeInput = (event : React.ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target
        console.log(value + " " + name)
    }


    return (
        <div>
            <h1 className="text-4xl text-center">Téléchargement de vidéos <span className="text-orange-600 font-bold">YouTube</span></h1>
            <form className=" my-12 py-4 flex justify-center">
                <input type="text" name="link" 
                    id="link" placeholder="Collez ici le lien de votre vidéo" 
                    className="py-3 px-4 text-lg text-slate-800 rounded outline-none w-1/3"
                    onChange={ (e) => handleChangeInput(e) }
                />
            </form>
        </div>
    )
}

export default FormDownload