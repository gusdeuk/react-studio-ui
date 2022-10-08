import React from 'react'
import classesScoped from './MuiGrid.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import { Grid } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
    createStyles({
        boxedStuffA: {
            backgroundColor: '#ffeebe',
            color: '#7d7b45',
            textAlign: 'center',
            padding: '10px',
            fontSize: '11px',
            margin: '0 0 1px 1px',
            borderCollapse: 'collapse',
        },
        boxedStuffB: {
            backgroundColor: '#beffc1',
            color: '#487d4a',
            textAlign: 'center',
            padding: '10px',
            fontSize: '11px',
        },
        boxedStuffC: {
            backgroundColor: '#ffccbe',
            color: '#7d4d38',
            textAlign: 'center',
            padding: '10px',
            fontSize: '11px',
        },
    })
)

export function MuiGrid() {
    const classesLocal = useStyles()

    return (
        <div className={classesScoped['grid-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>
                    <div className={classes.subtitle}>
                        MUI Grid {'>'} Examples {'>'} spacing={0}
                    </div>

                    <div className={'mui-grid-custom'}>
                        <Grid container spacing={0}>
                            <Grid item xs={12}>
                                <div className={classesLocal.boxedStuffA}>
                                    xs=12
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className={classesLocal.boxedStuffA}>
                                    xs=12 sm=6
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className={classesLocal.boxedStuffA}>
                                    xs=12 sm=6
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <div className={classesLocal.boxedStuffA}>
                                    xs=12 sm=4
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <div className={classesLocal.boxedStuffA}>
                                    xs=12 sm=4
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <div className={classesLocal.boxedStuffA}>
                                    xs=12 sm=4
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className={classesLocal.boxedStuffA}>
                                    xs=6 sm=3
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className={classesLocal.boxedStuffA}>
                                    xs=6 sm=3
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className={classesLocal.boxedStuffA}>
                                    xs=6 sm=3
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className={classesLocal.boxedStuffA}>
                                    xs=6 sm=3
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={classes.subtitle}>
                        MUI Grid {'>'} Examples {'>'} spacing={1}
                    </div>

                    <div className={'mui-grid-custom'}>
                        <Grid container spacing={1}>
                            <Grid item xs={12}>
                                <div className={classesLocal.boxedStuffB}>
                                    xs=12
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className={classesLocal.boxedStuffB}>
                                    xs=12 sm=6
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className={classesLocal.boxedStuffB}>
                                    xs=12 sm=6
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <div className={classesLocal.boxedStuffB}>
                                    xs=12 sm=4
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <div className={classesLocal.boxedStuffB}>
                                    xs=12 sm=4
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <div className={classesLocal.boxedStuffB}>
                                    xs=12 sm=4
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className={classesLocal.boxedStuffB}>
                                    xs=6 sm=3
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className={classesLocal.boxedStuffB}>
                                    xs=6 sm=3
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className={classesLocal.boxedStuffB}>
                                    xs=6 sm=3
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className={classesLocal.boxedStuffB}>
                                    xs=6 sm=3
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <div className={classes.subtitle}>
                        MUI Grid {'>'} Examples {'>'} spacing={2}
                    </div>

                    <div className={'mui-grid-custom'}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div className={classesLocal.boxedStuffC}>
                                    xs=12
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className={classesLocal.boxedStuffC}>
                                    xs=12 sm=6
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <div className={classesLocal.boxedStuffC}>
                                    xs=12 sm=6
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <div className={classesLocal.boxedStuffC}>
                                    xs=12 sm=4
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <div className={classesLocal.boxedStuffC}>
                                    xs=12 sm=4
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <div className={classesLocal.boxedStuffC}>
                                    xs=12 sm=4
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className={classesLocal.boxedStuffC}>
                                    xs=6 sm=3
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className={classesLocal.boxedStuffC}>
                                    xs=6 sm=3
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className={classesLocal.boxedStuffC}>
                                    xs=6 sm=3
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                                <div className={classesLocal.boxedStuffC}>
                                    xs=6 sm=3
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    )
}
