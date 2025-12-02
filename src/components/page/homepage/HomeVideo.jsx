"use client"
import React, { useState, useEffect, useRef } from 'react'
import Heading from '../../typography/Heading';
import PlayIcon from '../../icons/PlayIcon';

const HomeVideo = ({ data }) => {
    const [video, setVideo] = useState(false);
    const videoContainerRef = useRef(null);
    
    // Extract YouTube video ID from URL
    const getYouTubeVideoId = (url) => {
        if (!url) return null;
        
        // Handle different YouTube URL formats
        const patterns = [
            /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
            /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
            /youtu\.be\/([^&\n?#]+)/
        ];
        
        for (const pattern of patterns) {
            const match = url.match(pattern);
            if (match) return match[1];
        }
        
        return null;
    };
    
    const youtubeVideoId = getYouTubeVideoId(data?.data?.video_url);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape" && document.fullscreenElement) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        };

        const handleFullscreenChange = () => {
            const isFullscreen = !!document.fullscreenElement;
            if (videoContainerRef.current) {
                if (isFullscreen) {
                    videoContainerRef.current.setAttribute("data-lenis-prevent", "");
                } else if (!video) {
                    videoContainerRef.current.removeAttribute("data-lenis-prevent");
                }
            }
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            window.removeEventListener("keydown", handleKeyDown);
            if (videoContainerRef.current) {
                videoContainerRef.current.removeAttribute("data-lenis-prevent");
            }
        };
    }, [video]);

    useEffect(() => {
        if (videoContainerRef.current) {
            if (video) {
                videoContainerRef.current.setAttribute("data-lenis-prevent", "");
            } else if (!document.fullscreenElement) {
                videoContainerRef.current.removeAttribute("data-lenis-prevent");
            }
        }
    }, [video]);

    return (
        <section className='relative'>
            <div className="flex items-center justify-center h-full mb-8">
                <Heading tag="h2" variant="h2" className="text-app-dark text-center">
                    {data?.data?.section_title}
                </Heading>
            </div>

            <div className="relative w-full max-w-[1840px] mx-auto" ref={videoContainerRef}>
                {video && youtubeVideoId ? (
                    <div className="relative">
                        <iframe
                            className="w-full h-auto aspect-video rounded-[16px]"
                            src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                        <button
                            onClick={() => setVideo(false)}
                            className="absolute top-4 right-4 bg-white text-black rounded-full px-4 py-2 text-sm font-medium shadow-lg hover:bg-gray-200 z-20 cursor-pointer"
                        >
                            Close
                        </button>
                    </div>
                ) : (
                    <div className="relative">
                        <img
                            className="w-full h-auto aspect-video object-cover rounded-[16px]"
                            src={youtubeVideoId ? `https://img.youtube.com/vi/${youtubeVideoId}/maxresdefault.jpg` : data?.data?.thumbnail}
                            alt="Video thumbnail"
                        />
                        {youtubeVideoId && (
                            <button
                                onClick={() => setVideo(true)}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 focus:outline-none cursor-pointer"
                            >
                                <PlayIcon className='w-[60px] h-[60px] lg:w-[120px] lg:h-[120px]' />
                            </button>
                        )}
                    </div>
                )}
            </div>
        </section>
    )
}

export default HomeVideo;