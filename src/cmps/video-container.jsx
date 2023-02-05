import { useSelector } from "react-redux"



export function VideoContainer() {
    const videoUrl = useSelector(storeState => storeState.videoModule.videoUrl)

    return (
        <section className="video-play">
            <iframe src={videoUrl}></iframe>
        </section>
    )
}