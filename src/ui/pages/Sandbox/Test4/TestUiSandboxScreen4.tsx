import React, { Component } from 'react'
import styles from '../Shared/SharedStyles.module.scss'
import { ModalWins } from './ModalWins/ModalWins'
import { MuiTabs } from './MuiTabs/MuiTabs'

export class TestUiSandboxScreen4 extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
    }

    render() {
        return (
            <div
                className={`${styles['base-ui-sandbox']} ${styles.white}  custom-scroll-area vert-scroll`}
            >
                <div>
                    <h6>
                        Modal Flex Window {'>'} Custom Component based on MUI
                        MODAL {'>'}{' '}
                        <span className={styles['tag-highlight-green']}>
                            Studio restyled version
                        </span>
                    </h6>
                    <i>
                        <a
                            href={'https://material-ui.com/components/modal/'}
                            target={'_blank'}
                        >
                            https://material-ui.com/components/modal/
                        </a>
                    </i>
                    <ModalWins />
                </div>

                <hr />
                <div>
                    <h6>
                        MUI Tabs Components {'>'}{' '}
                        <span className={styles['tag-highlight-green']}>
                            Studio restyled version
                        </span>
                    </h6>
                    <i>
                        <a
                            href={'https://material-ui.com/components/tabs/'}
                            target={'_blank'}
                        >
                            https://material-ui.com/components/tabs/
                        </a>
                    </i>
                    <MuiTabs />
                </div>

                <hr />
            </div>
        )
    }
}

interface State {
    showTestModal: boolean
    showTestModal2: boolean
}

interface Props {}
