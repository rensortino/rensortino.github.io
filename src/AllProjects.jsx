import React from 'react';
import Project from './components/Project'
import { Link } from "react-router-dom";

import trfTeaser from "./assets/images/trf-sg2im.gif"
import RADiffTeaser from "./assets/images/radiff.gif"
import MatFuseTeaser from "./assets/images/matfuse.gif"
import RadioTiramisuTeaser from "./assets/images/radio-tiramisu.png"
import CLIPSETeaser from "./assets/images/clip-se.png"

// TODO Make this a dynamic list and merge with Projects.jsx

const AllProjects = () => {
  return (
    <section className="tw-w-4/5 tw-py-8 tw-items-center" id="projects">
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
            <Project
              img={RadioTiramisuTeaser}
              title="Radio Tiramisu"
              subtitle="Tiramisu model for semantic segmentation in radio astronomy"
              link="./radio-tiramisu"
            />
            <Project
              img={CLIPSETeaser}
              title="CLIP Search Engine"
              subtitle="An image-to-image search engine using CLIP embeddings"
              link="https://github.com/rensortino/clip-search-engine"
            />

        </div>
        <div className="tw-flex tw-w-full tw-pt-8 tw-self-end tw-justify-end">
            <Link to=".." className="tw-p-2 tw-border tw-rounded-2xl tw-border-link hover:tw-text-link">Back</Link>
        </div>
    </section>
  );
};

export default AllProjects;
