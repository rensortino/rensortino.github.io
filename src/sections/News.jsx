import React from 'react';
import Update from '../components/Update'

const News = () => {
  return (
    <section className="tw-scroll-mt-16 tw-w-4/5 tw-py-8 tw-flex tw-flex-col tw-items-center md:tw-items-start" id="news">
        <h2 className="tw-text-3xl tw-pb-8 md:tw-text-4xl tw-self-start">News</h2>
          <ul className="tw-font-bold tw-items-center md:tw-w-11/12 tw-justify-evenly tw-py-2">
            <Update 
              date="Nov 2023"
              title="I successfully defended my PhD thesis at the University of Catania!"
            />
            <Update
              date="Mar 2023"
              title="Our paper on scene-graph-to-image has been published on CVIU"
            />
          </ul>
    </section>
  );
};

export default News;
