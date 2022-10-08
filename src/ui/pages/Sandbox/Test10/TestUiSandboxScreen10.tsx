import React, { Component } from 'react';

import styles from '../Shared/SharedStyles.module.scss';
import MuiBreadcrumbs from './MuiBreadCrumbs/MuiBreadcrumbs';
import ReactSelects from "./ReactSelects/ReactSelects";
import MuiSelects from "./MuiSelects/MuiSelects";
import MuiMenus from "./MuiMenus/MuiMenus";

export class TestUiSandboxScreen10 extends Component<Props, State> {

    constructor(props:any) {
        super(props);
    }


    render() {
        return (
            <div className={`${styles["base-ui-sandbox"]} ${styles.white}  custom-scroll-area vert-scroll`}>
                <div>
                    <h6>Mui Breadcrumbs <span
                        className={styles["tag-highlight-green"]}>Studio restyled version</span>
                    </h6>
                    <i><a href={'https://material-ui.com/components/breadcrumbs/'} target={'_blank'} >https://material-ui.com/components/breadcrumbs/</a></i>
                </div>
                <MuiBreadcrumbs/>

                <hr/>

                <div>
                    <h6>React Select Customized Components <span className={styles["tag-highlight-green"]}>Studio restyled version</span></h6>
                    <i><a href={'https://react-select.com/home'} target={'_blank'} >https://react-select.com/home</a></i>
                    <ReactSelects/>
                </div>

                <hr/>
                <div>
                    <h6>MUI Menus <span className={styles["tag-highlight-green"]}>Studio restyled version</span></h6>
                    <i><a href={'https://material-ui.com/components/menus/'} target={'_blank'} >https://material-ui.com/components/menus/</a></i>
                    <MuiMenus/>
                </div>


                <hr/>
                <div>
                    <h6>MUI Selects <span className={styles["tag-highlight-red"]}>Not styled yet, do not use this</span></h6>
                    <i><a href={'https://material-ui.com/components/selects/'} target={'_blank'} >https://material-ui.com/components/selects</a></i>
                    <MuiSelects/>
                </div>


            </div>
        );
    }
}

interface State {

}

interface Props {

}

