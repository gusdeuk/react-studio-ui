import React from 'react'
import classesScoped from './ToolbarIcons.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'

export function ToolbarIcons() {
    return (
        <div className={classesScoped['tool-icons-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>
                    <div className={classes.subtitle}>
                        Toolbar Legacy Style Icon Figures. Global classes bgd
                        based SVG's fixed to 37x37px
                    </div>

                    <div className={classes['content-row']}>
                        <div className={classes['content-col-1']}>
                            <div className={classesScoped.gallery}>
                                <div className='ico-trash-ball' />
                                <div className='ico-trash-ball-red ' />
                                <div className='ico-copy-ball ' />
                                <div className='ico-download-ball ' />
                                <div className='ico-upload-ball ' />
                                <div className='ico-export-ball' />
                                <div className='ico-settings-ball ' />
                                <div className='ico-move-ball ' />
                                <div className='ico-import-ball' />
                                <div className='ico-generate-and-publish-ball ' />
                                <div className='ico-sort-down-last-ball ' />
                                <div className='ico-sort-down-ball ' />
                                <div className='ico-sort-up-last-ball ' />
                                <div className='ico-sort-up-ball ' />
                                <div className='ico-set-as-icon-ball' />
                                <div className='ico-compare-ball' />
                                <div className='ico-revert-time' />
                                <div className='ico-unlink-ball' />
                                <div className='ico-hotfix-commit-ball ' />
                                <div className='ico-hotfix-update-ball ' />
                                <div className='ico-manage-users-ball' />
                                <div className='ico-star-with-arrow-ball' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
