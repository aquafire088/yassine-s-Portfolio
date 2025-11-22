import React, { use, useRef } from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';


const FONT_WEIGHTS={
    subtitle : {min : 100, max : 400, default: 100},
    title : {min : 400, max : 900, default: 400}
}

const renderText = (text, className, baseWieght = '400') => {
    return [...text].map((char, i) => (
        <span
            key={i}
            className={className}
            style = {{fontVariationSettings: `'wght' ${baseWieght}`}}
        >
            {char === " " ? '\u00A0' : char}
        </span>
    ))
}

const setupTextHover = (container, type) => {
    if (!container) return () => {};

    const Letters = container.querySelectorAll("span");

    const {min, max, default : base }= FONT_WEIGHTS[type];

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            fontVariationSettings: `'wght' ${weight}`,
            ease: "power2.out"
            });
        }
    
    const handleMouseMove = (e) => {
        const {left} = container.getBoundingClientRect();
        const mouseX = e.clientX - left;

        Letters.forEach((letter) => {
            const {left : l, width: w} = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l- left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 20000);
            animateLetter(letter, min + (max - min) * intensity);
            })
        }
    const handleMouseLeave = () => {
        Letters.forEach((letter) => animateLetter(letter, base, 0.3));
        }


    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);
    }
}




const Welcome = () => {
  const titleRef =useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const tiileCleanup = setupTextHover(titleRef.current, 'title');
    const subtiileCleanup = setupTextHover(subtitleRef.current, 'subtitle');
    
    return () => {
        tiileCleanup && tiileCleanup();
        subtiileCleanup && subtiileCleanup();
    }
  }, []);
    return (
        <section id='welcome'>
            <p ref ={subtitleRef}>
                {renderText("Hey, I'm Yassine! Welcome to my", 'text-3xl font-georama', 100)}
            </p>
            <h1 ref={titleRef} className='mt-7'>
                {renderText("Portfolio", 'text-9xl italic font-georama')}
            </h1>
                
        </section>
    )
}

export default Welcome