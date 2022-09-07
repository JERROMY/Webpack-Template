
import Bear from './bear.jpg';
import './bear-image.scss';

class BearImage {
    render() {
        const img = document.createElement('img');
        img.src = Bear;
        img.alt = 'Bear';
        img.classList.add( 'bear-image' );
        const body = document.querySelector( 'body' );
        body.appendChild( img );
    }
}

export default BearImage;