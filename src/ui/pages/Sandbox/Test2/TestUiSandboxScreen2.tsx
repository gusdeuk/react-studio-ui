import React from 'react'
import classes from '../Shared/SharedStyles.module.scss'
import { MuiSwitches } from './MuiSwitches/MuiSwitches'
import { MuiRadios } from './MuiRadios/MuiRadios'
import { MuiChips } from './MuiChips/MuiChips'
import { MuiButtons } from './MuiButtons/MuiButtons'
import { MuiChecks } from './MuiChecks/MuiChecks'

export function TestUiSandboxScreen2() {
    return (
        <div
            className={`${classes['base-ui-sandbox']} ${classes.white}  custom-scroll-area vert-scroll`}
        >
            <div>
                <h6>
                    MUI Buttons {'>'}{' '}
                    <span className={classes['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>
                    <a
                        href={'https://material-ui.com/components/buttons/'}
                        target={'_blank'}
                    >
                        https://material-ui.com/components/buttons/
                    </a>
                </i>
                <MuiButtons />
            </div>

            <hr />
            <div>
                <h6>
                    MUI Checks {'>'}{' '}
                    <span className={classes['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>
                    <a
                        href={'https://material-ui.com/components/checkboxes/'}
                        target={'_blank'}
                    >
                        https://material-ui.com/components/checkboxes/
                    </a>
                </i>
                <MuiChecks />
            </div>

            <hr />
            <div>
                <h6>
                    MUI Radios {'>'}{' '}
                    <span className={classes['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>
                    <a
                        href={
                            'https://material-ui.com/components/radio-buttons/'
                        }
                        target={'_blank'}
                    >
                        https://material-ui.com/components/radio-buttons/
                    </a>
                </i>
                <MuiRadios />
            </div>

            <hr />
            <div>
                <h6>
                    Mui Chips {'>'}{' '}
                    <span className={classes['tag-highlight-green']}>
                       Studio restyled version
                    </span>
                </h6>
                <i>
                    <a
                        href={'https://material-ui.com/components/chips/'}
                        target={'_blank'}
                    >
                        https://material-ui.com/components/chips/
                    </a>
                </i>
                <MuiChips />
            </div>

            <hr />
            <div>
                <h6>
                    MUI Switches {'>'}{' '}
                    <span className={classes['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>
                    <a
                        href={'https://material-ui.com/components/switches/'}
                        target={'_blank'}
                    >
                        https://material-ui.com/components/switches/
                    </a>
                </i>
                <MuiSwitches />
            </div>
        </div>
    )
}
