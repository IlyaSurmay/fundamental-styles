import * as stories from './slider.stories.js';

export default {
    title: 'Visual/Slider',
    parameters: {
        components: ['slider']
    }
};

export const Slider = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
