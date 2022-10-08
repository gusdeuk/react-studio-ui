import React from 'react'
import classesScoped from './MuiSnackbars.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import { Button } from '@material-ui/core'

import Snackbar, { SnackbarOrigin } from '@material-ui/core/Snackbar'
import { Alert } from '@material-ui/lab'

export interface State extends SnackbarOrigin {
    open: boolean
}

function MuiSnackbars() {
    const [state, setState] = React.useState<State>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    })
    const { vertical, horizontal, open } = state

    const handleClick = (newState: SnackbarOrigin) => () => {
        setState({ open: true, ...newState })
    }

    const handleClose = () => {
        setState({ ...state, open: false })
    }

    return (
        <div className={classesScoped['snackbars-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>
                    <div className={classes.subtitle}>
                        Creating Toasts using snackbars combined with NESTED
                        alert Components
                    </div>

                    <div>
                        <Button
                            variant='outlined'
                            onClick={handleClick({
                                vertical: 'top',
                                horizontal: 'center',
                            })}
                        >
                            Top-Center TOAST
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            variant='outlined'
                            onClick={handleClick({
                                vertical: 'top',
                                horizontal: 'right',
                            })}
                        >
                            Top-Right TOAST
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            variant='outlined'
                            onClick={handleClick({
                                vertical: 'bottom',
                                horizontal: 'right',
                            })}
                        >
                            Bottom-Right TOAST
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            variant='outlined'
                            onClick={handleClick({
                                vertical: 'bottom',
                                horizontal: 'center',
                            })}
                        >
                            Bottom-Center TOAST
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            variant='outlined'
                            onClick={handleClick({
                                vertical: 'bottom',
                                horizontal: 'left',
                            })}
                        >
                            Bottom-Left TOAST
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            variant='outlined'
                            onClick={handleClick({
                                vertical: 'top',
                                horizontal: 'left',
                            })}
                        >
                            Top-Left TOAST
                        </Button>
                        &nbsp;&nbsp;
                    </div>

                    <Snackbar
                        anchorOrigin={{ vertical, horizontal }}
                        open={open}
                        onClose={handleClose}
                        message='I love snacks'
                        key={vertical + horizontal}
                    >
                        <Alert
                            onClose={handleClose}
                            severity='success'
                            variant={'filled'}
                        >
                            This is a success message alert TOAST!
                        </Alert>
                    </Snackbar>
                </div>
            </div>
        </div>
    )
}

export default MuiSnackbars
