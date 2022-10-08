import React, { Component } from 'react'

import styles from '../Shared/SharedStyles.module.scss'
import LayoutLegacyStyle from './FooterActionSamples/FooterActionSamples'

export class TestUiSandboxScreen15 extends Component<Props, State> {
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
                        Footer actions{' '}
                        <span className={styles['tag-highlight-green']}>
                            Studio restyled version
                        </span>
                    </h6>
                    <i>Footer actions wrapper + button variants</i>
                    <LayoutLegacyStyle />
                </div>

                <hr />
            </div>
        )
    }
}

interface State {}

interface Props {}
