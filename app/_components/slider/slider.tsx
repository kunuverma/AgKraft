import { useRef } from 'react';


const Slider: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoClick = () => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    };

    return (
        <>
        {/* <Navbar/> */}
            <div className="relative w-full h-screen">
                <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    onClick={handleVideoClick} // Handle play/pause on click
                >
                    <source src="/assest/agkraft.mp4" type="video/mp4" />
                </video>
            </div></>

    );
};

export default Slider;
