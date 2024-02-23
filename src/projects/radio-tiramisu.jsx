import React from 'react';
import { Link } from "react-router-dom";

const RadioTiramisu = () => {
    return (

    <main className="tw-flex tw-flex-col tw-items-center tw-max-w-[1024px]">
            
            <section className="tw-w-4/5 tw-py-8 tw-items-center" id="projects">
                <h2 className="tw-text-3xl tw-pb-3 md:tw-text-4xl tw-self-start">Radio Tiramisu</h2>
                <h2 className="tw-text-md tw-pb-8 md:tw-text-lg tw-self-start">Tiramisu model for semantic segmentation in radio astronomy</h2>
                
                <p>An application of the semantic segmentation model <a className="tw-text-link" href="https://arxiv.org/abs/1611.09326" rel="external nofollow noopener" target="_blank">Tiramisu</a> to radio astronomy. 
                    This represents the first attempt to applying segmentation models to radio astronomy, as typical state-of-the-art approaches exploit object detection methods.
                </p>
                <br />
                <p>
                    Results show that this approach performs better than object-detection-based methods, providing a more accurate segmentation of the radio sources.
                </p>

                <div className="tw-grid tw-place-content-center tw-gap-4 tw-py-8 tw-grid-cols-2 md:tw-grid-rows-2 md:tw-grid-cols-5 md:tw-grid-flow-col">


                    <div className="tw-w-full">
                        <img className="tw-w-full tw-rounded-3xl"  src="/images/sample1.png" />
                    </div>
                    <div className="tw-w-full">
                        <img className="tw-w-full tw-rounded-3xl"  src="/images/seg1.jpg" />
                    </div>

                    <div className="tw-w-full">
                        <img className="tw-w-full tw-rounded-3xl"  src="/images/sample2.jpg" />
                    </div>
                    <div className="tw-w-full">
                        <img className="tw-w-full tw-rounded-3xl"  src="/images/seg2.jpg" />
                    </div>

                    <div className="tw-w-full">
                        <img className="tw-w-full tw-rounded-3xl"  src="/images/sample3.png" />
                    </div>
                    <div className="tw-w-full">
                        <img className="tw-w-full tw-rounded-3xl"  src="/images/seg3.jpg" />
                    </div>

                    <div className="tw-w-full">
                        <img className="tw-w-full tw-rounded-3xl"  src="/images/sample4.png" />
                    </div>
                    <div className="tw-w-full">
                        <img className="tw-w-full tw-rounded-3xl"  src="/images/seg4.jpg" />
                    </div>

                    <div className="tw-w-full">
                        <img className="tw-w-full tw-rounded-3xl"  src="/images/sample5.png" />
                    </div>
                    <div className="tw-w-full">
                        <img className="tw-w-full tw-rounded-3xl"  src="/images/seg5.jpg" />
                    </div>
                    
                </div>

            </section>
            
            <section className="tw-w-4/5 tw-py-8 tw-items-center" id="resources">
                <h2 className="tw-text-3xl">Resources</h2>
                <hr/>
                <ul className="tw-flex tw-flex-col tw-py-2 xs:tw-flex-row">
                    <li className="tw-text-link tw-font-semibold tw-rounded-2xl tw-mr-6 tw-pt-2">
                        <i className="bi bi-file-earmark-text-fill tw-h-[16px]"></i>
                        <a href="https://link.springer.com/chapter/10.1007/978-3-030-89691-1_38">
                            Paper
                        </a>
                    </li>
                    <li className="tw-text-link tw-font-semibold tw-rounded-2xl tw-mr-6 tw-pt-2">
                        <div className="tw-flex tw-items-center">
                            <img className="emoji tw-h-[16px] tw-w-auto tw-mr-2" title=":hugs:" alt=":hugs:" src="https://github.githubassets.com/images/icons/emoji/unicode/1f917.png" height="20" width="20" />
                            <a href="https://huggingface.co/spaces/rsortino/radio-tiramisu" className="tw-flex tw-items-center">HF Spaces Demo</a>
                        </div>
                    </li>
                    <li className="tw-text-link tw-font-semibold tw-rounded-2xl tw-mr-6 tw-pt-2"><i className="bi bi-github tw-mr-2 tw-text-[16px] tw-w-auto"></i><a href="https://github.com/SKA-INAF/radio-tiramisu">Code</a></li>
                </ul>
                <div className="tw-flex tw-w-full tw-pt-8 tw-self-end tw-justify-end">
                    <Link to="/projects" className="tw-p-2 tw-border tw-rounded-2xl tw-border-link hover:tw-text-link">Go Back</Link>
                </div>
            </section>
    </main>
    );
};

export default RadioTiramisu;