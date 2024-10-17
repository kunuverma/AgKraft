import { useRef, useState, useEffect } from 'react';
import LoadingSpinner from '@/app/_components/common/Loading-spinner';

const Slider: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isLoading, setIsLoading] = useState(true);

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    const handleVideoLoaded = () => {
        setIsLoading(false);
    };

    return (
        <>
            {/* <Navbar/> */}
            <div className="relative  w-full h-screen">
                {/* Loading Spinner */}
                {isLoading && (
                    <LoadingSpinner/>
                )}

                <video
                    ref={videoRef}
                    className="w-full h-full object-cover hidden lg:block"
                    autoPlay
                    loop
                    muted
                    onClick={handleVideoClick} // Handle play/pause on click
                    onLoadedData={handleVideoLoaded} // Video is loaded
                >
                    <source src="/assest/agkraft.mp4" type="video/mp4" />
                </video>

                {/* Mobile */}
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover block lg:hidden"
                    autoPlay
                    loop
                    muted
                    onClick={handleVideoClick} // Handle play/pause on click
                    onLoadedData={handleVideoLoaded} // Video is loaded
                >
                    <source src="/assest/agkraftmobile.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    );
};

export default Slider;
