import React from 'react'
import classesScoped from './MuiSwitches.module.scss'
import Switch from '@material-ui/core/Switch/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import classes from '../../Shared/SharedStyles.module.scss'

export function MuiSwitches() {
    const handleChangeSwitch = () => {
        alert('change')
    }

    return (
        <div className={classesScoped['switches-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Default Switch Examples with Label - On / Off / Disabled
                    </div>

                    <div className='mui-switch-custom'>
                        <FormControlLabel
                            control={
                                <Switch
                                    className='switch-cyan'
                                    name='diffModeXML'
                                    onChange={handleChangeSwitch}
                                    checked={true}
                                />
                            }
                            label='Checked state'
                        />
                    </div>

                    <div className='mui-switch-custom'>
                        <FormControlLabel
                            control={
                                <Switch
                                    className='switch-cyan'
                                    name='diffModeXML'
                                    onChange={handleChangeSwitch}
                                    checked={false}
                                />
                            }
                            label='Unchecked state'
                        />
                    </div>

                    <div className='mui-switch-custom'>
                        <FormControlLabel
                            control={
                                <Switch
                                    className='switch-cyan'
                                    name='diffModeXML'
                                    onChange={handleChangeSwitch}
                                    checked={true}
                                    disabled={true}
                                />
                            }
                            label='Disabled state'
                        />
                    </div>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Examples with Label - available colors for statuses, etc
                    </div>

                    <div className='mui-switch-custom'>
                        <FormControlLabel
                            control={
                                <Switch
                                    className='switch-cyan'
                                    name='diffModeXML'
                                    onChange={handleChangeSwitch}
                                    checked={true}
                                />
                            }
                            label='Cyan Switch - This is a label'
                        />
                    </div>

                    <div className='mui-switch-custom'>
                        <FormControlLabel
                            control={
                                <Switch
                                    className='switch-red'
                                    name='diffModeXML'
                                    onChange={handleChangeSwitch}
                                    checked={true}
                                />
                            }
                            label='Red Switch - This is a label'
                        />
                    </div>

                    <div className='mui-switch-custom'>
                        <FormControlLabel
                            control={
                                <Switch
                                    className='switch-green'
                                    name='diffModeXML'
                                    onChange={handleChangeSwitch}
                                    checked={true}
                                />
                            }
                            label='Green Switch - This is a label'
                        />
                    </div>

                    <div className='mui-switch-custom'>
                        <FormControlLabel
                            control={
                                <Switch
                                    className='switch-purple'
                                    name='diffModeXML'
                                    onChange={handleChangeSwitch}
                                    checked={true}
                                />
                            }
                            label='Purple Switch - This is a label'
                        />
                    </div>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Examples with specific light colors for user roles
                    </div>

                    <div className='mui-switch-custom'>
                        <FormControlLabel
                            control={
                                <Switch
                                    className='switch-light-cyan'
                                    name='diffModeXML'
                                    onChange={handleChangeSwitch}
                                    checked={true}
                                />
                            }
                            label='Cyan Light Switch - Owner'
                        />
                    </div>

                    <div className='mui-switch-custom'>
                        <FormControlLabel
                            control={
                                <Switch
                                    className='switch-light-pink'
                                    name='diffModeXML'
                                    onChange={handleChangeSwitch}
                                    checked={true}
                                />
                            }
                            label='Pink Light Switch - Developer'
                        />
                    </div>

                    <div className='mui-switch-custom'>
                        <FormControlLabel
                            control={
                                <Switch
                                    className='switch-light-orange'
                                    name='diffModeXML'
                                    onChange={handleChangeSwitch}
                                    checked={true}
                                />
                            }
                            label='Orange Light Switch - Visitor'
                        />
                    </div>

                    <div className='mui-switch-custom'>
                        <FormControlLabel
                            control={
                                <Switch
                                    className='switch-light-purple'
                                    name='diffModeXML'
                                    onChange={handleChangeSwitch}
                                    checked={true}
                                />
                            }
                            label='Purple Light Switch - Other Role'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
