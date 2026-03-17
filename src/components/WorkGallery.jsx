import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import SplitType from 'split-type';

const projects = [
  { id: 1, title: 'Project One', category: 'Design / Development', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Project Two', category: 'Interaction / Motion', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'Project Three', category: 'Strategy / Branding', image: 'https://images.unsplash.com/photo-1550684848-86a5d8727436?q=80&w=600&auto=format&fit=crop' },
  { id: 4, title: 'Project Four', category: 'Visual / UIUX', image: 'https://images.unsplash.com/photo-1509121703234-486a49db712d?q=80&w=600&auto=format&fit=crop' },
];

const WorkGallery = () => {
  const modalRef = useRef(null);
  const containerRef = useRef(null);
  const rowsRef = useRef([]);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    // GSAP quickTo for smooth "spring" follow
    const xTo = gsap.quickTo(modalRef.current, "x", { duration: 0.6, ease: "power2.out" });
    const yTo = gsap.quickTo(modalRef.current, "y", { duration: 0.6, ease: "power2.out" });

    const moveModal = (e) => {
      const { clientX, clientY } = e;
      xTo(clientX);
      yTo(clientY);
    };

    window.addEventListener("mousemove", moveModal);

    // Initial Reveal for Rows
    rowsRef.current.forEach((row, i) => {
        if (!row) return;
        const title = row.querySelector('h2');
        const category = row.querySelector('.work-row__category');
        
        const splitTitle = new SplitType(title, { types: 'lines' });
        
        splitTitle.lines.forEach(line => {
            const wrapper = document.createElement('div');
            wrapper.classList.add('line-mask');
            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.from([splitTitle.lines, category], {
            scrollTrigger: {
                trigger: row,
                start: "top 90%",
                toggleActions: "play none none reverse",
            },
            y: "100%",
            opacity: 0,
            duration: 1,
            stagger: 0.05,
            ease: "power3.out"
        });
    });

    // Section Fade-in logic
    gsap.fromTo(containerRef.current, 
      { opacity: 0 }, 
      { 
        opacity: 1, 
        duration: 1, 
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          end: "top 60%",
          scrub: true,
        }
      }
    );

    return () => {
      window.removeEventListener("mousemove", moveModal);
    };
  }, []);

  useEffect(() => {
    if (activeProject !== null) {
      gsap.to(modalRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power3.out"
      });
    } else {
      gsap.to(modalRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.4,
        ease: "power3.out"
      });
    }
  }, [activeProject]);

  return (
    <section ref={containerRef} className="work-gallery reveal-section" id="work">
      <div className="work-gallery__header">
         <p className="metadata">RECENT WORK</p>
      </div>

      <div className="work-gallery__list">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            ref={el => rowsRef.current[index] = el}
            className="work-row"
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="work-row__title">
              <h2>{project.title}</h2>
            </div>
            <div className="work-row__category">
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Image Modal */}
      <div ref={modalRef} className="work-modal">
        <div className="work-modal__container">
          {projects.map((project, index) => (
            <div 
              key={`img-${project.id}`} 
              className="work-modal__image-wrapper"
              style={{ transform: `translateY(${activeProject * -100}%)` }}
            >
              <img src={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGallery;
