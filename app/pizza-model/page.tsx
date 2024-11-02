'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

export default function ModelViewer() {
  const modelViewerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modelViewerRef.current) {
      const modelViewer = document.createElement('model-viewer');
      modelViewer.src = "../../pizza/pizza.gltf";
      modelViewer.poster = "path/to/your/poster-image.jpg";
      modelViewer.setAttribute('shadow-intensity', '1');
      modelViewer.setAttribute('ar', '');
      modelViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
      modelViewer.setAttribute('camera-controls', '');
      modelViewer.setAttribute('environment-image', 'neutral');
      modelViewer.setAttribute('alt', 'A 3D model');

      const arButton = document.createElement('button');
      arButton.slot = 'ar-button';
      arButton.id = 'ar-button';
      arButton.textContent = 'View in your space';
      modelViewer.appendChild(arButton);

      modelViewerRef.current.appendChild(modelViewer);

      return () => {
        if (modelViewerRef.current) {
          modelViewerRef.current.innerHTML = '';
        }
      };
    }
  }, []);

  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />
      <div 
        ref={modelViewerRef} 
        className="w-full h-[500px] bg-[#f0f0f0] relative"
      >
        {/* model-viewer will be inserted here */}
      </div>
      <style jsx>{`
        #ar-button {
          background-color: #4285f4;
          color: white;
          border-radius: 18px;
          padding: 10px;
          position: absolute;
          bottom: 10%;
          transform: translateX(-50%);
        }
      `}</style>
    </>
  );
}