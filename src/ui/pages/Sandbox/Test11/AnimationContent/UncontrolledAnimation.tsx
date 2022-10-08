import React from 'react';
// @ts-ignore
import Lottie from 'react-lottie';
import {AnimationProps} from "./AnimationProps";

export default class UncontrolledAnimation extends React.Component<AnimationProps, any> {

    static defaultProps = {
        width: 100,
        height: 100,
        loop: true,
        autoplay: true
    }

    render() {
        const defaultOptions = {
            loop: this.props.loop,
            autoplay: this.props.autoplay,
            animationData: this.props.style,
            rendererSettings: {
                preserveAspectRatio: "xMidYMid slice"
            }
        };
        return (<Lottie options={defaultOptions} height={this.props.height} width={this.props.width} />);
    }
}
