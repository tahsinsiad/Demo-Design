import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import './style.css';
function Test() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.saveStyles('.container-hero div');

    ScrollTrigger.matchMedia({
      // desktop
      '(min-width: 800px)': function () {
        // setup animations and ScrollTriggers for screens 800px wide or greater (desktop) here...
        // These ScrollTriggers will be reverted/killed when the media query doesn't match anymore.
      },
      // mobile
      '(max-width: 799px)': function () {
        // The ScrollTriggers created inside these functions are segregated and get
        // reverted/killed when the media query doesn't match anymore.
        // var targets = document.querySelectorAll('.container-hero div');
        // targets.forEach((target) => {
        //   gsap
        //     .timeline({
        //       defaults: { duration: 1 },
        //       scrollTrigger: {
        //         trigger: target,
        //         markers: true,
        //         scrub: true,
        //         start: 'center 50%',
        //         end: 'bottom -50%',
        //         pin: true,
        //       },
        //     })
        //     .fromTo(target, { y: 25 }, { y: -25 })
        //     .from(target, { opacity: 0, duration: 0.2 }, 0)
        //     .to(target, { opacity: 0, duration: 0.2 }, 0.8);
        // });
      },

      // all
      all: function () {
        console.clear();

        const canvas = document.getElementById('hero-lightpass');
        const context = canvas.getContext('2d');

        canvas.width = 2000;
        canvas.height = 1000;

        const frameCount = 22;
        const currentFrame = (index) =>
          `../Scene02/Sc_Two_${index.toString().padStart(5, '0')}.png`;

        const images = [];
        const airpods = {
          frame: 0,
        };

        for (let i = 0; i < frameCount; i++) {
          const img = new Image();
          img.src = currentFrame(i);
          images.push(img);
        }

        gsap.to(airpods, {
          frame: frameCount - 1,
          snap: 'frame',
          scrollTrigger: {
            scrub: 0.5,
            pin: '.hero',
            trigger: '.test-hero',
          },
          onUpdate: render,
        });

        images[0].onload = render;

        function render() {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(images[airpods.frame], 0, 0);
        }

        var targets = document.querySelectorAll('.container-hero div');

        targets.forEach((target) => {
          gsap
            .timeline({
              defaults: { duration: 1 },
              scrollTrigger: {
                trigger: target,
                markers: false,
                scrub: true,
                start: 'top 120px',
                end: '+=90%',
                pin: true,
              },
            })
            .from(target, {
              scale: 0.3,
              rotation: 0,
              autoAlpha: 0,
              ease: 'power2',
            });
        });
      },
    });
  }, []);

  return (
    <>
      <div className="bg">
        <div className="test-hero">
          <div className="container-hero">
            <div style={{ marginTop: '120px' }} className="h1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <canvas
            className="hero"
            style={{ width: '100%' }}
            id="hero-lightpass"
          ></canvas>
        </div>
        {/* <div id="container">
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
        </div> */}
      </div>
    </>
  );
}

export default Test;
