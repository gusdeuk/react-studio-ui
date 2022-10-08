import React, { Component } from 'react';

import styles from '../Shared/SharedStyles.module.scss';
import MuiSliders from './MuiSliders/MuiSliders';
import MuiDateTime from './MuiDateTime/MuiDateTime';

export class TestUiSandboxScreen9 extends Component<Props, State> {

    constructor(props:any) {
        super(props);

    }


    render() {
        return (
            <div className={`${styles["base-ui-sandbox"]} ${styles.white}  custom-scroll-area vert-scroll`}>

                <div>
                    <h6>Mui Sliders <span
                        className={styles["tag-highlight-green"]}>Studio restyled version</span>
                    </h6>
                    <i><a href={'https://material-ui.com/components/slider/'} target={'_blank'} >https://material-ui.com/components/slider/</a></i>
                    <MuiSliders/>
                </div>

                <div>
                    <h6>Mui Date / Time Pickers <span
                        className={styles["tag-highlight-green"]}>Studio restyled version</span>
                    </h6>
                    <i><a href={'https://material-ui.com/components/pickers/'} target={'_blank'} >https://material-ui.com/components/pickers/</a></i>
                    <MuiDateTime/>
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

