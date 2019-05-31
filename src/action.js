
export const REQUEST_MEDIA = 'REQUEST_MEDIA';
function requestMedia(media) { 
    return {
        type: REQUEST_MEDIA,
        media
    }
}