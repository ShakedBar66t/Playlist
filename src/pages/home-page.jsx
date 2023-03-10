import { useState } from 'react';
import { AppHeader } from "../cmps/app-header";
import { VideoContainer } from '../cmps/video-container';
import { VideosList } from "../cmps/videos-list";

export function HomePage() {

    return <section>
        <AppHeader />
        <VideosList />
        {/* <VideoContainer /> */}
    </section>
}

function App() {
    const [query, setQuery] = useState('European history');
    const [list, setList] = useState(null);


    async function searchYouTube(q) {
        q = encodeURIComponent(q);
        const response = await fetch("https://youtube-search-results.p.rapidapi.com/youtube-search/?q=" + q, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "youtube-search-results.p.rapidapi.com",
                "x-rapidapi-key": 'bb91086babmsh3863b19320e9ea8p11a0a2jsn96a28265047c'
            }
        });
        const body = await response.json();
        console.log(body);
        return body.items.filter(item => item.type === 'video');
    }

    const search = (e) => {
        e.preventDefault();
        searchYouTube(query).then(setList);
    };

    return (
        <div className="app">
            <form onSubmit={search}>
                <input autoFocus value={query} onChange={e => setQuery(e.target.value)} />
                <button>Search YouTube</button>
            </form>
        
        </div>
    );
}

export default App;
