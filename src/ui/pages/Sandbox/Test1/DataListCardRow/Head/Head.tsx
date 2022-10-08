import React from 'react'
import classes from './Head.module.scss'
import classesShared from '../Shared/Columns.module.scss'
import Checkbox from '@material-ui/core/Checkbox/Checkbox'
import { KeyboardArrowDown } from '@material-ui/icons'
import { KeyboardArrowUp } from '@material-ui/icons'
import { KeyboardArrowLeft } from '@material-ui/icons'
import { KeyboardArrowRight } from '@material-ui/icons'

export function Head() {
    const testClick = () => {
        alert('test')
    }

    return (
        <div className={classes['header-data-list-component']}>
            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-0'],
                ].join(' ')}
            >
                <span className={'mui-check-custom'}>
                    <Checkbox
                        onChange={testClick}
                        checked={false}
                        disableRipple
                        color='default'
                        className={'mui-check-custom  white-color'}
                    />
                </span>
            </div>

            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-1'],
                ].join(' ')}
            >
                <span>Code</span>
            </div>

            {/*PREV JUMP*/}
            {/*TODO: show/hide this column dynamically when needed*/}
            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-2'],
                ].join(' ')}
            >
                <KeyboardArrowLeft
                    style={{ fontSize: 18, color: '#FFF' }}
                    className={'customClassHere'}
                />
            </div>
            {/*PREV JUMP*/}

            {/*START HIDE BLOCK 1*/}
            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-3'],
                ].join(' ')}
            >
                <span>Name</span>
            </div>
            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-4'],
                ].join(' ')}
            >
                <span>Type</span>
            </div>
            {/*START HIDE BLOCK 1*/}

            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-5'],
                ].join(' ')}
            >
                <span>Description</span>
                <span className={classes['head-sorters']}>
                    <KeyboardArrowUp
                        style={{ fontSize: 12, color: '#FFF' }}
                        className={[
                            classes['sort-control'],
                            classes['sort-disabled'],
                        ].join(' ')}
                    />
                    <KeyboardArrowDown
                        style={{ fontSize: 12, color: '#FFF' }}
                        className={[classes['sort-control']].join(' ')}
                    />
                </span>
            </div>

            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-6'],
                ].join(' ')}
            >
                <span>Product</span>
                <span className={classes['head-sorters']}>
                    <KeyboardArrowUp
                        style={{ fontSize: 12, color: '#FFF' }}
                        className={[
                            classes['sort-control'],
                            classes['sort-disabled'],
                        ].join(' ')}
                    />
                    <KeyboardArrowDown
                        style={{ fontSize: 12, color: '#FFF' }}
                        className={[classes['sort-control']].join(' ')}
                    />
                </span>
            </div>

            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-7'],
                ].join(' ')}
            >
                <span>Status</span>
                <span className={classes['head-sorters']}>
                    <KeyboardArrowUp
                        style={{ fontSize: 12, color: '#FFF' }}
                        className={[
                            classes['sort-control'],
                            classes['sort-disabled'],
                        ].join(' ')}
                    />
                    <KeyboardArrowDown
                        style={{ fontSize: 12, color: '#FFF' }}
                        className={[classes['sort-control']].join(' ')}
                    />
                </span>
            </div>

            {/*START HIDE BLOCK 2*/}
            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-8'],
                ].join(' ')}
            >
                <span>Tags</span>
            </div>

            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-9'],
                ].join(' ')}
            >
                <span>Last Update</span>
                <span className={classes['head-sorters']}>
                    <KeyboardArrowUp
                        style={{ fontSize: 12, color: '#FFF' }}
                        className={[
                            classes['sort-control'],
                            classes['sort-disabled'],
                        ].join(' ')}
                    />
                    <KeyboardArrowDown
                        style={{ fontSize: 12, color: '#FFF' }}
                        className={[classes['sort-control']].join(' ')}
                    />
                </span>
            </div>
            {/*END HIDE BLOCK 2*/}

            {/*NEXT JUMP*/}
            {/*TODO: show/hide this column dynamically when needed*/}
            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-10'],
                ].join(' ')}
            >
                <KeyboardArrowRight
                    style={{ fontSize: 18, color: '#FFF' }}
                    className={'customClassHere'}
                />
            </div>
            {/*NEXT GT JUMP*/}

            <div
                className={[
                    classes['head-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-11'],
                ].join(' ')}
            >
                <span>Actions</span>
            </div>
        </div>
    )
}
