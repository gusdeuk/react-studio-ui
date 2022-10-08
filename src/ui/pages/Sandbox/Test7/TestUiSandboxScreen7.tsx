import React from 'react'
import styles from '../Shared/SharedStyles.module.scss'
import { MuiGrid } from './MuiGrid/MuiGrid'

export function TestUiSandboxScreen7() {
    return (
        <div
            className={`${styles['base-ui-sandbox']} ${styles.white}  custom-scroll-area vert-scroll`}
        >
            <div>
                <h6>
                    Mui Grid {'>'}{' '}
                    <span className={styles['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>
                    <a
                        href={'https://material-ui.com/components/grid/'}
                        target={'_blank'}
                    >
                        https://material-ui.com/components/grid/
                    </a>
                </i>
                <MuiGrid />
            </div>

            <hr />
        </div>
    )
}
