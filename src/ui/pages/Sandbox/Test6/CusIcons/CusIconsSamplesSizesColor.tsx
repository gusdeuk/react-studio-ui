import React from 'react';
import classesScoped from './CusIcons.module.scss';
import classes from '../../Shared/SharedStyles.module.scss';

import { CusIconAddUser } from '../../../../styles/icons/react/CusIconAddUser';
import { CusIconHotFix } from '../../../../styles/icons/react/CusIconHotFix';
import { CusIconStar } from '../../../../styles/icons/react/CusIconStar';


function CusIconsSamplesSizesColor() {

    return (
        <div>

            {/* ----------------------------------------------------------------*/}
            {/* CUSTOM ICONS COMPONENTS SAMPLES*/}
            {/* ----------------------------------------------------------------*/}

            <div className={classes.subtitle}>Studio Custom Icon Components {'>'} Variable size and color samples
            </div>

            <div className={classes["content-row"]}>

                <div className={classes["content-col-3"]}>
                    <div className={classes["margin-bot-sep"]}>
                        <CusIconHotFix style={{ fontSize: 20, color: '#6ac259' }}
                                       className={'mui-icon-custom'}/>
                        <span className={classesScoped["label-small"]}>20 px</span>
                        <span style={{ paddingLeft: '10px', color: '#ccc' }}>(Default Size Viewbox)</span>
                    </div>
                    <div className={classes["margin-bot-sep"]}>
                        <CusIconHotFix style={{ fontSize: 24, color: '#2eace0' }}
                                       className={'mui-icon-custom'}/>
                        <span className={classesScoped["label-small"]}>24 px</span>
                    </div>
                    <div className={classes["margin-bot-sep"]}>
                        <CusIconHotFix style={{ fontSize: 32, color: '#FFAB4E' }}
                                       className={'mui-icon-custom'}/>
                        <span className={classesScoped["label-small"]}>32 px</span>
                    </div>
                    <div className={classes["margin-bot-sep"]}>
                        <CusIconHotFix style={{ fontSize: 48, color: '#ff605d' }}
                                       className={'mui-icon-custom'}/>
                        <span className={classesScoped["label-small"]}>48 px</span>
                    </div>
                </div>

                <div className={classes["content-col-3"]}>
                    <div className={classes["margin-bot-sep"]}>
                        <CusIconAddUser style={{ fontSize: 20, color: '#6ac259' }}
                                        className={'mui-icon-custom'}/>
                        <span className={classesScoped["label-small"]}>20 px</span>
                        <span style={{ paddingLeft: '10px', color: '#ccc' }}>(Default Size Viewbox)</span>
                    </div>
                    <div className={classes["margin-bot-sep"]}>
                        <CusIconAddUser style={{ fontSize: 24, color: '#2eace0' }}
                                        className={'mui-icon-custom'}/>
                        <span className={classesScoped["label-small"]}>24 px</span>
                    </div>
                    <div className={classes["margin-bot-sep"]}>
                        <CusIconAddUser style={{ fontSize: 32, color: '#FFAB4E' }}
                                        className={'mui-icon-custom'}/>
                        <span className={classesScoped["label-small"]}>32 px</span>
                    </div>
                    <div className={classes["margin-bot-sep"]}>
                        <CusIconAddUser style={{ fontSize: 48, color: '#ff605d' }}
                                        className={'mui-icon-custom'}/>
                        <span className={classesScoped["label-small"]}>48 px</span>
                    </div>

                </div>

                <div className={classes["content-col-3"]}>
                    <div className={classes["margin-bot-sep"]}>
                        <CusIconStar style={{ fontSize: 20, color: '#6ac259' }}
                                     className={'mui-icon-custom'}/>
                        <span className={classesScoped["label-small"]}>20 px</span>
                        <span style={{ paddingLeft: '10px', color: '#ccc' }}>(Default Size Viewbox)</span>
                    </div>
                    <div className={classes["margin-bot-sep"]}>
                        <CusIconStar style={{ fontSize: 24, color: '#2eace0' }}
                                     className={'mui-icon-custom'}/>
                        <span className={classesScoped["label-small"]}>24 px</span>
                    </div>
                    <div className={classes["margin-bot-sep"]}>
                        <CusIconStar style={{ fontSize: 32, color: '#FFAB4E' }}
                                     className={'mui-icon-custom'}/>
                        <span className={classesScoped["label-small"]}>32 px</span>
                    </div>
                    <div className={classes["margin-bot-sep"]}>
                        <CusIconStar style={{ fontSize: 48, color: '#ff605d' }}
                                     className={'mui-icon-custom'}/>
                        <span className={classesScoped["label-small"]}>48 px</span>
                    </div>

                </div>

            </div>

        </div>

    );
}

export default CusIconsSamplesSizesColor;
