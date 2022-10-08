import React from 'react'
import classesScoped from './MuiTooltips.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import { Tooltip } from '@material-ui/core'

export function MuiTooltips() {
    return (
        <div className={classesScoped['tooltips-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>
                    <div className={classes.subtitle}>
                        Tooltips Applied to different positions
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Tooltip
                            title={'This is a Tooltip text'}
                            placement='top'
                            arrow
                            className={'mui-tooltip-custom'}
                        >
                            <div>Tooltip to TOP [hover here]</div>
                        </Tooltip>

                        <div className={classes['pipe-sep-cyan']}>|</div>

                        <Tooltip
                            title={'Ths is a Tooltip text'}
                            placement='bottom'
                            arrow
                            className={'mui-tooltip-custom'}
                        >
                            <div>Tooltip to BOTTOM [hover here]</div>
                        </Tooltip>

                        <div className={classes['pipe-sep-cyan']}>|</div>

                        <Tooltip
                            title={'Ths is a Tooltip text'}
                            placement='right'
                            arrow
                            className={'mui-tooltip-custom'}
                        >
                            <div>Tooltip to RIGHT [hover here]</div>
                        </Tooltip>

                        <div className={classes['pipe-sep-cyan']}>|</div>

                        <Tooltip
                            title={'Ths is a Tooltip text'}
                            placement='left'
                            arrow
                            className={'mui-tooltip-custom'}
                        >
                            <div>Tooltip to LEFT [hover here]</div>
                        </Tooltip>
                    </div>

                    <div className={classes.subtitle}>
                        Tooltip with sample html content
                    </div>
                    <div style={{ display: 'flex' }}>
                        <Tooltip
                            title={
                                <React.Fragment>
                                    Tooltip with HTML
                                    <em>{"And here's"}</em> <b>{'some'}</b>{' '}
                                    <u>{'amazing content'}</u>. <br />
                                    {"It's very engaging. Right?"}
                                </React.Fragment>
                            }
                            placement='right'
                            arrow
                            className={'mui-tooltip-custom'}
                        >
                            <div>Tooltip with html content</div>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </div>
    )
}
