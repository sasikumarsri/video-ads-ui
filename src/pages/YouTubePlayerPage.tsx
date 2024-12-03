import React, { useEffect, useState } from 'react';
import YouTubePlayer from '../components/YouTubePlayer';
import { getVideos } from '../api/videos';

const YouTubePlayerPage: React.FC = () => {
    const [videoIds, setVideoIds] = useState<string[]>([]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const data = await getVideos();
                console.log("Fetched data:", data);
                const videos = data.map((element: any) => element.video.url);
                console.log("Video URLs:", videos);
                setVideoIds(videos);
            } catch (err) {
                console.error("Error fetching videos:", err);
            }
        };
        console.log('test dappa')

        fetchVideos();
    }, []);

    useEffect(() => {
        console.log("Updated videoIds:", videoIds);
    }, [videoIds]);

    return (
        <div>
            <YouTubePlayer videoIds={videoIds} />
        </div>
    );
};

export default YouTubePlayerPage;
