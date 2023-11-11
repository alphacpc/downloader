"use client"
import React, {useState, ChangeEvent, useEffect} from 'react'
import axios from "axios"
import { VideoInfo, StreamInfo } from "../constants/types"

const FormDownload = () => {

    const [videos, setVideos] = useState<StreamInfo[]>([]);
    const [info, setInfo] = useState({title:null, image:null})
    

    const handleChangeInput = async(e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        const res = await(await axios.get("http://127.0.0.1:5000/")).data
        setVideos(res)
        
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get("http://127.0.0.1:5000/");
            console.log('API Response:', response.data); // Ajoutez ce log
            await setVideos(response.data["streams"]);
            await setInfo({
                "title": response.data["title"],
                "image": response.data["thumbnail_url"]
            })
            console.log(typeof(videos))
            console.log(response.data["streams"])
            console.log('Video Object Keys:', Object.keys(videos));
          } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
          }
        };
      
        fetchData();
      }, []);

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

            <div className='flex justify-around flex-wrap'>
                {videos.map((video, index) => (
                    <div key={index} className="w-1/6 m-1 mb-12 shadow-lg rounded">
                        <img src={info["image"]} alt={info["title"]}/>
                        <div className="flex items-center bg-white justify-between py-4 px-2">
                            <span className="font-bol">{video?.mime_type.replace("/"," ").toUpperCase()}</span>
                            <span className="text-orange-600 font-bold">{video?.resolution}</span>
                            <button className="bg-green-500 text-white rounded-md text-sm p-1 px-2">Télécharger</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default FormDownload