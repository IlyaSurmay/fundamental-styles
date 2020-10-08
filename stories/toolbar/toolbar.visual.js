import * as stories from './toolbar.stories.js';

export default {
    title: 'Visual/Toolbar',
    parameters: {
        components: ['toolbar', 'button', 'icon', 'popover']
    }
};

export const Toolbar = () => {
    const storyNames = Object.keys(stories).filter(story => story !== 'default');
    const div = document.createElement('div');
    div.innerHTML = storyNames.map(function(item) {
        return '<div>' + stories[item]() + '</div>';
    }).join('');
    return div;
};
