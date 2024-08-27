import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // Initialize LocomotiveScroll
    const locoScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1, // adjust for scroll speed
      class: 'is-reveal', // class added when elements come into view
    });

    // Tell ScrollTrigger to use locomotiveScroll as the scroller
    ScrollTrigger.scrollerProxy(scrollRef.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
      },
      // LocomotiveScroll handles things out of the box, so we don't need to adjust for padding
      pinType: scrollRef.current.style.transform ? 'transform' : 'fixed',
    });

    // Each time LocomotiveScroll updates, tell ScrollTrigger to update too
    locoScroll.on('scroll', ScrollTrigger.update);

    // Update ScrollTrigger when the window updates (resize, etc)
    ScrollTrigger.addEventListener('refresh', () => locoScroll.update());

    ScrollTrigger.refresh();

    // Cleanup on unmount
    return () => {
      locoScroll.destroy();
      ScrollTrigger.removeEventListener('refresh', () => locoScroll.update());
    };
  }, []);

  return (
    <div id="content" className="about-page" ref={scrollRef}>
      <section className="image-grid container">
        <picture className="image_cont">
          <source srcSet="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=1500" media="(min-width: 1500px)" />
          <source srcSet="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=1000" media="(min-width: 700px)" />
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=600" alt="Scenic" />
        </picture>
        <div className="image_cont" data-scroll data-scroll-speed="2">
          <img src="https://images.unsplash.com/photo-1569596082827-c5e8990496cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDg3NQ&ixlib=rb-1.2.1&q=80&w=500" alt="Landscape" />
        </div>
        <div className="image_cont" data-scroll data-scroll-speed="3">
          <img src="https://images.unsplash.com/photo-1587932775991-708a20af2cc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDQ5Mg&ixlib=rb-1.2.1&q=80&w=500" alt="Cityscape" />
        </div>
        <div className="image_cont" data-scroll data-scroll-speed="1">
          <img src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=1200" alt="Forest" />
        </div>
        <div className="image_cont" data-scroll data-scroll-speed="4">
          <img src="https://images.unsplash.com/photo-1623166200209-6bd48520d6cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDg7NQ&ixlib=rb-1.2.1&q=80&w=500" alt="Desert" />
        </div>
        <div className="image_cont" data-scroll data-scroll-speed="5">
          <img src="https://images.unsplash.com/photo-1532587459811-f057563d1936?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNDg7NQ&ixlib=rb-1.2.1&q=80&w=500" alt="Mountain" />
        </div>
      </section>
      <div className="spacer"></div>
    </div>
  );
};

export default About;
