
import Bear from './bear.jpg';
import test from './test.txt';

function addImage() {
    const img = document.createElement( 'img' );
    img.alt = test;
    img.width = "1000";
    img.src = Bear;
    const body = document.querySelector( 'body' );
    body.appendChild( img );
}

export default addImage;