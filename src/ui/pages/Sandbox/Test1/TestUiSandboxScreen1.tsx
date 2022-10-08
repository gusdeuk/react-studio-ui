import React, { Component } from 'react'

import styles from '../Shared/SharedStyles.module.scss'

import { DataListMini } from './DataListMini/DataListMini'
import { DataListBig } from './DataListBig/DataListBig'
import { DataListCardRow } from './DataListCardRow/DataListCardRow'
import { TestComponent } from '../Test20/TestComponent/TestComponent'

export class TestUiSandboxScreen1 extends Component<Props, State> {
    render() {
        return (
            <div className={`${styles['base-ui-sandbox']} ${styles.white}`}>
                <div>
                    <h6>
                        Data List Mini Format
                        <span className={styles['tag-highlight-green']}>
                            Studio restyled version
                        </span>
                    </h6>
                    <i>
                        Scrollable body data list w/ light blue uppercase head
                        cells, accepts any custom cell content and custom or
                        even set free body height to match parent container
                    </i>

                    <div className={styles['content-row']}>
                        <div className={styles['content-col-1']}>
                            <div className={styles.subtitle}>
                                Small size rows data list {'>'} zebra data list
                                example / 5 custom width columns
                            </div>
                            <br />

                            {/* IMPORTANT > CONTAINER MUST BE RELATIVE*/}
                            {/*<div style={{height: '200px', position: 'relative'}}>*/}
                            <div style={{ position: 'relative' }}>
                                <DataListMini
                                    //fitSizeToParentWrapper={true}
                                    scrollableAreaHeight={130}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h6>
                        Data List Big Format
                        <span className={styles['tag-highlight-green']}>
                            Studio restyled version
                        </span>
                    </h6>
                    <i>
                        Scrollable body data list w/ white bolded head cells,
                        accepts any custom cell content and custom sized or even
                        set free body height to match parent container
                    </i>

                    <div className={styles['content-row']}>
                        <div className={styles['content-col-1']}>
                            <div className={styles.subtitle}>
                                Big size rows data list {'>'} zebra data list
                                example / 3 custom width columns
                            </div>

                            {/* IMPORTANT > CONTAINER MUST BE RELATIVE*/}
                            {/*<div style={{height: '200px', position: 'relative'}}>*/}
                            <div style={{ position: 'relative' }}>
                                <DataListBig
                                    //fitSizeToParentWrapper={true}
                                    scrollableAreaHeight={180}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h6>
                        Data List Card Row Format
                        <span className={styles['tag-highlight-green']}>
                            Studio restyled version
                        </span>
                    </h6>
                    <i>
                        Scrollable body data list w/ cyan head cells + cards
                        like rows. Accepts any custom cell content and custom
                        sized or even set free body height to match parent
                        container
                    </i>

                    <div className={styles['content-row']}>
                        <div className={styles['content-col-1']}>
                            <div className={styles.subtitle}>
                                Big size rows data list {'>'} zebra data list
                                example / 3 custom width columns
                            </div>

                            {/* IMPORTANT > CONTAINER MUST BE RELATIVE*/}
                            {/*<div style={{height: '200px', position: 'relative'}}>*/}
                            <div style={{ position: 'relative' }}>
                                <DataListCardRow
                                    //fitSizeToParentWrapper={true}
                                    scrollableAreaHeight={500}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

interface State {
    showTestModal: boolean
    showTestModal2: boolean
}

interface Props {}
