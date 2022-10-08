import React from 'react'
import classesScoped from './MuiButtons.module.scss'
import Button from '@material-ui/core/Button'
import classes from '../../Shared/SharedStyles.module.scss'

export function MuiButtons() {
    const onChange = () => {
        alert('change')
    }

    return (
        <div className={classesScoped['buttons-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>Contained variant</div>

                    <div>
                        <Button
                            onClick={onChange}
                            color={'primary'}
                            variant={'contained'}
                            disableElevation
                            disableRipple
                        >
                            Primary cont
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            onClick={onChange}
                            color={'secondary'}
                            variant={'contained'}
                            disableElevation
                            disableRipple
                        >
                            Secondary cont
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            onClick={onChange}
                            color={'default'}
                            variant={'contained'}
                            disableElevation
                            disableRipple
                            className={'color-purple'}
                        >
                            Custom cont
                        </Button>
                        &nbsp;&nbsp;
                    </div>

                    <div className={classes.subtitle}>Disabled States</div>
                    <div>
                        <Button
                            onClick={onChange}
                            color={'primary'}
                            disabled
                            variant={'contained'}
                            disableElevation
                            disableRipple
                        >
                            Primary cont
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            onClick={onChange}
                            color={'secondary'}
                            disabled
                            variant={'contained'}
                            disableElevation
                            disableRipple
                        >
                            Secondary cont
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            onClick={onChange}
                            color={'default'}
                            disabled
                            variant={'contained'}
                            disableElevation
                            disableRipple
                            className={'color-purple'}
                        >
                            Custom cont
                        </Button>
                        &nbsp;&nbsp;
                    </div>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>Outlined variant</div>
                    <div>
                        <Button
                            onClick={onChange}
                            color={'primary'}
                            variant={'outlined'}
                            disableElevation
                            disableRipple
                        >
                            Primary out
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            onClick={onChange}
                            color={'secondary'}
                            variant={'outlined'}
                            disableElevation
                            disableRipple
                        >
                            Secondary out
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            onClick={onChange}
                            color={'default'}
                            variant={'outlined'}
                            disableElevation
                            disableRipple
                            className={'color-purple'}
                        >
                            Custom out
                        </Button>
                    </div>

                    <div className={classes.subtitle}>Disabled States</div>
                    <div>
                        <Button
                            onClick={onChange}
                            disabled
                            color={'primary'}
                            variant={'outlined'}
                            disableElevation
                            disableRipple
                        >
                            Primary out
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            onClick={onChange}
                            disabled
                            color={'secondary'}
                            variant={'outlined'}
                            disableElevation
                            disableRipple
                        >
                            Secondary out
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            onClick={onChange}
                            disabled
                            color={'default'}
                            variant={'outlined'}
                            disableElevation
                            disableRipple
                            className={'color-purple'}
                        >
                            Custom out
                        </Button>
                        &nbsp;&nbsp;
                    </div>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>Simple text button</div>
                    <div>
                        <Button
                            onClick={onChange}
                            color={'primary'}
                            variant={'text'}
                            disableElevation
                            disableRipple
                        >
                            Button Text
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            onClick={onChange}
                            color={'secondary'}
                            variant={'text'}
                            disableElevation
                            disableRipple
                        >
                            Button Text
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            onClick={onChange}
                            color={'default'}
                            variant={'text'}
                            disableElevation
                            disableRipple
                            className={'color-purple'}
                        >
                            Button Text
                        </Button>
                        &nbsp;&nbsp;
                    </div>

                    <div className={classes.subtitle}>Disabled States</div>
                    <div>
                        <Button
                            disabled
                            onClick={onChange}
                            color={'primary'}
                            variant={'text'}
                            disableElevation
                            disableRipple
                        >
                            Button Text
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            disabled
                            onClick={onChange}
                            color={'secondary'}
                            variant={'text'}
                            disableElevation
                            disableRipple
                        >
                            Button Text
                        </Button>
                        &nbsp;&nbsp;
                        <Button
                            disabled
                            onClick={onChange}
                            color={'default'}
                            variant={'text'}
                            disableElevation
                            disableRipple
                            className={'color-purple'}
                        >
                            Button Text
                        </Button>
                        &nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>
    )
}
