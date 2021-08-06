import {database} from '../firebase/firebase.js';
export const loadVideo = (listVideo) => {
    return {
        type: 'LOAD_VIDEO',
        listVideo: listVideo,
    }
}
export const startLoadVideo = () => {
    return (dispatch) => {
        return database.ref('video').once('value').then((snapshot) => {
            const listVideo = [];
            snapshot.forEach((video) => {
                listVideo.push(video.val());
            })
            dispatch(loadVideo(listVideo));
        })
    }
}