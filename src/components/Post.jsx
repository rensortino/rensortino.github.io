import React from 'react';

const Post = (props) => {
    return (
        <li>
            <div className="tw-flex py-2">
                <p className="tw-w-40 md:tw-text-lg tw-hidden md:tw-block">[{props.date}]</p>&emsp;
                <a className="md:tw-min-w-[400px] md:tw-text-lg tw-text-link" href={props.link}>{props.title}</a>
            </div>
        </li>
    );
}

export default Post;
