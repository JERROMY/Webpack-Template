import Heading from "./components/heading/heading.js";
import BearImage from "./components/bear-image/bear-image.js";
import React from 'react';

const head = new Heading();
head.render( 'bear' );

const bear = new BearImage();
bear.render();