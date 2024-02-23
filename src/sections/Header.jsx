import React from 'react';
import proPic from '../assets/images/propic.jpg'
import NavBar from '../components/NavBar';


const Header = () => {
  return (
    <>
    <NavBar />
    <header className="tw-h-screen tw-w-screen tw-flex tw-flex-col md:tw-flex-row tw-place-items-center tw-justify-center md:tw-divide-x">
        <div className="tw-flex tw-w-4/5 tw-max-w-[400px] md:tw-w-2/5 tw-p-8 tw-items-center">
          <img className="tw-w-full tw-rounded-full" src={proPic} alt="Profile Picture" />
        </div>

        <div className="tw-flex tw-flex-col md:tw-pl-8 tw-h-min tw-items-center tw-justify-center">
            <h1 className="tw-text-3xl md:tw-text-5xl tw-text-white tw-font-bold">Renato Sortino</h1>
            <p className="tw-text-lg md:tw-text-2xl tw-text-white md:tw-mt-4">Ph.D. in Computer Vision.</p>
            <a className="tw-text-slate-100 md:tw-text-xl hover:tw-text-link" href="mailto:rensortino@gmail.com" target="_blank">rensortino [at] gmail [dot] com</a>
            <ul className="tw-flex tw-pt-4 md:tw-pt-8">
                <li className="tw-mr-6"><a target="_blank" href="https://github.com/rensortino" className="bi bi-github tw-text-3xl md:tw-text-5xl tw-text-white hover:tw-text-link"></a></li>
                <li className="tw-mr-6"><a target="_blank" href="https://www.linkedin.com/in/renatosortino/" className="bi bi-linkedin tw-text-3xl md:tw-text-5xl tw-text-white hover:tw-text-link"></a></li>
                <li className="tw-mr-6"><a target="_blank" href="https://medium.com/@rensortino" className="bi bi-medium tw-text-3xl md:tw-text-5xl tw-text-white hover:tw-text-link"></a></li>
                <li className="tw-mr-6"><a target="_blank" href="https://scholar.google.com/citations?user=qFxl11AAAAAJ&hl=it" className="ai ai-google-scholar  tw-text-3xl md:tw-text-5xl tw-text-white hover:tw-text-link hover:tw-no-underline"></a></li>
            </ul>
        </div>
    </header>
    </>
  );
};

export default Header;
