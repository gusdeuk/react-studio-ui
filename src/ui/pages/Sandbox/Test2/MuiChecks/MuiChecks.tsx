import React from 'react'
import classesScoped from './MuiChecks.module.scss'
import Checkbox from '@material-ui/core/Checkbox/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import classes from '../../Shared/SharedStyles.module.scss'

export function MuiChecks() {
    const onChange = () => {
        alert('change')
    }

    return (
        <div className={classesScoped['checks-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Primary checked / Secondary checked / Default checked /
                        Disabled checked{' '}
                    </div>

                    <div>
                        <span className={'mui-check-custom'}>
                            <Checkbox
                                onChange={onChange}
                                checked={true}
                                disableRipple
                                color='primary'
                                className={'mui-check-custom'}
                            />
                        </span>
                        <span className={'mui-check-custom'}>
                            <Checkbox
                                onChange={onChange}
                                checked={true}
                                disableRipple
                                color='secondary'
                            />
                        </span>
                        <span className={'mui-check-custom'}>
                            <Checkbox
                                onChange={onChange}
                                checked={true}
                                disableRipple
                                color='default'
                            />
                        </span>
                        <span className={'mui-check-custom'}>
                            <Checkbox
                                onChange={onChange}
                                checked={true}
                                disableRipple
                                color='primary'
                                disabled={true}
                            />
                        </span>
                    </div>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Primary unchecked / Secondary unchecked / Default
                        unchecked / Disabled unchecked{' '}
                    </div>

                    <div>
                        <span className={'mui-check-custom'}>
                            <Checkbox
                                onChange={onChange}
                                checked={false}
                                disableRipple
                                color='primary'
                                className={'mui-check-custom'}
                            />
                        </span>
                        <span className={'mui-check-custom'}>
                            <Checkbox
                                onChange={onChange}
                                checked={false}
                                disableRipple
                                color='secondary'
                            />
                        </span>
                        <span className={'mui-check-custom'}>
                            <Checkbox
                                onChange={onChange}
                                checked={false}
                                disableRipple
                                color='default'
                            />
                        </span>
                        <span className={'mui-check-custom'}>
                            <Checkbox
                                onChange={onChange}
                                checked={false}
                                disableRipple
                                color='primary'
                                disabled={true}
                            />
                        </span>
                    </div>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Example label positions with label Wrapper
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <span className={'mui-check-custom'}>
                            <FormControlLabel
                                value='bottom'
                                control={
                                    <Checkbox
                                        onChange={onChange}
                                        checked={true}
                                        disableRipple
                                        color='primary'
                                    />
                                }
                                label='Example with Label on End'
                                labelPlacement='end'
                            />
                        </span>

                        <span className={'mui-check-custom'}>
                            <FormControlLabel
                                value='bottom'
                                control={
                                    <Checkbox
                                        onChange={onChange}
                                        checked={true}
                                        disableRipple
                                        color='primary'
                                    />
                                }
                                label='Example with Label on Bottom'
                                labelPlacement='bottom'
                            />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
