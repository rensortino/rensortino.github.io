import React from 'react';
import Post from '../components/Post'

const Posts = () => {
  return (
    <section className="tw-scroll-mt-16 tw-w-4/5 tw-py-8 tw-flex tw-flex-col tw-items-center md:tw-items-start" id="posts">
        <h2 className="tw-text-3xl tw-pb-8 md:tw-text-4xl tw-self-start">News</h2>
          <ul className="tw-font-bold tw-items-center md:tw-w-11/12 tw-justify-evenly tw-py-2">
            <Post 
              date="Nov 2023"
              title="I successfully defended my PhD thesis at the University of Catania!"
            />
            <Post 
              date="Oct 2023"
              link="https://medium.com/@rensortino/colorizenet-stable-diffusion-for-image-colorization-bdc9c35121fa"
              title="ColorizeNet: Stable Diffusion for Image Colorization"
            />
            <Post
              date="Mar 2023"
              title="Our paper on scene-graph-to-image has been published on CVIU"
            />
            <Post 
              date="Jul 2022"
              link="https://medium.com/towards-data-science/distribute-your-pytorch-model-in-less-than-20-lines-of-code-61a786e6e7b0"
              title="Distribute your PyTorch model in less than 20 lines of code"
            />
          </ul>
    </section>
  );
};

export default Posts;
