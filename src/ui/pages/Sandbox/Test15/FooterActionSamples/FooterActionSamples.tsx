import React from 'react'
import classesScoped from './FooterActionSamples.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import { FooterActions } from '../../../../components/FooterActions/FooterActions'

function FooterActionSamples() {
    const handleClick = () => {
        alert('click')
    }

    return (
        <div className={classesScoped['layout-legacy-style-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>
                    <div className={classes.subtitle}>
                        Footer Actions {'>'} Several button styles / full
                        content area screen style {'>'} use fixed to bottom part
                        of the screen, shadow / grey BGD / set fullScreenStyle
                        PROP
                    </div>
                    <div style={{ padding: '10px 0 0 0', overflow: 'hidden' }}>
                        <FooterActions
                            btnLeft1={{
                                label: 'Button Left 1',
                                color: 'primary',
                                variant: 'text',
                                callback: handleClick,
                                visible: true,
                            }}
                            btnLeft2={{
                                label: 'Button Left 2',
                                color: 'primary',
                                variant: 'contained',
                                callback: handleClick,
                                visible: true,
                            }}
                            btnLeft3={{
                                label: 'Button Left 3',
                                color: 'secondary',
                                variant: 'contained',
                                callback: handleClick,
                                visible: true,
                            }}
                            btnRight1={{
                                label: 'Button Right 1',
                                color: 'primary',
                                variant: 'text',
                                callback: handleClick,
                                visible: true,
                            }}
                            btnRight2={{
                                label: 'Button Right 2',
                                color: 'primary',
                                variant: 'contained',
                                callback: handleClick,
                                visible: true,
                            }}
                            btnRight3={{
                                label: 'Button Right 3',
                                color: 'secondary',
                                variant: 'contained',
                                callback: handleClick,
                                visible: true,
                            }}
                            fullScreenStyle
                        />
                    </div>

                    <div className={classes.subtitle}>
                        Footer Actions {'>'} Several button styles + white BGD
                        footer actions for modals
                    </div>

                    <div style={{ padding: '10px 0 0 0', overflow: 'hidden' }}>
                        <FooterActions
                            btnLeft1={{
                                label: 'Button Left 1',
                                color: 'primary',
                                variant: 'text',
                                callback: handleClick,
                                visible: true,
                            }}
                            btnLeft2={{
                                label: 'Button Left 2',
                                color: 'primary',
                                variant: 'contained',
                                callback: handleClick,
                                visible: true,
                            }}
                            btnLeft3={{
                                label: 'Button Left 3',
                                color: 'secondary',
                                variant: 'contained',
                                callback: handleClick,
                                visible: true,
                            }}
                            btnRight1={{
                                label: 'Button Right 1',
                                color: 'primary',
                                variant: 'text',
                                callback: handleClick,
                                visible: true,
                            }}
                            btnRight2={{
                                label: 'Button Right 2',
                                color: 'primary',
                                variant: 'contained',
                                callback: handleClick,
                                visible: true,
                            }}
                            btnRight3={{
                                label: 'Button Right 3',
                                color: 'secondary',
                                variant: 'contained',
                                callback: handleClick,
                                visible: true,
                            }}
                        />
                    </div>

                    <div className={classes.subtitle}>
                        Footer actions {'>'} Pass disabled Button props
                    </div>

                    <div style={{ padding: '10px 0 0 0', overflow: 'hidden' }}>
                        <FooterActions
                            btnLeft1={{
                                label: 'Button Left 1',
                                color: 'primary',
                                variant: 'text',
                                callback: handleClick,
                                visible: true,
                                disabled: true,
                            }}
                            btnLeft2={{
                                label: 'Button Left 2',
                                color: 'primary',
                                variant: 'contained',
                                callback: handleClick,
                                visible: true,
                                disabled: true,
                            }}
                            btnLeft3={{
                                label: 'Button Left 3',
                                color: 'secondary',
                                variant: 'contained',
                                callback: handleClick,
                                visible: true,
                                disabled: true,
                            }}
                            btnRight1={{
                                label: 'Button Right 1',
                                color: 'primary',
                                variant: 'text',
                                callback: handleClick,
                                visible: true,
                                disabled: true,
                            }}
                            btnRight2={{
                                label: 'Button Right 2',
                                color: 'primary',
                                variant: 'contained',
                                callback: handleClick,
                                visible: true,
                                disabled: true,
                            }}
                            btnRight3={{
                                label: 'Button Right 3',
                                color: 'secondary',
                                variant: 'contained',
                                callback: handleClick,
                                visible: true,
                                disabled: true,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterActionSamples
