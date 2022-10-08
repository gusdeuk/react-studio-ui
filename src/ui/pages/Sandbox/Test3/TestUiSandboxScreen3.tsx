import React from 'react'
import classes from '../Shared/SharedStyles.module.scss'
import { MuiInputs } from './MuiInputs/MuiInputs'
import { MuiAutocomplete } from './MuiAutocomplete/MuiAutocomplete'
import { Uploaders } from './Uploaders/Uploaders'

export function TestUiSandboxScreen3() {
    return (
        <div
            className={`${classes['base-ui-sandbox']} ${classes.white}  custom-scroll-area vert-scroll`}
        >
            <div>
                <h6>
                    Simple Resource Uploader {'>'}{' '}
                    <span className={classes['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>
                    Simple configurable uploader for a single base 64 resource,
                    matching with current studio UI's
                </i>
                <Uploaders />
            </div>

            <div>
                <h6>
                    MUI Autocomplete {'>'}{' '}
                    <span className={classes['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>
                    <a
                        href={
                            'https://material-ui.com/components/autocomplete/'
                        }
                        target={'_blank'}
                    >
                        https://material-ui.com/components/autocomplete/
                    </a>
                </i>
                <MuiAutocomplete />
            </div>

            <div>
                <h6>
                    MUI Input Components {'>'} (Label, Input Field, Helper text)
                    <span className={classes['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>
                    <a
                        href={'https://material-ui.com/api/input/'}
                        target={'_blank'}
                    >
                        https://material-ui.com/api/input/
                    </a>
                </i>
                <MuiInputs />
            </div>

            <hr />
        </div>
    )
}
