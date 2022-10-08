import React, { Component } from 'react';

import styles from '../Shared/SharedStyles.module.scss';
import UncontrolledAnimation from "../Test11/AnimationContent/UncontrolledAnimation";
import {AnimationStyle} from "../Test11/AnimationContent/AnimationStyle";

export class TestDrawer extends Component<Props, State> {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div>
                <div style={{ marginBottom: '10px'}}>
                Drawer Content Test
                </div>
                <div>
                    <UncontrolledAnimation style={AnimationStyle.ROCKET} width={200} height={200}/>
                </div>
                <div>
                    <UncontrolledAnimation style={AnimationStyle.SUCCESS} width={200} height={200}/>
                </div>
                <div>
                    <UncontrolledAnimation style={AnimationStyle.WARNING} width={200} height={200}/>
                </div>
            </div>
        );
    }
}

interface State {

}

interface Props {

}

