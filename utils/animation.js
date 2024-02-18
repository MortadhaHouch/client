import { gsap } from "gsap";
import { Flip, ScrollTrigger } from "gsap/all";
import LocomotiveScroll from 'locomotive-scroll';
gsap.registerPlugin(Flip,ScrollTrigger);
function gsapAnimationHandler(className,from,to,scrollHandling){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        lerp:0.01,
        multiplier:2,
        touchMultiplier:2.5,
        scrollFromAnywhere:true
    });
    scroll.start();
    gsap.ticker.lagSmoothing(0)
    let timeLine = gsap.timeline();
    if(scrollHandling){
        timeLine.from(className,{
            ...from,
            ease:"back.inOut",
            scrollTrigger:{
                trigger:className,
                start:"0% 100%",
                scrub:true,
            }
        },"-=.5")
        timeLine.to(className,{
            ...to,
            ease:"back.inOut",
            scrollTrigger:{
                trigger:className,
                start:"30% 80%",
                end:"100% 70%",
                scrub:true,
            }
        },"-=.5")
    }
}
function windowLoadingAnimation(){
    let paths = document.querySelectorAll("path")
    let animationProgress = 0;
    let main = document.querySelector("main.loading")
    let timeInterval =setInterval(()=>{
        paths.forEach((path)=>{
            if(document.readyState !== "complete" && animationProgress<100){
                path.style.strokeDasharray = path.getTotalLength()*animationProgress/100;
                path.style.strokeDashoffset = path.getTotalLength()*animationProgress/100;
                animationProgress++;
            }else if(document.readyState === "complete" && animationProgress>=100){
                path.style.strokeDasharray = path.getTotalLength();
                path.style.strokeDashoffset = 0;
                main.classList.add("paused");
                clearInterval(timeInterval);
                animationProgress = 0;
            }
        })
    },10)
}
export {gsapAnimationHandler,windowLoadingAnimation}