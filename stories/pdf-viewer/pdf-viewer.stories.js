import '../../dist/dialog.css';
import '../../dist/pdf-viewer.css';
import '../../dist/message-page.css';
import '../../dist/title.css';

export default {
    title: 'Components/PDF Viewer',
    parameters: {
        description: `
The PDF viewer component can be either displayed within a page or inside of a dialog.

##Usage
**Use the PDF viewer if:**

- You want your app to display PDF files on all devices and platforms.
- You want the users of your app to be able to preview their documents as PDF files right beside your app.
- You need to ensure the consistent behavior of PDF files across your app.

**Do not use the PDF viewer if:**

- You need to provide an interactive PDF file (such as a data input form).

`,
        tags: ['f3', 'a11y']
    }
};

export const dialog = () => `
<div class="fd-dialog-docs-static fd-pdf-viewer fd-dialog fd-dialog--active">
    <div class="fd-dialog__content fd-dialog__content--l" role="dialog" aria-modal="true" aria-labelledby="dialog-title-1">
        <header class="fd-dialog__header fd-bar fd-bar--header">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-1">
                        PDF Viewer title
                    </h2>
                </div>
            </div>
        </header>
        <div class="fd-dialog__body">
            <iframe
              class="fd-pdf-viewer__content"
              title='PDF viewer'
              src="https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/sample/PDFViewerEmbedded/sample.pdf#view=FitH"}
              frameBorder='0'></iframe>
        </div>
        <footer class="fd-dialog__footer fd-bar fd-bar--footer">
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--compact">
                        Download
                    </button>
                </div>
                <div class="fd-bar__element">
                    <button class="fd-dialog__decisive-button fd-button fd-button--compact">
                        Close
                    </button>
                </div>
            </div>
        </footer>
    </div>
</div>
`;

dialog.storyName = 'Dialog';
dialog.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'When displayed in a dialog, download and close buttons are in the footer. The PDF Viewer dialog does not support resizing. For mobile, ensure the modal takes up the entire screen by using the <code>.fd-dialog__content--mobile</code> class.'
    }
};

export const page = () => `
    <div class="fd-pdf-viewer">
        <div class="fd-pdf-viewer__title fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-1">
                        PDF Viewer title
                    </h2>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="Download" class="fd-button fd-button--transparent">
                        <i class="sap-icon--download"></i>
                    </button>
                </div>
            </div>
        </div>
        <iframe
          class="fd-pdf-viewer__content--in-page"
          title='PDF viewer'
          src="https://sapui5.hana.ondemand.com/test-resources/sap/m/demokit/sample/PDFViewerEmbedded/sample.pdf#view=FitH"}
          frameBorder='0'></iframe>
    </div>
`;

page.storyName = 'In-Page';
page.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'Unlike the dialog version, the download button is on the title bar and there is no close button.'
    }
};

export const error = () => `
    <div class="fd-pdf-viewer fd-pdf-viewer--in-page">
        <div class="fd-pdf-viewer__title fd-bar">
            <div class="fd-bar__left">
                <div class="fd-bar__element">
                    <h2 class="fd-title fd-title--h5" id="dialog-title-1">
                        PDF Viewer title
                    </h2>
                </div>
            </div>
            <div class="fd-bar__right">
                <div class="fd-bar__element">
                    <button aria-label="Download" class="fd-button fd-button--transparent">
                        <i class="sap-icon--download"></i>
                    </button>
                </div>
            </div>
        </div>
        <div class="fd-pdf-viewer__content fd-pdf-viewer__content--error">
            <div class="fd-message-page">
                <div class="fd-message-page__container">
                    <div class="fd-message-page__icon-container">
                        <span class="sap-icon sap-icon--documents fd-message-page__icon"></span>
                    </div>
                    <div role="status" aria-live="polite" class="fd-message-page__content">
                        <div class="fd-message-page__title">
                            The PDF document could not be loaded.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

error.storyName = 'Error';
error.parameters = {
    docs: {
        iframeHeight: 400,
        storyDescription: 'When there is an error loading the PDF document, display a Message Page component to inform the user of the error.'
    }
};