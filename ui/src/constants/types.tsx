export interface VideoInfo {
    title: string;
    thumbnail_url: string;
    streams: StreamInfo[];
  }
  
export interface StreamInfo {
    itag: number;
    mime_type: string;
    resolution: string;
    fps: number;
    vcodec: string;
    acodec: string;
    progressive: boolean;
    type: string;
}