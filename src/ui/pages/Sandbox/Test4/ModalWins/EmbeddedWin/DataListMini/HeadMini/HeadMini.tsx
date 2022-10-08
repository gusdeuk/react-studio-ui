import React from 'react'
import classes from './HeadMini.module.scss'
import classesShared from '../Shared/Columns.module.scss'

export function HeadMini() {
    return (
        <div className={classes['header-data-list-component']}>
            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-0'],
                ].join(' ')}
            >
                <span>Element</span>
            </div>

            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-1'],
                ].join(' ')}
            >
                <span>Type</span>
            </div>

            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-2'],
                ].join(' ')}
            >
                <span>Module</span>
            </div>
        </div>
    )
}
