import WindowControls from '#components/WindowControls'
import WindowWrapper from '#hoc/WindowWrapper'
import React from 'react'
import { PanelLeft, ChevronLeft, ChevronRight, ShieldHalf, Search, Share, Plus, Copy, MoveRight } from 'lucide-react'
import { blogPosts } from '#constants'

const Safari = () => {
  return (
    <>
    <div id='window-header'>
        <WindowControls target= "safari"/>

        <PanelLeft  className='ml-10 icon'/>

        <div className='flex items-center gap-1 ml-5'>
            <ChevronLeft className='icon'/>
            <ChevronRight className='icon'/>
        </div>
        <div className='flex-1 flex-center gap-3'>
            <ShieldHalf className='icon'/>

            <div className='search'>
                <Search className='icon'/>

                <input 
                    type="text"
                    placeholder='Search or enter website name'
                    className='flex-1' />
            </div>

        </div>

        <div className='flex items-center gap-5'>
            <Share className='icon'/>
            <Plus className='icon'/>
            <Copy className='icon'/>
        </div>
    </div>
    
    {/* Compact Blog Section */}
    <div className="blog-scroll-container">
        <div className="blog-container">
            <h2 className="blog-title">My Project</h2>
            <div className="blog-posts-grid">
                {blogPosts.map(({id, image, title, date, link}) => (
                    <div key={id} className="blog-post-card">
                        <div className="blog-image-wrapper">
                            <div className="blog-image-container">
                                <img 
                                    src={image} 
                                    alt={title} 
                                    className="blog-image"
                                />
                            </div>
                        </div>
                        
                        <div className="blog-content">
                            <p className="blog-date">{date}</p>
                            <h3 className="blog-post-title">{title}</h3>
                            <a 
                                href={link} 
                                target='_blank' 
                                rel="noopener noreferrer"
                                className="blog-link"
                            >
                                Check out full project 
                                <MoveRight className="link-arrow"/>
                            </a>
                        </div>
                    </div>                 
                ))}
            </div>
        </div>
    </div>
    </>
  )
}

const SafariWindow = WindowWrapper(Safari, "safari")

export default SafariWindow