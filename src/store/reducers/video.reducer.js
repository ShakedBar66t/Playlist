
export const SET_VIDEOS = 'SET_VIDEOS'
export const SET_VIDEO_URL = 'SET_VIDEO_URL'

const initialState = {
    videos: [{
        author: {
            name: 'Cottereau',
            channelID: 'UCmYAcjJNtB8UsSZjXqyx4Zg',
            url: 'https://www.youtube.com/@Cottereau1',
        },
        badges: ['4K'],
        bestThumbnail: {
            url: 'https://i.ytimg.com/vi/UY9P0QSxlnI/hq720.jpg?sqp=-…CBaKHIwDw==&rs=AOn4CLCK-VIbLcENRoRabT6d5UYr96qSpg',
            width: 720,
            height: 404
        },
        description: null,
        duration: "11:45",
        id: "UY9P0QSxlnI",
        isLive: false,
        isUpcoming: false,
        title: "The History of Europe: Every Year",
        type: "video",
        upcoming: null,
        uploadedAt: "5 years ago",
        url: "https://www.youtube.com/watch?v=UY9P0QSxlnI",
        views: 27090052
    }]

    ,
    videoUrl: ''
}

export function videoReducer(state = initialState, action) {
    let newState
    switch (action.type) {
        case SET_VIDEOS:
            newState = { ...state, videos: action.videos }
            console.log(newState.videos)
            break

        case SET_VIDEO_URL:
            newState = { ...state, videoUrl: action.videoUrl }

            break

        default:
            return state
    }
    return newState
}