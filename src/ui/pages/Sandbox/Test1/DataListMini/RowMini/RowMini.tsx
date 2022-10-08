import React from 'react'
import classes from './RowMini.module.scss'
import classesShared from '../Shared/Columns.module.scss'
import { Chip } from '@material-ui/core'
import { Clear } from '@material-ui/icons'

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
                <span>Lorem Ipsum Dolor Sit Ipsum Dolor Sit </span>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 1
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classesShared['data-cell'],
                    classesShared['data-col-1'],
                ].join(' ')}
            >
                <div className={'MuiChip-chip-group '}>
                    <Chip
                        label='chip'
                        size={'small'}
                        classes={{ root: 'MuiChip-root chip-red' }}
                        onDelete={function () {}}
                        deleteIcon={<Clear />}
                    />
                    <Chip
                        label='chip'
                        size={'small'}
                        classes={{ root: 'MuiChip-root chip-green' }}
                        onDelete={function () {}}
                        deleteIcon={<Clear />}
                    />
                    <Chip
                        label='chip'
                        size={'small'}
                        classes={{ root: 'MuiChip-root chip-cyan' }}
                        onDelete={function () {}}
                        deleteIcon={<Clear />}
                    />
                    <Chip
                        label='chip'
                        size={'small'}
                        classes={{ root: 'MuiChip-root chip-purple' }}
                        onDelete={function () {}}
                        deleteIcon={<Clear />}
                    />
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
                <span>Lorem Ipsum</span>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 3
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-3'],
                ].join(' ')}
            >
                <span>Lorem Ipsum </span>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 4
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-4'],
                ].join(' ')}
            >
                <span>Lorem Ipsum</span>
            </div>
        </div>
    )
}
