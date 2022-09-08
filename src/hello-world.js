import HelloWorldButton from './components/hellow-world-button/hello-world-button.js';
import Heading from "./components/heading/heading.js";
import React from 'react';



const head = new Heading();
head.render( 'hello world' );

const hBtn = new HelloWorldButton();
hBtn.render();

if (process.env.NODE_ENV === 'production') {
    console.log('Production mode');
}else{
    console.log('Development mode');
}

hBtn.methodThatDoesNotExist();

