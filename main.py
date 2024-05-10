from pprint import pprint
from flask import Flask, jsonify, request
from pytube import YouTube
from pytube.exceptions import VideoUnavailable
from flask_cors import CORS
from datetime import datetime



app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    try:
        yt = YouTube('https://www.youtube.com/watch?v=IYk6sCMqlvQ&pp=ygUOdGhvbWFzIHNhbmthcmE%3D')

        video_info = {
            'title': yt.title,
            'thumbnail_url': yt.thumbnail_url,
            'streams': [
                {
                    'itag': stream.itag,
                    'mime_type': stream.mime_type,
                    'resolution': stream.resolution,
                    # 'fps': stream.fps,
                    'vcodec': stream.video_codec,
                    'acodec': stream.audio_codec,
                    'progressive': stream.is_progressive,
                    'type': stream.type,
                } for stream in yt.streams.filter(subtype='mp4')
            ]
        }

        pprint(video_info)

        return jsonify(video_info)

        # return yt.streams

    except VideoUnavailable as e:
        print(f"Error: Video is unavailable - {e}")

    except Exception as e:
        print(f"Error: An unexpected error occurred - {e}")



@app.route('/upload', methods=['POST'])
def upload_audio():
    try:
        maintenant = datetime.now()
        nom_fichier_original = "audio"

        audio_file = request.files['audio']
        # Vous pouvez traiter le fichier audio ici (sauvegarde, analyse, etc.)
        # Par exemple, pour sauvegarder le fichier sur le serveur :
        audio_file.save(f"./data/audio_{maintenant}.mp3")
        return 'Audio upload successful!', 200
    
    
    except Exception as e:
        print(f'Error uploading audio: {e}')
        return 'Error uploading audio', 500


if __name__ == '__main__':
    app.run(debug=True)