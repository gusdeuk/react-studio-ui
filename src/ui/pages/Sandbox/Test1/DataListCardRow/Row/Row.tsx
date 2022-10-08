import React from 'react'
import classes from './Row.module.scss'
import classesShared from '../Shared/Columns.module.scss'
import Checkbox from '@material-ui/core/Checkbox/Checkbox'
import { CusIconEdit } from '../../../../../styles/icons/react/CusIconEdit'
import { CusIconGenPublish } from '../../../../../styles/icons/react/CusIconGenPublish'
import { CusIconExport } from '../../../../../styles/icons/react/CusIconExport'
import { CusIconDelete } from '../../../../../styles/icons/react/CusIconDelete'
import { CusIconCopy } from '../../../../../styles/icons/react/CusIconCopy'
import { Chip, Tooltip } from '@material-ui/core'
import { Clear } from '@material-ui/icons'

export function Row(props: Props) {
    const testClick = () => {
        alert('test')
    }

    let selectedClass = ''
    let checkedState = false
    if (props.id === 'k1') {
        selectedClass = classes.selected
        checkedState = true
    }

    return (
        <div
            className={[classes['row-data-list-component'], selectedClass].join(
                ' '
            )}
        >
            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 0 > checks
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-0'],
                ].join(' ')}
            >
                <span className={'mui-check-custom'}>
                    <Checkbox
                        onChange={testClick}
                        checked={checkedState}
                        disableRipple
                        color='default'
                        className={'mui-check-custom'}
                    />
                </span>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 1 > Code
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classesShared['data-cell'],
                    classesShared['data-col-1'],
                ].join(' ')}
            >
                <div className={[classes['simple-text'], 'truncate'].join(' ')}>
                    0000{props.id}
                </div>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 2 > PREV JUMP
             * ---------------------------------------------------------------------------------------------
             **/}
            {/*TODO: show/hide this column dynamically while HOVERING the arrow in the header. USE OPACITY 0 to hide this*/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-2'],
                ].join(' ')}
            >
                <div className={[classes['simple-text'], 'truncate'].join(' ')}>
                    &nbsp;
                </div>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 3 > Name
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-3'],
                ].join(' ')}
            >
                <Tooltip
                    title={'This is a Tooltip text'}
                    placement='top'
                    arrow
                    className={'mui-tooltip-custom'}
                >
                    <div
                        className={[classes['simple-text'], 'truncate'].join(
                            ' '
                        )}
                    >
                        Lorem ipsum long name looooongggg
                    </div>
                </Tooltip>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 4 > Type
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-4'],
                ].join(' ')}
            >
                <div className={[classes['simple-text'], 'truncate'].join(' ')}>
                    Type
                </div>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 5 > Description
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-5'],
                ].join(' ')}
            >
                <Tooltip
                    title={'This is a Tooltip text'}
                    placement='top'
                    arrow
                    className={'mui-tooltip-custom'}
                >
                    <div className={'truncate-multiline-3'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam
                    </div>
                </Tooltip>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 6 Product
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-6'],
                ].join(' ')}
            >
                <div className={[classes['simple-text'], 'truncate'].join(' ')}>
                    Product
                </div>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 7 > Status
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-7'],
                ].join(' ')}
            >
                <div
                    className={[classes['status-icon'], classes.green].join(
                        ' '
                    )}
                />
                <span
                    className={[classes['simple-text'], 'truncate'].join(' ')}
                >
                    Status
                </span>
            </div>
            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 8 > Tags
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-8'],
                ].join(' ')}
            >
                <div className={'MuiChip-chip-group '}>
                    <Tooltip
                        title={'This is a Tooltip text'}
                        placement='top'
                        arrow
                        className={'mui-tooltip-custom'}
                    >
                        <Chip
                            label='chip'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-cyan' }}
                        />
                    </Tooltip>
                    <Tooltip
                        title={'This is a Tooltip text'}
                        placement='top'
                        arrow
                        className={'mui-tooltip-custom'}
                    >
                        <Chip
                            label='chip'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-cyan' }}
                        />
                    </Tooltip>
                </div>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 9 > Last Update
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-9'],
                ].join(' ')}
            >
                <Tooltip
                    title={'This is a Tooltip text'}
                    placement='top'
                    arrow
                    className={'mui-tooltip-custom'}
                >
                    <div
                        className={[classes['simple-text'], 'truncate'].join(
                            ' '
                        )}
                    >
                        April, 25 2019 16:45hs by Juan Carlos Batman
                    </div>
                </Tooltip>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 10 > NEXT JUMP
             * ---------------------------------------------------------------------------------------------
             **/}
            {/*TODO: show/hide this column dynamically while HOVERING the arrow in the header. USE OPACITY 0 to hide this*/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-10'],
                ].join(' ')}
            >
                <div className={[classes['simple-text'], 'truncate'].join(' ')}>
                    &nbsp;
                </div>
            </div>

            {/**
             * ---------------------------------------------------------------------------------------------
             * COL 11 > Actions
             * ---------------------------------------------------------------------------------------------
             **/}
            <div
                className={[
                    classes['row-data-cell'],
                    classesShared['data-cell'],
                    classesShared['data-col-11'],
                ].join(' ')}
            >
                <Tooltip
                    title={'This is a Tooltip text'}
                    placement='top'
                    arrow
                    className={'mui-tooltip-custom'}
                >
                    <div className={classes['action-button']}>
                        <CusIconEdit
                            style={{ fontSize: 20, color: '#818181' }}
                            className={'mui-icon-custom'}
                        />
                    </div>
                </Tooltip>

                <Tooltip
                    title={'This is a Tooltip text'}
                    placement='top'
                    arrow
                    className={'mui-tooltip-custom'}
                >
                    <div className={classes['action-button']}>
                        <CusIconGenPublish
                            style={{ fontSize: 20, color: '#818181' }}
                            className={'mui-icon-custom'}
                        />
                    </div>
                </Tooltip>

                <Tooltip
                    title={'This is a Tooltip text'}
                    placement='top'
                    arrow
                    className={'mui-tooltip-custom'}
                >
                    <div className={classes['action-button']}>
                        <CusIconExport
                            style={{ fontSize: 20, color: '#818181' }}
                            className={'mui-icon-custom'}
                        />
                    </div>
                </Tooltip>

                <Tooltip
                    title={'This is a Tooltip text'}
                    placement='top'
                    arrow
                    className={'mui-tooltip-custom'}
                >
                    <div className={[classes['action-button']].join(' ')}>
                        <CusIconCopy
                            style={{ fontSize: 20, color: '#818181' }}
                            className={'mui-icon-custom'}
                        />
                    </div>
                </Tooltip>

                <Tooltip
                    title={'This is a Tooltip text'}
                    placement='top'
                    arrow
                    className={'mui-tooltip-custom'}
                >
                    <div
                        className={[
                            classes['action-button'],
                            classes.disabled,
                        ].join(' ')}
                    >
                        <CusIconDelete
                            style={{ fontSize: 20, color: '#818181' }}
                            className={'mui-icon-custom'}
                        />
                    </div>
                </Tooltip>
            </div>
        </div>
    )
}

interface Props {
    id: string
}
