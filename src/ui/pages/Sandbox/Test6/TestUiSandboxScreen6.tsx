import React from 'react'
import styles from '../Shared/SharedStyles.module.scss'
import classes from '../Shared/SharedStyles.module.scss'
import { MuiIcons } from './MuiIcons/MuiIcons'
import { CusIcons } from './CusIcons/CusIcons'
import { ToolbarIcons } from './ToolbarIcons/ToolbarIcons'
import { ActionIcons } from './ActionIcons/ActionIcons'

export function TestUiSandboxScreen6() {
    return (
        <div
            className={`${styles['base-ui-sandbox']} ${styles.white}  custom-scroll-area vert-scroll`}
        >
            <div>
                <h6>
                    Toolbar Icons {'>'} Studio Custom Library
                    <span className={classes['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>Custom SVG - Fixed size SVG action balls for Toolbars.</i>
            </div>
            <ToolbarIcons />

            <div>
                <h6>
                    Custom Icons {'>'} Studio Custom Library
                    <span className={classes['tag-highlight-red']}>
                        Deprecated. Do not use this for new stuff.
                    </span>
                </h6>
                <i>Custom SVG - Fixed size SVG action grey icons.</i>
            </div>
            <ActionIcons />

            <div>
                <h6>
                    Custom Icons {'>'} Studio Custom Library
                    <span className={classes['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>
                    Custom SVG - Hand Crafted React Wrapped SVG Scalable Icons.
                    Supports SIZE and COLOR as style prop.
                </i>
            </div>
            <CusIcons />

            <div>
                <h6>
                    Mui Icons {'>'} Material UI Icon Library
                    <span className={classes['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>
                    <a
                        href={'https://material-ui.com/components/icons/'}
                        target={'_blank'}
                    >
                        https://material-ui.com/components/icons/
                    </a>
                </i>
            </div>
            <MuiIcons />

            <hr />
        </div>
    )
}
