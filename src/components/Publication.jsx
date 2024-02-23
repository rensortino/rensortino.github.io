import React from 'react';
import Collapsible from './Collapsible';


class Publication extends Collapsible {

    constructor(props) {
        super(props);
    }

    

    render () {
        return (
        <div className="tw-flex tw-py-4 tw-flex-col tw-justify-between tw-items-center md:tw-flex-row">
            <div className="tw-w-8/12 tw-max-w-[300px] tw-mr-6 tw-hidden md:tw-block">
                <img className="tw-w-full tw-rounded-3xl place-self-start"  src={this.props.img} />
            </div>
                <div className="tw-flex tw-flex-col tw-text-center md:tw-text-left tw-w-full tw-justify-around">
                    <div className="tw-flex tw-justify-center md:tw-justify-start" onClick={this.toggleClassName}>
                        <div className="tw-text-lg tw-font-semibold">
                            <h2>{this.props.subtitle}</h2>
                        </div>
                        
                        <i className="bi bi-caret-right-fill md:tw-hidden" ref={this.caretRef}></i>
                    </div>
                    <div className="collapsed" ref={this.DescRef}>
                        <p className="tw-italic"><span className="tw-font-bold">Renato Sortino</span>, Simone Palazzo, Concetto Spampinato</p>
                        <p className="tw-text-subtitle">{this.props.journal}</p>
                        <ul className="tw-flex tw-items-center md:tw-items-start tw-justify-around md:tw-justify-start tw-py-2">
                            <li className="tw-text-link tw-font-semibold tw-rounded-2xl tw-mr-6"><a href={this.props.paperLink} target="_blank">Paper</a></li>
                            <li className="tw-text-link tw-font-semibold tw-rounded-2xl tw-mr-6"><a href={this.props.projectPage} target="_blank">Project Page</a></li>
                            <li className="tw-text-link tw-font-semibold tw-rounded-2xl tw-mr-6"><a href={this.props.github} target="_blank">Code</a></li>
                        </ul>
                    </div>
                </div>
        </div>
        )
  };
};

export default Publication;
