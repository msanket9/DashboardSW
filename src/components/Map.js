import React from 'react'
import Navbar from './Navbar'

export default function Map() {
  return (
    <div className="font-roboto bg-gray-200 dark:bg-gray-900 h-screen overflow-hidden">
      
      <Navbar/>
      
      <div class="flex flex-row">
        <div class="flex-auto lg:border lg:border-l border-t border-gray-300 dark:border-gray-700 lg:rounded-t-xl bg-white dark:bg-gray-800 h-screen relative">
            <iframe width="100%" 
                    height="100%" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0" 
                    title="Saaf-Water-light" 
                    src="//www.arcgis.com/apps/Embed/index.html?webmap=fbadf2d08dd141aa8fbfe60a227e189b&extent=73.5435,15.0755,74.5577,15.6462&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=light">
            </iframe>
            <iframe width="100%" 
                    height="100%" 
                    frameborder="0" 
                    scrolling="no" 
                    marginheight="0" 
                    marginwidth="0" 
                    title="Saaf-Water-Dark" 
                    src="//www.arcgis.com/apps/Embed/index.html?webmap=3c0c2dc817994509b9d529f7000b3a85&extent=50.3459,3.4536,115.2531,38.1566&zoom=true&previewImage=false&scale=true&search=true&searchextent=true&disable_scroll=true&theme=dark">
            </iframe>
        </div>

      </div>
    </div>
    ); 
}