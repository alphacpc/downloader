from pprint import pprint
from flask import Flask, jsonify
from pytube import YouTube
from pytube.exceptions import VideoUnavailable
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    try:
        yt = YouTube('https://www.youtube.com/watch?v=0tuI1pIgY7w')

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


if __name__ == '__main__':
    app.run(debug=True)