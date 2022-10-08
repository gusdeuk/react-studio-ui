import React from 'react'
import classes from './RowMini.module.scss'
import classesShared from '../Shared/Columns.module.scss'

export function RowMini() {
    return (
        <div className={[classes['row-data-list-component']].join(' ')}>
            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 0
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-0'],
                ].join(' ')}
            >
                <div className={'truncate'}>
                    Lorem Ipsum Dolor Sit Ipsum Dolor Sit Ipsum Dolor Sit Ipsum
                    Dolor Sit Ipsum Dolor Sit Ipsum Dolor Sit{' '}
                </div>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 1
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-1'],
                ].join(' ')}
            >
                <div className={'truncate'}>
                    Sit Ipsum Dolor Sit Ipsum Dolor Sit Ipsum Dolor Sit{' '}
                </div>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 2
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-2'],
                ].join(' ')}
            >
                <div className={'truncate'}>
                    Sit Ipsum Dolor Sit Ipsum Dolor Sit Ipsum Dolor Sit{' '}
                </div>
            </div>
        </div>
    )
}
