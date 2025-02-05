import SliderThumb from '../components/Slider/assets/slider.svg';

export let SliderConfig = {
    sliderBackground: '#F08D32',
    sliderHeight: '10px',
    sliderWidth: '100%',
    sliderTransition: 'all ease-in-out 0.05s',
};

export let ThumbConfig = {
    thumbWidth: '40px',
    thumbHeight: '40px',
    thumbBackground: `url(${SliderThumb}) no-repeat center`,
    thumbBackgroundSize: 'contain',
    thumbBackgroundColor: 'transparent',
    thumbBorder: '0px',
    thumbBorderRadius: '50%',
};
