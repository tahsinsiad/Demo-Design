import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import Header from './components/Header';
import './style.css';
import Test from './Test';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
function App() {
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   ScrollTrigger.saveStyles('.container-hero div');

  //   ScrollTrigger.matchMedia({
  //     // desktop
  //     '(min-width: 800px)': function () {
  //       // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
  //       // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
  //     },
  //     // mobile
  //     '(max-width: 799px)': function () {
  //       // The ScrollTriggers created inside these functions are segregated and get
  //       // reverted/killed when the media query doesn't match anymore.
  //       var targets = document.querySelectorAll('.container-hero div');

  //       targets.forEach((target) => {
  //         const tl = gsap
  //           .timeline({
  //             defaults: { duration: 1 },
  //             scrollTrigger: {
  //               trigger: target,
  //               markers: false,
  //               scrub: true,
  //               start: 'center 50%',
  //               end: 'bottom -50%',
  //               pin: true,
  //             },
  //           })
  //           .fromTo(target, { y: 25 }, { y: -25 })
  //           .from(target, { opacity: 0, duration: 0.2 }, 0)
  //           .to(target, { opacity: 0, duration: 0.2 }, 0.8);
  //       });
  //     },

  //     // all
  //     all: function () {
  //       console.clear();

  //       const canvas = document.getElementById('hero-lightpass');
  //       const context = canvas.getContext('2d');

  //       canvas.width = 2000;
  //       canvas.height = 1000;

  //       const frameCount = 22;
  //       const currentFrame = (index) =>
  //         `../Scene02/Sc_Two_${index.toString().padStart(5, '0')}.png`;

  //       const images = [];
  //       const airpods = {
  //         frame: 0,
  //       };

  //       for (let i = 0; i < frameCount; i++) {
  //         const img = new Image();
  //         img.src = currentFrame(i);
  //         images.push(img);
  //       }

  //       gsap.to(airpods, {
  //         frame: frameCount - 1,
  //         snap: 'frame',
  //         scrollTrigger: {
  //           scrub: 0.5,
  //         },
  //         onUpdate: render,
  //       });

  //       images[0].onload = render;

  //       function render() {
  //         context.clearRect(0, 0, canvas.width, canvas.height);
  //         context.drawImage(images[airpods.frame], 0, 0);
  //       }

  //       // Timeline for scaling the image when scrolling begins

  //       var tl = gsap.timeline({
  //         scrollTrigger: {
  //           scrub: true,
  //         },
  //       });

  //       tl.from(
  //         '#hero-lightpass',
  //         {
  //           scale: 1,
  //           duration: 1,
  //         },
  //         0,
  //       ).to(
  //         '#hero-lightpass',
  //         {
  //           scale: 1,
  //           duration: 0.25,
  //         },
  //         0.75,
  //       );

  //       // Timeline for fading in and fading out the text

  //       var targets = document.querySelectorAll('.container-hero div');

  //       targets.forEach((target) => {
  //         const tl = gsap
  //           .timeline({
  //             defaults: { duration: 1 },
  //             scrollTrigger: {
  //               trigger: target,
  //               markers: false,
  //               scrub: true,
  //               start: 'center 50%',
  //               end: 'bottom top',
  //               pin: true,
  //             },
  //           })
  //           .fromTo(target, { y: 25 }, { y: -25 })
  //           .from(target, { opacity: 0, duration: 0.2 }, 0)
  //           .to(target, { opacity: 0, duration: 0.2 }, 0.8);
  //       });
  //     },
  //   });
  // }, []);

  return (
    <>
      {/* <div className="bg">
        <canvas style={{ width: '100%' }} id="hero-lightpass"></canvas>
        <div id="container">
          <h1>AirPods Pro</h1>
        </div>
        <div className="container-hero">
          <div className="h1">
            Active Noise Cancellation for immersive sound.
          </div>
          <div className="h1">
            Transparency mode for hearing what’s happening around you.
          </div>
          <div className="h1">A customizable fit for all-day comfort.</div>
          <div className="h1">Magic like you’ve never heard.</div>
        </div>
      </div> */}
      <div
        style={{
          width: '100%',
          position: 'fixed',
          marginBottom: '120px',
          zIndex: '99999999',
        }}
      >
        <Header />
      </div>
      <div style={{ position: 'relative' }}>
        <Test2 />
      </div>
      <div style={{ position: 'relative' }}>
        <Test />
      </div>
      <div style={{ position: 'relative' }}>
        <Test3 />
      </div>
      <div style={{ position: 'relative' }}>
        <Test4 />
      </div>
      <div style={{ position: 'relative' }}>
        <Test5 />
      </div>
      {/* <Test3 /> */}
    </>
  );
}

export default App;
