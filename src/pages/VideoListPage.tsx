import React, { useEffect, useState } from 'react';
import './UserListPage.css';
import VideosList from '../components/VideoList';
import { createVideos, getAllVideos } from '../api/videos';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import MenuItem from '../components/Menu';

interface Video {
  id: string;
  title: string;
  url: string;
  description: string;
  thumbnail_url: string;
  duration: number;
}

const VideoListPage: React.FC = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  // Function to fetch videos
  const fetchVideos = async () => {
    try {
      const data = await getAllVideos();
      setVideos(data);
    } catch (err) {
      setError('Failed to fetch videos. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  if (loading) {
    return <div className="loading">Loading videos...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  // Handler for saving the new video
  const handleSave = async () => {
    if (title && url) {
      const data = {
        title,
        description: "This is a description of the video",
        url,
        thumbnail_url: "https://example.com/thumbnail.jpg",
        duration: 120
      };

      try {
        await createVideos(data);
        setTitle(''); // Clear input after saving
        setUrl('');
        fetchVideos(); // Refetch videos after saving a new video
      } catch (err) {
        setError('Failed to create a video. Please try again.');
        console.error(err);
      }
    }
  };

  return (<>
    <div className="flex">
      <MenuItem />
      <div className="user-list-page page">
        <h1>Videos List</h1>
        <div className="flex">
          {/* Input fields for title and url */}
          <div className="p-mr-2 col-5">
            <span className="p-float-label">
              <InputText id="title" className="col-12" value={title} onChange={(e) => setTitle(e.target.value)} />
              <label htmlFor="title">Title</label>
            </span>
          </div>
          <div className="p-mr-2 col-5">
            <span className="p-float-label">
              <InputText id="url" className="col-12" value={url} onChange={(e) => setUrl(e.target.value)} />
              <label htmlFor="url">URL</label>
            </span>
          </div>

          {/* Save button */}
          <Button label="Save" className="col-2" onClick={handleSave} />
        </div>
        {videos.length > 0 ? (
          <VideosList videos={videos} />
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  </>
  );
};

export default VideoListPage;
