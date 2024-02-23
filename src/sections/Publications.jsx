import React from 'react';
import Publication from '../components/Publication'

import trfTeaser from "../assets/images/trf-sg2im.gif"
import RADiffTeaser from "../assets/images/radiff.gif"
import MatFuseTeaser from "../assets/images/matfuse.gif"

const Publications = () => {
  return (
    <section className="tw-scroll-mt-16 tw-w-4/5 tw-py-8 tw-flex tw-flex-col tw-items-center md:tw-items-start" id="publications">
        <h2 className="tw-text-3xl tw-pb-8 md:tw-text-4xl tw-self-start">Selected Publications</h2>

            <Publication 
              img={trfTeaser}
              subtitle="Transformer-Based Image Generation from Scene Graphs"
              journal="Computer Vision and Image Understanding (Elsevier)"
              paperLink="https://www.sciencedirect.com/science/article/pii/S1077314223001017"
              projectPage="https://rensortino.github.io/trf-sg2im/"
              github="https://github.com/perceivelab/trf-sg2im/"
              />
            <Publication
              img={RADiffTeaser}
              subtitle="RADiff: Controllable Diffusion Models for Radio Astronomical Maps Generation"
              journal="arXiv Preprint"
              paperLink="https://arxiv.org/abs/2307.02392"
              projectPage="https://rensortino.github.io/radiff/"
              github="https://github.com/SKA-INAF/radiff/"
            />
            <Publication
              img={MatFuseTeaser}
              subtitle="MatFuse: Controllable Material Generation with Diffusion Models"
              journal="arXiv Preprint"
              paperLink=""
              projectPage="https://gvecchio.com/matfuse/"
              github="https://github.com/giuvecchio/matfuse/"
            />

    </section>
  );
};

export default Publications;
