import HelloWorldButton from './components/hellow-world-button/hello-world-button.js';
import Heading from "./components/heading/heading.js";


const head = new Heading();
head.render();

const head2 = new Heading();
head2.render();

const hBtn = new HelloWorldButton();
hBtn.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
}else{
    console.log('Development mode');
}

hBtn.methodThatDoesNotExist();

