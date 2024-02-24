import React from 'react';

const Post = (props) => {
    // props.link ? 
    return (
        <li className="tw-flex py-2">
            <div className="tw-flex tw-py-1">
                <p className="tw-w-24 tw-hidden md:tw-block">[{props.date}]</p>&emsp;
                {props.link ? 
                    <a className="md:tw-min-w-[400px] tw-text-link" href={props.link} target="_blank">{props.title}</a> 
                    : <p className="md:tw-min-w-[400px] tw-italic">{props.title}</p>
                }
                {/* <a className="md:tw-min-w-[400px] tw-text-link" href={props.link} target="_blank">{props.title}</a> */}
            </div>
        </li>
    );
    // :
    // return

}

export default Post;
