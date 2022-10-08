import React, { Component } from 'react'

import styles from '../Shared/SharedStyles.module.scss'
import {TestComponent} from "./TestComponent/TestComponent";

export class TestUiSandboxScreen20 extends Component<Props, State> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div
                className={`${styles['base-ui-sandbox']} ${styles.white}  custom-scroll-area vert-scroll`}
            >
                <div>
                    <h6>
                        TEST AREA{' '}
                        <span className={styles['tag-highlight-red']}>
                            Not styled yet, do not use this
                        </span>
                    </h6>
                    <i>https://ioioioi</i>
                </div>
                <div>
                    <TestComponent/>
                </div>


                <hr />
            </div>
        )
    }
}

interface State {}

interface Props {}
