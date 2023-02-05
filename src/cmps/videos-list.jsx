import { useSelector } from "react-redux"
import { VideoPreview } from "./video-preview.jsx"
import { store } from '../store/store.js'

export function VideosList() {
    const list = useSelector(storeState => storeState.videoModule.videos)
    console.log(list)
    return (list && (list.length === 0 ? <p>No results</p> :
        (
            <ul className="items">
                {list.map((video, index) => {
                    <VideoPreview video={video} key={index} />
                })}
            </ul>
        )
    )
    )
}