import React from 'react'
import classesScoped from './MuiChips.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import { Chip } from '@material-ui/core'
import { Clear } from '@material-ui/icons'

export function MuiChips() {
    return (
        <div className={classesScoped['mui-chips-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>Size examples</div>
                    <div className={'MuiChip-chip-group '}>
                        <Chip
                            label='small'
                            size={'small'}
                            classes={{ root: 'MuiChip-root' }}
                        />
                        <Chip
                            label='medium'
                            size={'medium'}
                            classes={{ root: 'MuiChip-root' }}
                        />
                    </div>
                    <div className={'MuiChip-chip-group '}>
                        <Chip
                            label='small'
                            size={'small'}
                            classes={{ root: 'MuiChip-root' }}
                            onDelete={function () {}}
                            deleteIcon={<Clear />}
                        />
                        <Chip
                            label='medium'
                            size={'medium'}
                            classes={{ root: 'MuiChip-root' }}
                            onDelete={function () {}}
                            deleteIcon={<Clear />}
                        />
                    </div>

                    <div className={classes.subtitle}>
                        Color samples for statuses / Removable
                    </div>
                    <div className={'MuiChip-chip-group '}>
                        <Chip
                            label='chip-red'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-red' }}
                            onDelete={function () {}}
                            deleteIcon={<Clear />}
                        />
                        <Chip
                            label='chip-green'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-green' }}
                            onDelete={function () {}}
                            deleteIcon={<Clear />}
                        />
                        <Chip
                            label='chip-cyan'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-cyan' }}
                            onDelete={function () {}}
                            deleteIcon={<Clear />}
                        />
                        <Chip
                            label='chip-purple'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-purple' }}
                            onDelete={function () {}}
                            deleteIcon={<Clear />}
                        />
                    </div>
                    <div className={classes.subtitle}>
                        Color samples for statuses  / Disabled
                    </div>
                    <div className={'MuiChip-chip-group '}>
                        <Chip
                            label='chip-red'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-red' }}
                            disabled
                        />
                        <Chip
                            label='chip-green'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-green' }}
                            disabled
                        />
                        <Chip
                            label='chip-cyan'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-cyan' }}
                            disabled
                        />
                        <Chip
                            label='chip-purple'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-purple' }}
                            disabled
                        />
                    </div>

                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Color samples for Owner / Developer / Visitor / Other
                    </div>
                    <div className={'MuiChip-chip-group '}>
                        <Chip
                            label='chip-light-pink'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-light-pink' }}
                            onDelete={function () {}}
                            deleteIcon={<Clear />}
                        />
                        <Chip
                            label='chip-light-cyan'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-light-cyan' }}
                            onDelete={function () {}}
                            deleteIcon={<Clear />}
                        />
                        <Chip
                            label='chip-light-purple'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-light-purple' }}
                            onDelete={function () {}}
                            deleteIcon={<Clear />}
                        />
                        <Chip
                            label='chip-light-orange'
                            size={'small'}
                            classes={{ root: 'MuiChip-root chip-light-orange' }}
                            onDelete={function () {}}
                            deleteIcon={<Clear />}
                        />
                    </div>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Max width with css ellipsis
                    </div>

                    <div className={'MuiChip-chip-group '}>
                            <Chip
                                label='Lorem Ipsum Big text lorem ipsum'
                                size={'small'}
                                classes={{ root: 'MuiChip-root' }}
                                style={{maxWidth:'100px'}}
                                onDelete={function () {}}
                                deleteIcon={<Clear />}

                            />
                            <Chip
                                label='Lorem Ipsum Big text lorem ipsum'
                                size={'medium'}
                                classes={{ root: 'MuiChip-root' }}
                                style={{maxWidth:'100px'}}
                                onDelete={function () {}}
                                deleteIcon={<Clear />}
                            />
                    </div>


                    <div className={classes.subtitle}>
                        Fixed width
                    </div>

                    <div className={'MuiChip-chip-group '}>
                        <Chip
                            label='Lorem Ipsum Big text lorem ipsum'
                            size={'small'}
                            classes={{ root: 'MuiChip-root' }}
                            style={{width:'300px'}}

                        />
                        <Chip
                            label='Lorem Ipsum Big text lorem ipsum'
                            size={'medium'}
                            classes={{ root: 'MuiChip-root' }}
                            style={{width:'300px'}}
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}
