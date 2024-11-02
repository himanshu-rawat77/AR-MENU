'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Script from 'next/script';

function ModelViewerComponent({ src, alt, iosSrc }: { src: string; alt: string; iosSrc: string }) {
  const modelRef = useRef<HTMLDivElement>(null);
  const modelViewerRef = useRef<any>(null);

  useEffect(() => {
    if (modelRef.current) {
      const modelViewer = document.createElement('model-viewer') as HTMLModelViewerElement;
      modelViewer.src = src;
      modelViewer.alt = alt;
      modelViewer.setAttribute('auto-rotate', '');
      modelViewer.setAttribute('camera-controls', '');
      modelViewer.setAttribute('ar', '');
      modelViewer.setAttribute('ar-modes', 'webxr scene-viewer quick-look');
      modelViewer.setAttribute('ios-src', iosSrc);
      modelViewer.setAttribute('shadow-intensity', '1');
      modelViewer.setAttribute('environment-image', 'neutral');
      modelViewer.style.width = '100%';
      modelViewer.style.height = '100%';

      modelRef.current.appendChild(modelViewer);
      modelViewerRef.current = modelViewer;

      return () => {
        if (modelRef.current) {
          modelRef.current.innerHTML = '';
        }
      };
    }
  }, [src, alt, iosSrc]);

  const activateAR = () => {
    if (modelViewerRef.current && modelViewerRef.current.canActivateAR) {
      modelViewerRef.current.activateAR();
    } else {
      alert('AR is not supported on this device or browser.');
    }
  };

  return (
    <div ref={modelRef} style={{ width: '100%', height: '100%' }} />
  );
}

export default function Home() {
  return (
    <>
      <Script
        type="module"
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      />
      <div className="bg-background">
        <section className="py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Tasty Bites
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Delicious food delivered to your doorstep. Order now and satisfy your cravings!
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/menu">
                  <Button size="lg">View Menu</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" size="lg">About Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Today's Specials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12 items-start">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Chicken Caesar Salad</CardTitle>
                  <CardDescription>Fresh romaine lettuce with grilled chicken, croutons, and Caesar dressing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-48 mb-4">
                    <ModelViewerComponent 
                      src="../../ramen/scene.gltf" 
                      alt="3D model of Chicken Caesar Salad" 
                      iosSrc="../../ramen/scene.usdz"
                    />
                  </div>
                  <p className="text-2xl font-bold text-primary">$12.99</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => {
                    const modelViewer = document.querySelector('model-viewer');
                    if (modelViewer && (modelViewer as any).canActivateAR) {
                      (modelViewer as any).activateAR();
                    } else {
                      alert('AR is not supported on this device or browser.');
                    }
                  }}>View AR</Button>
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>

              <Card className="w-full">
                <CardHeader>
                  <CardTitle>Margherita Pizza</CardTitle>
                  <CardDescription>Classic Italian pizza with tomato, mozzarella, and basil</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-48 mb-4">
                    <ModelViewerComponent 
                      src="../../pizza/pizza.gltf" 
                      alt="3D model of Margherita Pizza" 
                      iosSrc="../../pizza/pizza.usdz"
                    />
                  </div>
                  <p className="text-2xl font-bold text-primary">$9.99</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => {
                    const modelViewer = document.querySelector('model-viewer');
                    if (modelViewer && (modelViewer as any).canActivateAR) {
                      (modelViewer as any).activateAR();
                    } else {
                      alert('AR is not supported on this device or browser.');
                    }
                  }}>View AR</Button>
                  <Button>Add to Cart</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Order?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Browse our menu and place your order now. Fast, easy, and delicious!
                </p>
              </div>
              <Link href="/menu">
                <Button size="lg">Order Now</Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
