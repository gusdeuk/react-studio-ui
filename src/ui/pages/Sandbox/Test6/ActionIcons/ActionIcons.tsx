import React from 'react'
import classesScoped from './ActionIcons.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'

export function ActionIcons() {
    return (
        <div className={classesScoped['actions-icons-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>
                    <div className={classes.subtitle}>
                        Grey Actions Legacy Style Icon Figures. Global classes
                        bgd based SVG's fixed to 20x20px
                    </div>

                    <div className={classes['content-row']}>
                        <div className={classes['content-col-1']}>
                            <div className={classesScoped.gallery}>
                                <div className='ico-actions-baseline' />
                                <div className='ico-actions-check' />
                                <div className='ico-actions-branch' />
                                <div className='ico-actions-deploy' />
                                <div className='ico-actions-dots' />
                                <div className='ico-actions-gen-publish' />
                                <div className='ico-actions-promote' />
                                <div className='ico-actions-star' />
                                <div className='ico-actions-export' />
                                <div className='ico-actions-screen' />
                                <div className='ico-actions-processes' />
                                <div className='ico-actions-settings' />
                                <div className='ico-actions-transactions' />
                                <div className='ico-actions-versions' />
                                <div className='ico-actions-delete' />
                                <div className='ico-actions-design' />
                                <div className='ico-actions-duplicate' />
                                <div className='ico-actions-edit' />
                                <div className='ico-actions-edit-plus' />
                                <div className='ico-actions-download' />
                                <div className='ico-actions-add-plus' />
                                <div className='ico-actions-link' />
                                <div className='ico-actions-composite' />
                                <div className='ico-actions-settings-modal' />
                                <div className='ico-actions-library' />
                                <div className='ico-actions-library-bulleted' />
                                <div className='ico-actions-versions' />
                                <div className='ico-actions-parameters' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
