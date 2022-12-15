let video = document.getElementById('video');
let button = document.getElementById('button');

async function getVideo(){
    try{
        const stream = await navigator.mediaDevices.getDisplayMedia();
        console.log(video);
        video.srcObject = stream;
        video.onloadedmetadata = () => {
            video.play();
            video.requestPictureInPicture();

        }
    }catch(e){
        console.log('error',e);
    }

}
button.addEventListener('click', () => {
    getVideo();
})