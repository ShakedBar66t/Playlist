
export const SET_VIDEOS = 'SET_VIDEOS'
export const SET_VIDEO_URL = 'SET_VIDEO_URL'

const initialState = {
    videos: [],
    searchDetails: { location: '' }
}

export function videoReducer(state = initialState, action) {
    var newState = state
    var videos

    switch (action.type) {
        case SET_VIDEOS:
            newState = { ...state, videos: action.videos }
            break

        case SET_VIDEO_URL:
            newState = { ...state, videoUrl: action.videoUrl }

        break

    }
    return newState
}