import React from 'react'

import DataConfig from './DataConfig'
import styles from './Shared/SharedStyles.module.scss'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Block, Check, Close } from '@material-ui/icons'
import { Tooltip } from '@material-ui/core'

// -----------------------------------------------
// BEM PROTECTED STYLES (NO CSS MODULES)
import './Shared/overrides.bem.scss'

// screens
import { TestUiSandboxScreen1 } from './Test1/TestUiSandboxScreen1'
import { TestUiSandboxScreen2 } from './Test2/TestUiSandboxScreen2'
import { TestUiSandboxScreen3 } from './Test3/TestUiSandboxScreen3'
import { TestUiSandboxScreen4 } from './Test4/TestUiSandboxScreen4'
import { TestUiSandboxScreen5 } from './Test5/TestUiSandboxScreen5'
import { TestUiSandboxScreen6 } from './Test6/TestUiSandboxScreen6'
import { TestUiSandboxScreen7 } from './Test7/TestUiSandboxScreen7'
import { TestUiSandboxScreen8 } from './Test8/TestUiSandboxScreen8'
import { TestUiSandboxScreen9 } from './Test9/TestUiSandboxScreen9'
import { TestUiSandboxScreen10 } from './Test10/TestUiSandboxScreen10'
import { TestUiSandboxScreen11 } from './Test11/TestUiSandboxScreen11'
import { TestUiSandboxScreen12 } from './Test12/TestUiSandboxScreen12'
import { TestUiSandboxScreen13 } from './Test13/TestUiSandboxScreen13'
import { TestUiSandboxScreen14 } from './Test14/TestUiSandboxScreen14'
import { TestUiSandboxScreen15 } from './Test15/TestUiSandboxScreen15'
import { TestUiSandboxScreen16 } from './Test16/TestUiSandboxScreen16'
import { TestUiSandboxScreen17 } from './Test17/TestUiSandboxScreen17'
import { TestUiSandboxScreen18 } from './Test18/TestUiSandboxScreen18'
import { TestUiSandboxScreen19 } from './Test19/TestUiSandboxScreen19'
import { TestUiSandboxScreen20 } from './Test20/TestUiSandboxScreen20'

// -----------------------------------------------------------
// Drawer stuff / styles

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import clsx from 'clsx'
import { TestDrawer } from './TestDrawer/TestDrawer'

// ------------------------------------------------------------
//  create dynamic styles for drawer / content collapse

const drawerWidth = 250
const topSpace='0px'
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        rootWrapper: {
            display: 'flex',
            top:topSpace,
            position:'relative'
        },
        drawerWrapper: {
            width: drawerWidth,
            flexShrink: 0,
            top:topSpace
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: '#F5F8FB'
        },
        contentWrapper: {
            flexGrow: 1,
            padding: 0,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginRight: -drawerWidth,
        },
        contentWrapperShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        },
    })
)

export function Sandbox() {
    const sandBoxVersion = DataConfig.getVersion()

    // ------------------------------------------------------------
    //  TAB NAVIGATION
    const [tabSelected, setTabSelected] = React.useState(0)

    const handleTabChange = (
        event: React.ChangeEvent<{}>,
        newValue: number
    ) => {
        setTabSelected(newValue)
    }

    const TabPanel = (props: TabPanelProps) => {
        const { children, value, index, ...other } = props

        return (
            <div
                role='tabpanel'
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <div>{children}</div>}
            </div>
        )
    }

    interface TabPanelProps {
        children?: React.ReactNode
        index: any
        value: any
    }

    // ------------------------------------------------------------
    //  DRAWER LOGIC / state
    const onTheFlyClasses = useStyles()
    const [open, setOpen] = React.useState(true)

    const handleDrawerOpen = () => {
        setOpen(true)
    }

    const handleDrawerClose = () => {
        setOpen(false)
    }

    // ------------------------------------------------------------
    // VIEW
    // @ts-ignore
    return (
        <div className={['sandbox-component' , styles['main-wrapper']].join(' ')}>
            <div className={onTheFlyClasses.rootWrapper}>
                {/* ------------------------------------------- */}
                {/* main content */}
                {/* ------------------------------------------- */}

                <main
                    className={clsx(onTheFlyClasses.contentWrapper, {
                        [onTheFlyClasses.contentWrapperShift]: open,
                    })}
                >
                    <div
                        className={`${styles['base-ui-sandbox']} ${styles['main-screen']} ${styles['white']}  custom-scroll-area vert-scroll`}
                    >
                        {/* ------------------------------------------- */}
                        {/* header */}
                        {/* ------------------------------------------- */}
                        <div className={styles['main-header']}>
                            <h1>Studio UI Sandbox</h1>
                            <div className={styles['text-label-top']}>
                                Atomic ui elements staging page [Version{' '}
                                {sandBoxVersion}]<br />
                                Components blocks customized on{' '}
                                <a
                                    href={'https://material-ui.com/'}
                                    target={'blank'}
                                >
                                    React Material-UI.com
                                </a>
                            </div>
                        </div>

                        {/* ------------------------------------------- */}
                        {/* content / tab panels */}
                        {/* ------------------------------------------- */}
                        <div>
                            <TabPanel value={tabSelected} index={0}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen1 />
                                </div>
                            </TabPanel>

                            <TabPanel value={tabSelected} index={1}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen2 />
                                </div>
                            </TabPanel>

                            <TabPanel value={tabSelected} index={2}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen3 />
                                </div>
                            </TabPanel>

                            <TabPanel value={tabSelected} index={3}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen4 />
                                </div>
                            </TabPanel>

                            <TabPanel value={tabSelected} index={4}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen5 />
                                </div>
                            </TabPanel>

                            <TabPanel value={tabSelected} index={5}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen6 />
                                </div>
                            </TabPanel>

                            <TabPanel value={tabSelected} index={6}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen7 />
                                </div>
                            </TabPanel>

                            <TabPanel value={tabSelected} index={7}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen8 />
                                </div>
                            </TabPanel>

                            <TabPanel value={tabSelected} index={8}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen9 />
                                </div>
                            </TabPanel>

                            <TabPanel value={tabSelected} index={9}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen10 />
                                </div>
                            </TabPanel>

                            <TabPanel value={tabSelected} index={10}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen11 />
                                </div>
                            </TabPanel>
                            <TabPanel value={tabSelected} index={11}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen12 />
                                </div>
                            </TabPanel>
                            <TabPanel value={tabSelected} index={12}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen13 />
                                </div>
                            </TabPanel>
                            <TabPanel value={tabSelected} index={13}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen14 />
                                </div>
                            </TabPanel>
                            <TabPanel value={tabSelected} index={14}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen15 />
                                </div>
                            </TabPanel>
                            <TabPanel value={tabSelected} index={15}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen16 />
                                </div>
                            </TabPanel>
                            <TabPanel value={tabSelected} index={16}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen17 />
                                </div>
                            </TabPanel>
                            <TabPanel value={tabSelected} index={17}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen18 />
                                </div>
                            </TabPanel>
                            <TabPanel value={tabSelected} index={18}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen19 />
                                </div>
                            </TabPanel>
                            <TabPanel value={tabSelected} index={19}>
                                <div className={'animated fadeIn fast'}>
                                    <TestUiSandboxScreen20 />
                                </div>
                            </TabPanel>
                        </div>
                    </div>
                </main>

                {/* ------------------------------------------- */}
                {/* drawer open */}
                {/* ------------------------------------------- */}
                <div
                    className={styles['open-drawer']}
                    onClick={handleDrawerOpen}
                >
                    <Tooltip
                        title={'Open drawer panel'}
                        placement='left'
                        arrow
                        className={'mui-tooltip-custom'}
                    >
                        <ChevronLeftIcon
                            style={{ fontSize: 40, color: '#c9c9c9' }}
                        />
                    </Tooltip>
                </div>

                {/* ------------------------------------------- */}
                {/* drawer content */}
                {/* ------------------------------------------- */}
                <Drawer
                    className={onTheFlyClasses.drawerWrapper}
                    variant='persistent'
                    anchor='right'
                    open={open}
                    classes={{
                        paper: [
                            onTheFlyClasses.drawerWrapper,
                            'custom-scroll-area vert-scroll',
                        ].join(' '),
                    }}
                >
                    <div
                        className={styles['close-drawer']}
                        onClick={handleDrawerClose}
                    >
                        <Tooltip
                            title={'Collapse drawer panel'}
                            placement='left'
                            arrow
                            className={'mui-tooltip-custom'}
                        >
                            <ChevronRightIcon
                                style={{ fontSize: 40, color: '#c9c9c9' }}
                            />
                        </Tooltip>
                    </div>
                    <div
                        style={{
                            marginTop: '46px',
                            padding: '0 5px 30px',
                        }}
                    >
                        {/* ------------------------------------------- */}
                        {/* nav tabs */}
                        {/* ------------------------------------------- */}

                        <div className={styles['drawer-title']}>
                            Collapsible Drawer
                        </div>
                        <div
                            className={[
                                'mui-tabs-custom main-nav-sandbox-tabs',
                            ].join(' ')}
                        >
                            <Tabs
                                value={tabSelected}
                                onChange={handleTabChange}
                                indicatorColor='primary'
                                textColor='primary'
                                /*centered*/
                                /*variant={'scrollable'}*/
                                orientation='vertical'
                                scrollButtons='auto'
                            >
                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                1
                                            </div>
                                            <div>
                                                Data List Mini
                                                <br />
                                                Data List Big
                                                <br />
                                                Data List Card Row
                                            </div>
                                            <Check
                                                style={{
                                                    fontSize: 25,
                                                    color: '#6ac259',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                2
                                            </div>
                                            <div>
                                                Buttons
                                                <br />
                                                Checks - Radios
                                                <br />
                                                Chips - Switches
                                            </div>
                                            <Check
                                                style={{
                                                    fontSize: 25,
                                                    color: '#6ac259',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                3
                                            </div>
                                            <div>
                                                Uploaders
                                                <br />
                                                Autocomplete
                                                <br />
                                                Inputs - Text Areas
                                            </div>
                                            <Check
                                                style={{
                                                    fontSize: 25,
                                                    color: '#6ac259',
                                                }}
                                            />
                                            <div className={'highlight-strip'}>
                                                NEW
                                            </div>
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                4
                                            </div>
                                            <div>
                                                Modal Flex Window
                                                <br />
                                                MUI Tabs custom
                                            </div>
                                            <Check
                                                style={{
                                                    fontSize: 25,
                                                    color: '#6ac259',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                5
                                            </div>
                                            <div>
                                                Tooltips
                                                <br />
                                                Swiper Carousel
                                            </div>
                                            <Check
                                                style={{
                                                    fontSize: 25,
                                                    color: '#6ac259',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                6
                                            </div>
                                            <div>
                                                Icon Balls
                                                <br />
                                                Custom Icons
                                                <br />
                                                Mui Icon Lib
                                            </div>
                                            <Check
                                                style={{
                                                    fontSize: 25,
                                                    color: '#6ac259',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                7
                                            </div>
                                            <div>Mui Grid</div>
                                            <Check
                                                style={{
                                                    fontSize: 25,
                                                    color: '#6ac259',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                8
                                            </div>
                                            <div>
                                                Mui Progress
                                                <br />
                                                Spinners
                                                <br />
                                                Mui Skeletons
                                            </div>
                                            <Check
                                                style={{
                                                    fontSize: 25,
                                                    color: '#6ac259',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                9
                                            </div>
                                            <div>
                                                Mui Sliders
                                                <br />
                                                Mui Date Time
                                            </div>
                                            <Check
                                                style={{
                                                    fontSize: 25,
                                                    color: '#6ac259',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                10
                                            </div>
                                            <div>
                                                Breadcrumbs
                                                <br />
                                                React Select
                                                <br />
                                                Menus - Selects
                                            </div>
                                            <Check
                                                style={{
                                                    fontSize: 25,
                                                    color: '#6ac259',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                11
                                            </div>
                                            <div>
                                                Lottie SVG Animation Library
                                            </div>
                                            <Block
                                                style={{
                                                    fontSize: 25,
                                                    color: '#d45046',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                12
                                            </div>
                                            <div>
                                                Stepper {'>'} H <br /> Stepper{' '}
                                                {'>'} V
                                            </div>
                                            <Block
                                                style={{
                                                    fontSize: 25,
                                                    color: '#d45046',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                13
                                            </div>
                                            <div>Mui Accordion</div>
                                            <Block
                                                style={{
                                                    fontSize: 25,
                                                    color: '#d45046',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                14
                                            </div>
                                            <div>
                                                Mui Alerts
                                                <br />
                                                Mui Snackbars (Toasts)
                                            </div>
                                            <Check
                                                style={{
                                                    fontSize: 25,
                                                    color: '#6ac259',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                15
                                            </div>
                                            <div>Footer actions examples</div>
                                            <Check
                                                style={{
                                                    fontSize: 20,
                                                    color: '#6ac259',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                16
                                            </div>
                                            <div>Lorem Ipsum</div>
                                            <Block
                                                style={{
                                                    fontSize: 25,
                                                    color: '#d45046',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                17
                                            </div>
                                            <div>Lorem Ipsum</div>
                                            <Block
                                                style={{
                                                    fontSize: 25,
                                                    color: '#d45046',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                18
                                            </div>
                                            <div>Lorem Ipsum</div>
                                            <Block
                                                style={{
                                                    fontSize: 25,
                                                    color: '#d45046',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                19
                                            </div>
                                            <div>Lorem Ipsum</div>
                                            <Block
                                                style={{
                                                    fontSize: 25,
                                                    color: '#d45046',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />

                                <Tab
                                    label={
                                        <div className={'tab-labels'}>
                                            <div className={'tab-number'}>
                                                20
                                            </div>
                                            <div>Test Area</div>
                                            <Block
                                                style={{
                                                    fontSize: 25,
                                                    color: '#d45046',
                                                }}
                                            />
                                        </div>
                                    }
                                    disableRipple={true}
                                />
                            </Tabs>
                        </div>
                    </div>
                </Drawer>
            </div>
        </div>
    )
}
