import React, { useEffect, useState } from 'react';
import YouTubePlayer from '../components/YouTubePlayer';
import { getVideos } from '../api/videos';

const YouTubePlayerPage: React.FC = () => {
    const [videoIds, setVideoIds] = useState<string[]>([]);
    const [assigned, setAssigned] = useState<boolean>(false); // Track if video is assigned

    // Function to fetch videos and check if video is assigned
    const fetchVideos = async () => {
        try {
            const data = await getVideos();
            console.log("Fetched data:", data);

            // Assuming your API provides a flag to check if video is assigned
            const videos = data.map((element: any) => element.video.url);
            console.log("Video URLs:", videos);
            setVideoIds(videos);

            // If a condition is met (e.g., video is assigned), stop polling
            // Assuming you have a flag like `element.assigned` or similar in the API response
            if (data.some((element: any) => element.assigned)) {
                setAssigned(true);
                console.log("Video assigned, stopping polling...");
            }
        } catch (err) {
            console.error("Error fetching videos:", err);
        }
    };

    useEffect(() => {
        // Fetch videos initially
        fetchVideos();

        // Set interval to fetch videos every 3 minutes (3 * 60 * 1000 ms)
        const interval = setInterval(() => {
            if (!assigned) {  // Continue fetching until video is assigned
                console.log("Fetching videos...");
                fetchVideos();
            } else {
                console.log("Video assigned, stopping polling.");
                clearInterval(interval);  // Stop polling if video is assigned
            }
        }, 3 * 60 * 1000); // 3 minutes in milliseconds

        // Cleanup: clear interval when the component is unmounted or condition is met
        return () => clearInterval(interval);
    }, [assigned]); // Rerun when 'assigned' state changes

    return (
        <>
            {videoIds.length ? (
                <div>
                    <YouTubePlayer videoIds={videoIds} />
                </div>
            ) : (
                <div style={loadingStyle} className='flex'>
                    <img
                        src="../../public/logo.png" // You can replace this with your own loading image
                        alt="Loading..."
                        style={imageStyle}
                    />
                    <h3>No Ads Assigned</h3>
                </div> // Optionally show a loading state when no videoIds
            )}
        </>
    );
};


// Styles for the loading screen and image
const loadingStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100vh', // Full viewport height
    backgroundImage: 'linear-gradient(to top, #dfe9f3 0%, white 100%)',
    backgroundSize: 'cover',
};

const imageStyle: React.CSSProperties = {
    width: '30%', // You can change the size of the loading image
};

export default YouTubePlayerPage;
