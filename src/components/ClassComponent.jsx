import { Component } from "react";

export default class ClassComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sample: "value"
        }
    }

    componentDidMount() {

    }

    shouldComponentUpdate() {

    }

    componentWillUnmount() {

    }

    componentDidUpdate() {

    }

    render() {
        return <div></div>;
    }
}