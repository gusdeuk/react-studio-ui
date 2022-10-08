import React from 'react';
import classesScoped from './MuiSkeletons.module.scss';
import classes from '../../Shared/SharedStyles.module.scss';

import Skeleton from '@material-ui/lab/Skeleton';

function MuiSkeletons() {

    return (
        <div className={classesScoped['skeletons-component']}>


            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>

                    <div className={classes['subtitle']}>MUI Skeletons {'>'} Examples {'>'} Animation Types</div>

                    <div>
                        <div>No animation</div>
                        <Skeleton height={35} animation={false} />
                        <br/>

                        <div>Pulsate animation</div>
                        <Skeleton height={35} />
                        <br/>

                        <div>Wave animation</div>
                        <Skeleton height={35} animation="wave" />
                    </div>
                    <br/>

                    <div className={classes['subtitle']}>MUI Skeletons {'>'} Props {'>'} variant / width and height</div>

                    <div className={'mui-skeleton-custom'}>
                        <div>TEXT variant width={500} height={35}</div>
                        <Skeleton variant="text" width={500} height={35} animation="wave"/>
                        <br/>
                        <div>CIRCLE variant width={40} height={40}</div>
                        <Skeleton variant="circle" width={40} height={40} animation="wave"/>
                        <br/>
                        <div>RECT variant width={500} height={118}</div>
                        <Skeleton variant="rect" width={500} height={118} animation="wave"/>
                    </div>


                </div>
            </div>

        </div>
    );
}

export default MuiSkeletons;
