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
    url = request.args.get('title')
    try:
        yt = YouTube(url)

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

    except VideoUnavailable as e:
        print(f"Error: Video is unavailable - {e}")
        return jsonify({'error': 'Video is unavailable'})

    except Exception as e:
        print(f"Error: An unexpected error occurred - {e}")
        return jsonify({'error': 'An unexpected error occurred'})



if __name__ == '__main__':
    app.run(debug=True)