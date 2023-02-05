import { useState } from "react"
import { store } from '../store/store.js'
import { SET_VIDEOS } from "../store/reducers/video.reducer.js"

export function AppHeader() {
    const [youtubeSearch, setYoutubeSearch] = useState('European history')

    async function searchYouTube(q) {
        q = encodeURIComponent(q)
        const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
                "x-rapidapi-key": 'bb91086babmsh3863b19320e9ea8p11a0a2jsn96a28265047c'
            }
        })
        const body = await response.json()
        console.log(body)
        return body.items.filter(item => item.type === 'video')
    }

    const search = async (e) => {
        e.preventDefault()
        const videos = await searchYouTube(youtubeSearch)
        store.dispatch({ type: SET_VIDEOS, videos })
    }


    return <header className="app-header">
        <form onSubmit={search}>
            <input autoFocus placeholder="Search" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button>
                <AiOutlineSearch/>
            </button>
        </form>
    </header>


}