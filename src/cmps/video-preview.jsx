
import { SET_VIDEO_URL } from "../store/reducers/video.reducer"
import { store } from '../store/store.js'

export function VideoPreview(item, key) {
    console.log(item)

    const url = item.url
    return <li key={key} className="item" onClick={store.dispatch({ type: SET_VIDEO_URL, url })}>
        <div>
            <b><a href={item.link}>{item.title}</a></b>
            <p>{item.description}</p>
        </div>
        <ul className="meta">
            <li>By: <a href={item.author.ref}>{item.author.name}</a></li>
            <li>Views: {item.views}</li>
            <li>Duration: {item.duration}</li>
            <li>Uploaded: {item.uploaded_at}</li>
        </ul>
        <img alt="" src={item.thumbnail} />
    </li>
}

// export function VideoPreview(video, key) {
//     const url = video.url
//     return <li key={key} className="video" onClick={store.dispatch({ type: SET_VIDEO_URL, url })}>
//         <div>
//             <b><a href={video.link}>{video.title}</a></b>
//             <p>{video.description}</p>
//         </div>
//         <ul className="meta">
//             <li>By: <a href={video.author.ref}>{video.author.name}</a></li>
//             <li>Views: {video.views}</li>
//             <li>Duration: {video.duration}</li>
//             <li>Uploaded: {video.uploaded_at}</li>
//         </ul>
//         <img alt="" src={video.thumbnail} />
//     </li>
// }