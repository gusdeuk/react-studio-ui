import React from 'react'
import classesScoped from './MuiRadios.module.scss'
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import classes from '../../Shared/SharedStyles.module.scss'

export function MuiRadios() {
    return (
        <div className={classesScoped['radios-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-2']}>
                    <div className={classes.subtitle}>
                        Group w/labels on end, Primary color
                    </div>
                    <RadioGroup
                        row
                        aria-label='position'
                        name='position'
                        defaultValue='top'
                    >
                        <div className='mui-radios-group-custom'>
                            <div className='mui-radios-custom'>
                                <FormControlLabel
                                    value='top'
                                    control={<Radio color='primary' />}
                                    label='Label'
                                    labelPlacement='end'
                                />
                                <FormControlLabel
                                    value='start'
                                    control={<Radio color='primary' />}
                                    label='Label'
                                    labelPlacement='end'
                                />
                                <FormControlLabel
                                    value='bottom'
                                    control={<Radio color='primary' />}
                                    label='Label'
                                    labelPlacement='end'
                                />
                                <FormControlLabel
                                    value='end'
                                    control={<Radio color='primary' disabled />}
                                    label='Label disabled item'
                                    labelPlacement='end'
                                />
                            </div>
                        </div>
                    </RadioGroup>
                </div>

                <div className={classes['content-col-2']}>
                    <div className={classes.subtitle}>
                        Group w/labels on top, Primary color
                    </div>
                    <RadioGroup
                        row
                        aria-label='position'
                        name='position'
                        defaultValue='top'
                    >
                        <div className='mui-radios-group-custom'>
                            <div className='mui-radios-custom'>
                                <FormControlLabel
                                    value='top'
                                    control={<Radio color='primary' />}
                                    label='Label'
                                    labelPlacement='top'
                                />
                                <FormControlLabel
                                    value='start'
                                    control={<Radio color='primary' />}
                                    label='Label'
                                    labelPlacement='top'
                                />
                                <FormControlLabel
                                    value='bottom'
                                    control={<Radio color='primary' />}
                                    label='Label'
                                    labelPlacement='top'
                                />
                                <FormControlLabel
                                    value='end'
                                    control={<Radio color='primary' disabled />}
                                    label='Label disabled item'
                                    labelPlacement='top'
                                />
                            </div>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}
