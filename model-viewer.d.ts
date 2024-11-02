// model-viewer.d.ts
declare module '@google/model-viewer' {
    import * as React from 'react';

    interface ModelViewerProps extends React.HTMLProps<HTMLElement> {
        src: string;
        alt: string;
        autoRotate?: boolean;
        cameraControls?: boolean;
        [key: string]: any; // Allow other props as well
    }

    const ModelViewer: React.FC<ModelViewerProps>;
    export default ModelViewer;
}

declare namespace JSX {
  interface IntrinsicElements {
    'model-viewer': any; // You can specify more detailed types if needed
  }
}
