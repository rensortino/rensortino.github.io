import React from 'react';

const About = () => {
  return (
    <section className="tw-scroll-mt-16 tw-w-4/5 tw-py-8" id="about">
        <h2 className="tw-text-3xl tw-mb-8 md:tw-text-4xl">About Me</h2>
        <p className="tw-py-2 md:tw-text-xl">I am a Research Engineer at the <a className='tw-text-link' href="https://list.cea.fr/en/">CEA</a> where I am conducting research on Computer Vision for industrial applications </p>
        <p className="tw-py-2 md:tw-text-xl">I defended my Ph.D. in Computer Vision at the University of Catania, at the <a className='tw-text-link' href="http://perceivelab.com/index">PeRCeiVe Lab</a>, under the supervision of Professor Concetto Spampinato</p>
        <p className="tw-py-2 md:tw-text-xl">I worked at the design and devleopment of <a className='tw-text-link' href="https://gvecchio.com/matfuse/">MatFuse</a>, a multi-modal conditional diffusion model for SVBRDF generation in 3D graphics, allowing map-level material editing. I also developed <a className="tw-text-link" href="https://rensortino.github.io/radiff/">RADiff</a>, a diffusion model for synthetic data generation in radio astronomy, in collaboration with the <a className="tw-text-link" href="https://www.oact.inaf.it/">Italian Institute of Astrophysics (INAF)</a>.</p>
        <p className="tw-py-2 md:tw-text-xl">I am now exploring diffusion models for semantic segmentation in data-constrained scenarios.</p>
    </section>
  );
};

export default About;
