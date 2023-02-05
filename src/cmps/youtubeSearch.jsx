

export async function searchYouTube(q) {
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