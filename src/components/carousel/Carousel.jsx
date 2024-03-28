// "use client"
// import { React, useState } from "react";
import Link from 'next/link';

export function Carousel () {



  return (

    <div className="relative bg-gray-900">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        src="/resumeImages/190001.jpg"
        alt="Background"
      />
      <div className="absolute inset-0 bg-black opacity-75" />
      <div className="max-w-screen-xl mx-auto relative z-2 text-white text-left py-20 px-8">
        <h2 className="text-4xl font-bold mb-6">Descubre el mundo del hogar inteligente</h2>
        <p className="text-lg mb-8">Aprende sobre las últimas tecnologías y tendencias en hogares inteligentes. Desde sistemas de seguridad hasta dispositivos de automatización, estamos aquí para guiarte.</p>
        <Link href="/blog">
          <p className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors duration-300">Explora nuestras publicaciones</p>
        </Link>
      </div>
    </div>  



  )
}
