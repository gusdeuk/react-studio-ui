import React, { Component } from 'react'

import styles from '../Shared/SharedStyles.module.scss'
import MuiStepperHor from './MuiStepperHor/MuiStepperHor'
import MuiStepperVer from './MuiStepperVer/MuiStepperVer'

export class TestUiSandboxScreen12 extends Component<Props, State> {
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
                        MUI Stepper component {'>'} Horizontal
                        <span className={styles['tag-highlight-red']}>
                            Not styled yet, do not use this
                        </span>
                    </h6>
                    <i>
                        <a
                            href={
                                'https://material-ui.com/components/steppers/'
                            }
                            target={'_blank'}
                        >
                            https://material-ui.com/components/steppers/
                        </a>
                    </i>
                </div>
                <MuiStepperHor />

                <div>
                    <h6>
                        MUI Stepper component {'>'} Vertical
                        <span className={styles['tag-highlight-red']}>
                            Not styled yet, do not use this
                        </span>
                    </h6>
                    <i>
                        <a
                            href={
                                'https://material-ui.com/components/steppers/'
                            }
                            target={'_blank'}
                        >
                            https://material-ui.com/components/steppers/
                        </a>
                    </i>
                </div>
                <MuiStepperVer />

                <hr />
            </div>
        )
    }
}

interface State {}

interface Props {}
