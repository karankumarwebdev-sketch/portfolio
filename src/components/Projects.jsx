import "../styles/projects.css";
import { projects } from "../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-creative";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <span>PORTFOLIO</span>
          <h2>Featured Projects</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCreative]}
          effect="creative"
  creativeEffect={{
    prev: {
      translate: ["-100%", 0, 0],
      opacity: 0,
    },
    next: {
      translate: ["100%", 0, 0],
      opacity: 0,
    },
  }}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000, // 5 seconds
            disableOnInteraction: false,
          }}
          speed={1300} // transition duration
          loop={true}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="project-showcase">
                <div className="project-left">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-right">
                  <span className="project-category">AGENCY PROJECT</span>

                  <h3>{project.title}</h3>

                  <p>{project.description}</p>

                  <div className="project-tech">
                    {project.tech.map((item, index) => (
                      <span key={index}>{item}</span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a
                      className="primary-btn"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Website →
                    </a>

                    {/* <a href="#">
                      Case Study
                    </a> */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
