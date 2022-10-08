import React, { Component } from 'react'
import styles from '../Shared/SharedStyles.module.scss'
import MuiAlert from './MuiAlert/MuiAlert'
import MuiSnackbars from './MuiSnackbars/MuiSnackbars'

export class TestUiSandboxScreen14 extends Component<Props, State> {
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
                        Mui Alerts {'>'}{' '}
                        <span className={styles['tag-highlight-green']}>
                            Studio restyled version
                        </span>
                    </h6>
                    <i>
                        <a
                            href={'https://material-ui.com/components/alert/'}
                            target={'_blank'}
                        >
                            https://material-ui.com/components/alert/
                        </a>
                    </i>
                </div>
                <MuiAlert />

                <hr />

                <div>
                    <h6>
                        Mui Snackbars {'>'} (Used as Toasts)
                        <span className={styles['tag-highlight-green']}>
                            Studio restyled version
                        </span>
                    </h6>
                    <i>
                        <a
                            href={
                                'https://material-ui.com/components/snackbars/'
                            }
                            target={'_blank'}
                        >
                            https://material-ui.com/components/snackbars/
                        </a>
                    </i>
                </div>
                <MuiSnackbars />

                <hr />
            </div>
        )
    }
}

interface State {}

interface Props {}
