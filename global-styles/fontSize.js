import { Dimensions, Platform, PixelRatio } from 'react-native';

let SCREEN_WIDTH = Dimensions.get('window').width; // get current width
let SCALE = 375; // constant, 375 is standard width of  iphone 6 / 7 / 8 

export const size = (size) => {
    const ratio = size / SCALE; // get ratio based on your standard scale 
    const newSize = Math.round(ratio * SCREEN_WIDTH);
    return newSize; 
}