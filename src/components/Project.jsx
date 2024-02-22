import React from 'react';
import { Component } from 'react';
import Collapsible from './Collapsible';

class Project extends Collapsible {
    constructor(props) {
        super(props);
    }

    render () {
        return (
          <div className="tw-max-w-[400px] tw-w-full tw-py-8 tw-flex tw-flex-col tw-justify-center tw-text-center tw-rounded-3xl">
              <div className="tw-rounded-t-3xl tw-max-h-[170px] tw-flex tw-justify-center">
                  <img className="tw-object-contain tw-rounded-t-3xl tw-max-h-[170px]"  src={this.props.img} />
              </div>
              <div className="tw-flex tw-justify-center">
                  <div className="tw-flex tw-items-center" onClick={this.toggleClassName}>
                      <h2 className="tw-p-2 tw-text-lg tw-font-bold">{this.props.title}</h2>
                      <i ref={this.caretRef} className="bi bi-caret-right-fill md:tw-hidden"></i>
                  </div>
              </div>
              <div className="collapsed md:show tw-pb-2" ref={this.DescRef}> 
                  <div className="tw-flex tw-min-h-[100px] tw-items-center">
                      <p className="tw-text-subtitle tw-p-2">{this.props.subtitle}</p>
                  </div>                            
                  <a href={this.props.link}>
                      <div className="tw-border-t tw-border-subtitle/20 tw-text-link tw-p-1" >Project Page</div>
                  </a>
              </div>
          </div>
        );
    }
};

export default Project;
