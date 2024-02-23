import React from 'react';
import Project from '../components/Project'
import { Link } from "react-router-dom";

import trfTeaser from "../assets/images/trf-sg2im.gif"
import RADiffTeaser from "../assets/images/radiff.gif"
import MatFuseTeaser from "../assets/images/matfuse.gif"

const Projects = () => {
  return (
    <section className="tw-scroll-mt-16 tw-w-4/5 tw-py-8 tw-items-center" id="projects">
        <h2 className="tw-text-3xl tw-pb-8 md:tw-text-4xl tw-self-start">Projects</h2>
        <div className="tw-flex tw-flex-wrap tw-justify-center md:tw-grid md:tw-place-content-center md:tw-gap-4 md:tw-grid-cols-3">

            <Project 
              img={trfTeaser}
              title="TRF-SG2IM"
              subtitle="Scene graph to image with transformers"
              link="https://rensortino.github.io/trf-sg2im"
            />
            <Project
              img={RADiffTeaser}
              title="RADiff"
              subtitle="Conditional diffusion models for data augmentation in radio astronomy"
              link="https://rensortino.github.io/radiff"
            />
            <Project
              img={MatFuseTeaser}
              title="MatFuse"
              subtitle="Multi-modal diffusion models for material generation"
              link="https://gvecchio.com/matfuse"
            />

        </div>
        <div className="tw-flex tw-w-full tw-pt-8 tw-self-end tw-justify-end">
            <Link to="/projects" className="tw-p-2 tw-border tw-rounded-2xl tw-border-link hover:tw-text-link">More</Link>
        </div>
    </section>
  );
};

export default Projects;
