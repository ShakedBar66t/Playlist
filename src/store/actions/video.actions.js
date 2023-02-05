import { store } from "../store"


export async function loadVideos(filterBy) {
    try {
        const videos = await videoService.query(filterBy)
        store.dispatch({
            type: GET_VIDEOS,
            videos
        })
    } catch (err) {
        console.log('Cannot load videos', err)
        throw err
    }
}