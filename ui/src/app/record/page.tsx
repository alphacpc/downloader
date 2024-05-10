"use client"
import React, {useState, useRef, useEffect} from 'react'

let classnames = "p-2 mr-2 rounded shadow"


export default function Page() {

    const [isRecording, setIsRecording] = useState(false);
    const audioChunksRef = useRef([]);
    const mediaRecorderRef = useRef(null);



    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true })
          .then((stream) => {
            const mediaRecorder = new MediaRecorder(stream);
    
            mediaRecorder.ondataavailable = (e) => {
              if (e.data.size > 0) {
                audioChunksRef.current.push(e.data);
              }
            };
    
            mediaRecorder.onstop = () => {
              const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
              uploadAudio(audioBlob);
              audioChunksRef.current = []; // Réinitialise les morceaux après l'envoi
            };
    
            mediaRecorder.start();
            setIsRecording(true);
            mediaRecorderRef.current = mediaRecorder;
          })
          .catch((error) => {
            console.error('Error accessing microphone:', error);
          });
      };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
          mediaRecorderRef.current.stop();
          setIsRecording(false);
        }
      };

      const uploadAudio = async (audioBlob) => {
        const apiUrl = 'https://votre-api-url.com/upload';
    
        const formData = new FormData();
        formData.append('audio', audioBlob);
    
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            body: formData,
          });
    
          if (response.ok) {
            console.log('Audio upload successful!');
          } else {
            console.error('Error uploading audio');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
    

      useEffect(() => {
        const interval = setInterval(() => {
          if (isRecording) {
            mediaRecorderRef.current.requestData();
          }
        }, 5000); // Envoie toutes les 5 secondes
    
        return () => clearInterval(interval);
      }, [isRecording]);


    

    return <main className="h-[80vh] mx-[10%] md:mx-[5%]">
        <div>
            <button className={`${classnames} bg-green-500 text-white`} disabled={false}>
                Commencer l'enregistrement
            </button>
            <button className={`${classnames} bg-red-500 text-white`} disabled={false}>
                Arrêter l'enregistrement
            </button>
        </div>
    </main>
  }