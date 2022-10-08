import React from 'react'
import classesScoped from './MuiTabs.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

interface TabPanelProps {
    children?: React.ReactNode
    index: any
    value: any
}

export function MuiTabs() {
    // state
    const [tabSelectedValue, setValue] = React.useState(0)

    // Tab change
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue)
    }

    // Tab panel content
    const TabPanel = (props: TabPanelProps) => {
        const { children, value, index, ...other } = props

        return (
            <div
                role='tabpanel'
                hidden={value !== index}
                id={`simple-tabpanel2-${index}`}
                aria-labelledby={`simple-tab2-${index}`}
                {...other}
            >
                {value === index && <div>{children}</div>}
            </div>
        )
    }

    return (
        <div className={classesScoped['tabs-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>
                    <div className={classes.subtitle}>
                        Tabs + Content panel {'>'} Horizontal
                    </div>
                    <div className={'mui-tabs-custom'}>
                        <Tabs
                            value={tabSelectedValue}
                            onChange={handleChange}
                            indicatorColor='primary'
                            textColor='primary'
                            /*centered*/
                            /*orientation="vertical"*/
                        >
                            <Tab label='Tab 1' disableRipple={true} />
                            <Tab label='Tab 2' disableRipple={true} />
                            <Tab label='Tab 3' disableRipple={true} />
                            <Tab label='Tab 4' disableRipple={true} />
                            <Tab label='Tab 5' disableRipple={true} />
                        </Tabs>
                    </div>

                    {/* tab panel example */}
                    <div>
                        <TabPanel value={tabSelectedValue} index={0}>
                            <div
                                className={'animated fadeIn fast'}
                                style={{
                                    padding: '20px',
                                    backgroundColor: '#f3f3f3',
                                }}
                            >
                                tab content 1
                            </div>
                        </TabPanel>

                        <TabPanel value={tabSelectedValue} index={1}>
                            <div
                                className={'animated fadeIn fast'}
                                style={{
                                    padding: '20px',
                                    backgroundColor: '#f3f3f3',
                                }}
                            >
                                tab content 2
                            </div>
                        </TabPanel>

                        <TabPanel value={tabSelectedValue} index={2}>
                            <div
                                className={'animated fadeIn fast'}
                                style={{
                                    padding: '20px',
                                    backgroundColor: '#f3f3f3',
                                }}
                            >
                                tab content 3
                            </div>
                        </TabPanel>
                        <TabPanel value={tabSelectedValue} index={3}>
                            <div
                                className={'animated fadeIn fast'}
                                style={{
                                    padding: '20px',
                                    backgroundColor: '#f3f3f3',
                                }}
                            >
                                tab content 4
                            </div>
                        </TabPanel>
                        <TabPanel value={tabSelectedValue} index={4}>
                            <div
                                className={'animated fadeIn fast'}
                                style={{
                                    padding: '20px',
                                    backgroundColor: '#f3f3f3',
                                }}
                            >
                                tab content 5
                            </div>
                        </TabPanel>
                    </div>

                    <div className={classes.subtitle}>
                        Tabs + Content panel {'>'} Horizontal Scrollable
                    </div>
                    <div className={'mui-tabs-custom'}>
                        <Tabs
                            value={tabSelectedValue}
                            onChange={handleChange}
                            indicatorColor='primary'
                            textColor='primary'
                            variant='scrollable'
                            scrollButtons='auto'
                        >
                            <Tab label='Test 1' disableRipple={true} />
                            <Tab label='Test 2' disableRipple={true} />
                            <Tab label='Test 3' disableRipple={true} />
                            <Tab label='Test 4' disableRipple={true} />
                            <Tab label='Test 5' disableRipple={true} />
                            <Tab label='Test 6' disableRipple={true} />
                            <Tab label='Test 7' disableRipple={true} />
                            <Tab
                                label='Test Lorem ipsum dolor 8'
                                disableRipple={true}
                            />
                            <Tab
                                label='Test Lorem ipsum dolor 9'
                                disableRipple={true}
                            />
                            <Tab
                                label='Test Lorem ipsum dolor 10'
                                disableRipple={true}
                            />
                            <Tab
                                label='Test Lorem ipsum dolor 11'
                                disableRipple={true}
                            />
                        </Tabs>
                    </div>

                    <div className={classes.subtitle}>
                        Tabs + Content panel {'>'} Vertical
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div
                            className={'mui-tabs-custom'}
                            style={{ width: '150px' }}
                        >
                            <Tabs
                                value={tabSelectedValue}
                                onChange={handleChange}
                                indicatorColor='primary'
                                textColor='primary'
                                orientation='vertical'
                            >
                                <Tab label='Test 1' disableRipple={true} />
                                <Tab label='Test 2' disableRipple={true} />
                                <Tab label='Test 3' disableRipple={true} />
                                <Tab label='Test 4' disableRipple={true} />
                                <Tab label='Test 5' disableRipple={true} />
                            </Tabs>
                        </div>

                        {/* tab panel example */}
                        <div style={{ flex: '1' }}>
                            <TabPanel value={tabSelectedValue} index={0}>
                                <div
                                    className={'animated fadeIn fast'}
                                    style={{
                                        padding: '20px',
                                        backgroundColor: '#f3f3f3',
                                        height: '200px',
                                    }}
                                >
                                    tab content 1
                                </div>
                            </TabPanel>

                            <TabPanel value={tabSelectedValue} index={1}>
                                <div
                                    className={'animated fadeIn fast'}
                                    style={{
                                        padding: '20px',
                                        backgroundColor: '#f3f3f3',
                                        height: '200px',
                                    }}
                                >
                                    tab content 2
                                </div>
                            </TabPanel>

                            <TabPanel value={tabSelectedValue} index={2}>
                                <div
                                    className={'animated fadeIn fast'}
                                    style={{
                                        padding: '20px',
                                        backgroundColor: '#f3f3f3',
                                        height: '200px',
                                    }}
                                >
                                    tab content 3
                                </div>
                            </TabPanel>
                            <TabPanel value={tabSelectedValue} index={3}>
                                <div
                                    className={'animated fadeIn fast'}
                                    style={{
                                        padding: '20px',
                                        backgroundColor: '#f3f3f3',
                                        height: '200px',
                                    }}
                                >
                                    tab content 4
                                </div>
                            </TabPanel>
                            <TabPanel value={tabSelectedValue} index={4}>
                                <div
                                    className={'animated fadeIn fast'}
                                    style={{
                                        padding: '20px',
                                        backgroundColor: '#f3f3f3',
                                        height: '200px',
                                    }}
                                >
                                    tab content 5
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
