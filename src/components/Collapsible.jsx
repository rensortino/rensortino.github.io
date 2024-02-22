import React from 'react';
import { Component } from 'react';

class Collapsible extends Component {
    constructor(props) {
        super(props);
        this.toggleClassName = this.toggleClassName.bind(this);
        this.DescRef = React.createRef();
        this.caretRef = React.createRef();
        this.state = {
            active: false,
        };
    }

    toggleClassName() {
        const currentState = this.state.active;
        this.setState({ active: !currentState });
        this.caretRef.current.classList.toggle("bi-caret-right-fill");
        this.caretRef.current.classList.toggle("bi-caret-down-fill");
        this.DescRef.current.classList.toggle('collapsed');
        this.DescRef.current.classList.toggle('collapsible');
        console.log(this.DescRef.current.classList);
        // this.state.active ? document.getElementById("proj-desc1").classList.add("collapsed") : document.getElementById("proj-desc1").classList.remove("collapsed");
        // this.state.active ? document.getElementById("proj-desc1").classList.remove("collapsible") : document.getElementById("proj-desc1").classList.add("collapsible");
        
    };
};

export default Collapsible;
