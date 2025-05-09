'use client'

import { useEffect, useRef } from 'react'
import {charming} from '@/lib/charming'
import gsap from 'gsap'
import {cn} from "@/lib/utils";

const getMousePos = (e: MouseEvent | TouchEvent) => {
    let posx = 0
    let posy = 0
    if ('touches' in e && e.touches.length) {
        posx = e.touches[0].pageX
        posy = e.touches[0].pageY
    } else if ('pageX' in e) {
        posx = e.pageX
        posy = e.pageY
    }
    return { x: posx, y: posy }
}

const getRandomFloat = (min: number, max: number) =>
    parseFloat((Math.random() * (max - min) + min).toFixed(2))

export default function HoverImageEffect({ text, img, className, link }: { text: string; img: string, className?: string, link?: string }) {
    const containerRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const textEl = el.querySelector('.hover-effect-text') as HTMLElement
        if (!textEl) return

        const totalImages = 10
        const reveal = document.createElement('div')
        reveal.className = 'hover-reveal'
        el.appendChild(reveal)

        // inject image slices
        for (let i = 0; i < totalImages; i++) {
            const div = document.createElement('div')
            div.className = 'hover-reveal__img'
            div.style.position = 'absolute'
            div.style.backgroundImage = `url(${img})`
            reveal.appendChild(div)
        }

        const revealImgs = [...reveal.querySelectorAll('.hover-reveal__img')]
        const rect = reveal.getBoundingClientRect()

        charming(textEl, {
            tagName: 'span',
            split: (text) => text.split(''),
            setClassName: (i, char) => `letter-${i}`,
        })
        const letters = [...textEl.querySelectorAll('span')]

        const positionElement = (ev: MouseEvent | TouchEvent) => {
            const mousePos = getMousePos(ev)
            const docScrolls = {
                top: document.documentElement.scrollTop || document.body.scrollTop,
                left: document.documentElement.scrollLeft || document.body.scrollLeft,
            }

            reveal.style.top = `${mousePos.y - rect.height - 20 - docScrolls.top}px`
            reveal.style.left = `${mousePos.x - rect.width - 100 - docScrolls.left}px`
        }

        const animateLetters = () => {
            gsap.killTweensOf(letters);
            letters.forEach((letter) => {
                const opts = Math.round(Math.random()) === 0 ? { x: '-100%', opacity: 0 } : { opacity: 0 };
                gsap.set(letter, opts);
            });

            gsap.to(letters, {
                duration: 1,
                ease: 'expo.out',
                x: '0%',
                opacity: 1,
            });
        };

        const showImage = () => {
            gsap.killTweensOf(revealImgs);
            const tl = gsap.timeline({
                onStart: () => {
                    reveal.style.opacity = '1';
                    gsap.set(el, { zIndex: 1000 });
                }
            });

            tl.set(revealImgs, { opacity: 0 });

            for (let i = 0; i < totalImages; i++) {
                gsap.set(revealImgs[i], {
                    x: `${(totalImages - 1 - i) * -50}%`,
                    y: `${(totalImages - 1 - i) * -getRandomFloat(-2, 2)}%`,
                    rotation: `${i !== totalImages - 1 ? getRandomFloat(-5, 5) : 0}deg`,
                });

                tl.to(revealImgs[i], {
                    duration: i === totalImages - 1 ? 0.4 : 0.55,
                    ease: i === totalImages - 1 ? 'back.out' : 'power1.inOut',
                    startAt: i === totalImages - 1
                        ? { opacity: 1, x: '-50%', y: '0%' }
                        : { opacity: 1 },
                    opacity: i === totalImages - 1 ? 1 : 0,
                    x: i === totalImages - 1 ? '0%' : undefined,
                    y: i === totalImages - 1 ? '0%' : undefined,
                }, i * 0.02);
            }
        };

        const hideImage = () => {
            gsap.killTweensOf(revealImgs);
            const tl = gsap.timeline({
                onStart: () => {
                    gsap.set(el, { zIndex: 999 });
                },
                onComplete: () => {
                    gsap.set(el, { zIndex: '' });
                    gsap.set(reveal, { opacity: 0 });
                }
            });

            tl.to(revealImgs[totalImages - 1], {
                duration: 0.15,
                ease: 'sine.out',
                opacity: 0
            });
        };

        const onMouseEnter = (e: MouseEvent) => {
            positionElement(e)
            animateLetters()
            showImage()
        }

        const onMouseMove = (e: MouseEvent) =>
            requestAnimationFrame(() => positionElement(e))

        const onMouseLeave = () => hideImage()

        el.addEventListener('mouseenter', onMouseEnter)
        el.addEventListener('mousemove', onMouseMove)
        el.addEventListener('mouseleave', onMouseLeave)

        // preload image (clean version)
        const imgPreload = new Image()
        imgPreload.src = img

        return () => {
            el.removeEventListener('mouseenter', onMouseEnter)
            el.removeEventListener('mousemove', onMouseMove)
            el.removeEventListener('mouseleave', onMouseLeave)
        }
    }, [img])

    return (
        <a href={link} ref={containerRef} className="hover-effect-link block_link">
            <span className={cn("hover-effect-text", className)}>{text}</span>
        </a>
    )
}
