import React, { Component } from 'react';
import classes from './TestComponent.module.scss';

export class TestComponent extends Component<Props, State> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.state = {};
    }



    render() {
        return (
            <div className={classes['test-component']}>
                <div className={classes['test-1']} >EXAMPLE :hover</div>
                <div className={[classes['test-2'], classes['sibling-class']].join(' ')} >SIBLING selector</div>
                <div className={classes['test-3']} >
                    <div className={classes['direct-child']} >EXAMPLE {'>'} DIRECT CHILD </div>
                </div>
                <div className={classes['test-4']} data-test={'my-value'}>EXAMPLE CUSTOM ATTR SELECTOR [data-test='my-value']
                </div>
                <div className={classes['test-5']}>
                    <div>NTH SELECTOR :nth-child(n)</div>
                </div>
                <div className={classes['test-6']}>
                    <div>first child SELECTOR :first-child</div>
                </div>

            </div>
        );
    }
}

interface State {

}

interface Props {

}
