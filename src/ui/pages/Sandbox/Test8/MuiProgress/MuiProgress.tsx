import React from 'react';
import classesScoped from './MuiProgress.module.scss';
import classes from '../../Shared/SharedStyles.module.scss';

import Skeleton from '@material-ui/lab/Skeleton';
import { Box, CircularProgress, CircularProgressProps, LinearProgressProps, Typography } from '@material-ui/core';
import { LinearProgress } from '@material-ui/core';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number }) {
    return (
        <Box position="relative" display="inline-flex">
            <CircularProgress variant="static" {...props} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}


function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box display="flex" alignItems="center">
            <Box width="100%" mr={1}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box minWidth={35}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

function MuiProgress() {

    return (
        <div className={classesScoped['progress-component']}>


            <div className={classes.subtitle}>MUI Progress {'>'} Circular
            </div>

            <div className={classes['content-row']}>
                <div className={classes['content-col-3']}>
                    <p>Circular Indeterminate Looped / Primary / Secondary colors</p>
                    <div style={{ display: 'inline-flex' }}>
                        <CircularProgress/>&nbsp;&nbsp;
                        <CircularProgress color="secondary"/>&nbsp;&nbsp;
                    </div>
                </div>

                <div className={classes['content-col-3']}>
                    <p>Circular Determinate values (25/50/75/100)</p>
                    <div style={{ display: 'inline-flex' }}>
                        <CircularProgress variant="static" value={25}/>&nbsp;&nbsp;
                        <CircularProgress variant="static" value={50}/>&nbsp;&nbsp;
                        <CircularProgress variant="static" value={75}/>&nbsp;&nbsp;
                        <CircularProgress variant="static" value={100}/>&nbsp;&nbsp;


                    </div>

                </div>

                <div className={classes['content-col-3']}>
                    <p>Circular Determinate value with label (65%)</p>
                    <CircularProgressWithLabel value={65}/>
                </div>

            </div>
            <div className={classes.subtitle}>MUI Progress {'>'} Linear
            </div>

            <div className={classes['content-row']}>

                <div className={classes['content-col-1']}>
                    <div style={{ marginBottom: '8px' }}>Linear Indeterminate looped value with label - Primary
                    </div>
                    <LinearProgress/>
                    <br/>
                    <div style={{ marginBottom: '8px' }}>Linear Indeterminate looped value with label -
                        Secondary
                    </div>
                    <LinearProgress color="secondary"/>

                </div>
            </div>
            <div className={classes['content-row']}>

                <div className={classes['content-col-1']}>
                    <br/>
                    <div style={{ marginBottom: '8px' }}>Linear Progress Determinate value (Example 65%)</div>
                    <LinearProgress variant="determinate" color="primary" value={65}/>
                    <br/>
                    <div style={{ marginBottom: '0' }}>Linear Progress Determinate value with label (Example 65%)</div>
                    <LinearProgressWithLabel value={65}/>

                </div>

            </div>


        </div>
    );
}

export default MuiProgress;
