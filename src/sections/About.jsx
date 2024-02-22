import React from 'react';

const About = () => {
  return (
    <section className="tw-w-4/5 tw-py-8" id="about">
        <h2 className="tw-text-3xl tw-mb-8 md:tw-text-4xl">About Me</h2>
        <p className="tw-py-2 md:tw-text-xl">I graduated with a Ph.D. in Computer Vision at the University of Catania, at the PeRCeiVe Lab, under the supervision of Professor Concetto Spampinato</p>
        <p className="tw-py-2 md:tw-text-xl">I worked with multi-modal conditional generative models for material generation in 3D graphics and data augmentation in radio astronomy.</p>
        <p className="tw-py-2 md:tw-text-xl">I am now working on diffusion models applied on 3D data for scene reconstruction and motion generation.</p>
    </section>
  );
};

export default About;
