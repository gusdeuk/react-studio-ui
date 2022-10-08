import React, { Component } from 'react'

import styles from '../Shared/SharedStyles.module.scss'

export class TestUiSandboxScreen17 extends Component<Props, State> {
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
                        Lorem Ipsum 17{' '}
                        <span className={styles['tag-highlight-red']}>
                            Not styled yet, do not use this
                        </span>
                    </h6>
                    <i>https://ioioioi</i>
                </div>

                <hr />
            </div>
        )
    }
}

interface State {}

interface Props {}
