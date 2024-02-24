import React from 'react';

const Update = (props) => {
    return (
        <li>
            <div className="tw-flex tw-py-1">
                <p className="tw-w-24 tw-hidden md:tw-block">[{props.date}]</p>&emsp;
                <p className="md:tw-min-w-[400px] tw-italic">{props.title}</p>
            </div>
        </li>
    );
}

export default Update;
