import React from 'react';

const Update = (props) => {
    return (
        <li>
            <div className="tw-flex py-2">
                <p className="tw-w-40 md:tw-text-lg tw-hidden md:tw-block">[{props.date}]</p>&emsp;
                <p className="md:tw-min-w-[400px] md:tw-text-lg tw-italic">{props.title}</p>
            </div>
        </li>
    );
}

export default Update;
