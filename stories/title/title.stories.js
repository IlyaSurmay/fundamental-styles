export default {
    title: 'Components/Title',
    parameters: {
        description: `
A title component whose semantic level and visual appearance can be set separately, providing flexibility in design while adhering to accessibility best practices.`,
        tags: ['f3'],
        components: ['title']
    }
};

export const levels = () => `<h1 class="fd-title fd-title--h1">Title Level 1</h1>
<h2 class="fd-title fd-title--h2">Title Level 2</h2>
<h3 class="fd-title fd-title--h3">Title Level 3</h3>
<h4 class="fd-title fd-title--h4">Title Level 4</h4>
<h5 class="fd-title fd-title--h5">Title Level 5</h5>
<h6 class="fd-title fd-title--h6">Title Level 6</h6>
`;

levels.storyName = 'Semantic Level';
levels.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'There are 6 semantic levels of a heading element. There should only be one H1 on a page, and headings should only appear in ascending order without skipping a level; i.e. even if there are only 3 levels on a page, the order must be H1-H2-H3, and no other levels used.'
    }
};

export const visualLevel = () => `<h1 class="fd-title fd-title--h6">Title Level 1</h1>
<h2 class="fd-title fd-title--h5">Title Level 2</h2>
<h3 class="fd-title fd-title--h4">Title Level 3</h3>
<h4 class="fd-title fd-title--h3">Title Level 4</h4>
<h5 class="fd-title fd-title--h2">Title Level 5</h5>
<h6 class="fd-title fd-title--h1">Title Level 6</h6>
`;

visualLevel.storyName = 'Visual Level';
visualLevel.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'If a design requires it, the visual level can be set to something different than the semantic level. This allows the sequential order to be maintained while providing flexibility in appearance.'
    }
};

export const elision = () => `<div style="width: 300px">
    <h1 class="fd-title fd-title--h1">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    <h2 class="fd-title fd-title--h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    <h3 class="fd-title fd-title--h3">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    <h4 class="fd-title fd-title--h4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
    <h5 class="fd-title fd-title--h5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
    <h6 class="fd-title fd-title--h6">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
</div>
`;

elision.storyName = 'Text Elision';
elision.parameters = {
    docs: {
        iframeHeight: 250,
        storyDescription: 'By default the Title text overflow will be elided when longer than its container.'
    }
};

export const wrapping = () => `<div style="width: 300px">
    <h1 class="fd-title fd-title--h1 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
    <h2 class="fd-title fd-title--h2 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
    <h3 class="fd-title fd-title--h3 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
    <h4 class="fd-title fd-title--h4 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
    <h5 class="fd-title fd-title--h5 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
    <h6 class="fd-title fd-title--h6 fd-title--wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
</div>
`;

wrapping.storyName = 'Text Wrapping';
wrapping.parameters = {
    docs: {
        iframeHeight: 300,
        storyDescription: 'Add the `--wrap` modifier to cause the overflow text to wrap instead.'
    }
};
