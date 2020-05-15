import axios from 'axios';
import * as types from './types';

const filterResToPayload = res => ({
    items: res.data.items.map(item => ({
        id: item.id,
        length: item.contentDetails.duration,
        pic: item.snippet.thumbnails.standard || {url: ""},
        title: item.snippet.title,
        description: item.snippet.description
    })),
        nextPageToken: res.data.nextPageToken
});

export const loadVideos = () => async dispatch => {
    const res = await axios.get('/api/videos');
    const payload = filterResToPayload(res)
    dispatch({ type: types.LOAD_VIDEOS, payload: payload })
};

export const loadCollectVideos = () => async dispatch => {
    const collectRes = await axios.get('/api/collects');
    const videoIdArray = collectRes.data.map(item => item.videoId);
    const videoIds = videoIdArray.toString()
    
    let videoRes,
    payload;
    if (videoIds !== "") {
        videoRes = await axios.get(`/api/videos/${videoIds}`);
        payload = filterResToPayload(videoRes);
    } else {
        payload = {
            items: [],
            nextPageToken: undefined
        };
    }
    
    dispatch({ type: types.LOAD_COLLECTS, payload: payload });
};

export const doCollect = videoId => async dispatch => {
    const data = {
        videoId: videoId
    };
    await axios.post('/api/collects', data);
    const videoRes = await axios.get(`/api/videos/${videoId}`);
    const payload = filterResToPayload(videoRes);

    dispatch({ type: types.DO_COLLECT, payload: payload, id: videoId})
};

export const deleteCollect = videoId => async dispatch => {
    await axios.delete(`/api/collects/${videoId}`);

    dispatch({ type: types.DELETE_COLLECT, id: videoId })
};