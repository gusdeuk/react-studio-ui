import React, { Component } from 'react';

import styles from '../Shared/SharedStyles.module.scss';

import MuiSkeletons from './MuiSkeletons/MuiSkeletons';
import MuiProgress from './MuiProgress/MuiProgress';


export class TestUiSandboxScreen8 extends Component<Props, State> {

    constructor(props:any) {
        super(props);

    }


    render() {
        return (
            <div className={`${styles["base-ui-sandbox"]} ${styles.white}  custom-scroll-area vert-scroll`}>
                <div>


                    <h6>Mui Progress / Spinners <span
                        className={styles["tag-highlight-green"]}>Studio restyled version</span>
                    </h6>

                    <i><a href={'https://material-ui.com/components/progress/'} target={'_blank'} >https://material-ui.com/components/progress/</a></i>

                    <MuiProgress/>

                    <h6>Mui Skeleton <span
                        className={styles["tag-highlight-green"]}>Studio restyled version</span>
                    </h6>

                    <i><a href={'https://material-ui.com/components/skeleton/'} target={'_blank'} >https://material-ui.com/components/skeleton/</a></i>

                    <MuiSkeletons/>



                </div>

                <hr/>
            </div>
        );
    }
}

interface State {

}

interface Props {

}

