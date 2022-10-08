import React, { Component } from 'react'

import styles from '../Shared/SharedStyles.module.scss'
import MuiAccordion from './MuiAccordion/MuiAccordion'

export class TestUiSandboxScreen13 extends Component<Props, State> {
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
                        MUI Accordion {'>'} Expansion panel
                        <span className={styles['tag-highlight-red']}>
                            Not styled yet, do not use this
                        </span>
                    </h6>
                    <i>
                        <a
                            href={
                                'https://material-ui.com/components/accordion/'
                            }
                            target={'_blank'}
                        >
                            https://material-ui.com/components/accordion/
                        </a>
                    </i>
                </div>
                <MuiAccordion />

                <hr />
            </div>
        )
    }
}

interface State {}

interface Props {}
