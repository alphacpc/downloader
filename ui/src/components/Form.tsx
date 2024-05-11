"use client";
import axios from "axios";
import Empty from './Empty';
import Link from "next/link";
import { VideoInfo, StreamInfo } from "../constants/types";
import React, {useState, ChangeEvent, useEffect} from "react";


const FormDownload = () => {
    const [url ,setUrl] = useState('')
    const [videos, setVideos] = useState<StreamInfo[]>([]);
    const [info, setInfo] = useState({title:null, image:null})
    
    const fetchData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:5000/?title=${url}`);
          await setVideos(response.data["streams"]);
          await setInfo({
              "title": response.data["title"],
              "image": response.data["thumbnail_url"]
          })
        } catch (error) {
          console.error('Erreur lors de la récupération des données :', error);
        }
    };

    const handleChangeInput = async(e: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = e.target
        setUrl(value)
    }


    useEffect(() => {
        url && fetchData();
        !url && setVideos([])
      }, 
    [url]);


    return (
        <div className="flex flex-col">
            <h1 className="text-4xl text-center line-">Téléchargement de vidéos <span className="text-orange-600 font-bold">YouTube</span></h1>
            <form className=" my-8 py-5 flex flex-col justify-center items-center" method='post'>
                <div className="flex items-center flex-row-reverse text-lg mb-4">
                    <p className='italic'>Faites de chaque lien YouTube une opportunité de téléchargement. </p>
                </div>

                <input type="text" name="link" 
                    id="link" placeholder="Collez ici le lien de votre vidéo" 
                    className="py-3 px-4 text-lg text-slate-800 rounded outline-none lg:w-[30rem] sm:w-full"
                    onChange={ handleChangeInput }
                />
            </form>

            {/* Taille de l'écran (sm, md, lg, xl): */}
            {
                videos && videos.length > 0 && <div className="flex items-center py-8 text-xl">
                    <span className="mr-2">Résultat : </span>
                    <h2 className="font-bold text-2xl text-orange-600 mr-2"> {info?.title}</h2>
                    <span className="mr-2"> - Nombre de vidéos trouvées : </span>
                    <h2 className="font-bold text-2xl text-green-500">{videos?.length}</h2>
                </div>
            }
            <div className='flex div-videos flex-wrap'>
                { videos && videos.length > 0 ? videos.map((video, index) => (
                    <div key={index} className="mb-12 div-item-video shadow-lg rounded lg:w-[20rem] md:w-[20rem] sm:w-full">
                        <img src={info["image"]} alt={info["title"]}/>
                        <div className="flex items-center bg-white justify-between py-4 px-2">
                            <span className="font-bol">{video?.mime_type.replace("/"," ").toUpperCase()}</span>
                            <span className="text-orange-600 font-bold">{video?.resolution}</span>
                            <Link download={true} data-itag={video?.itag} href={`http://127.0.0.1:5000/download?itag=${video?.itag}`} className="bg-green-500 text-white rounded-md text-sm p-1 px-2">Télécharger</Link>
                        </div>
                    </div>
                )) : <>
                    <Empty/>
                </>}
            </div>

        </div>
    )
}

export default FormDownload;