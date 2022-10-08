import React, { useState } from 'react'
import classes from '../../Shared/SharedStyles.module.scss'
import { AccessAlarm } from '@material-ui/icons'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop/Backdrop'
import Fade from '@material-ui/core/Fade/Fade'
import { ModalFlexWindow } from '../../../../components/ModalFlexWindow/ModalFlexWindow'
import { FooterActions } from '../../../../components/FooterActions/FooterActions'
import { WinTest1 } from './WinTest1/WinTest1'
import { WinTest2 } from './WinTest2/WinTest2'
import Button from '@material-ui/core/Button/Button'

export function ModalWins() {
    const [showTestModal, setShowTestModal] = useState(false)
    const [showTestModal2, setShowTestModal2] = useState(false)

    const handleOpenModalTest = () => {
        setShowTestModal(true)
    }

    const handleCloseModalTest = () => {
        setShowTestModal(false)
    }

    const handleOpenModalTest2 = () => {
        setShowTestModal2(true)
    }

    const handleCloseModalTest2 = () => {
        setShowTestModal2(false)
    }

    const handleBtnCallback = () => {
        alert('injected footer actions callback')
    }

    const openLegacyModal = () => {
        // @ts-ignore
        window.top.vtHost.postMessage('open-modal', {
            config: {
                uri:
                    // @ts-ignore
                    window.top.vtHost.rootModel.urls.context +
                    '/root-component/ui-sandbox-embedded-win.htm',
                width: '70vw',
                height: '60vh',
                buttons: null,
                overlayCloseable: false,
            },
        })
    }

    return (
        <div>
            <div className={classes['content-row']}>
                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Modal with injected footer actions and callbacks on
                        launch
                        <br />
                        (2 actions left + 2 actions right)
                    </div>

                    <Button
                        onClick={handleOpenModalTest}
                        color={'primary'}
                        variant={'contained'}
                        disableElevation
                        disableRipple
                    >
                        OPEN MODAL - Injected Stuff
                    </Button>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Modal example with multi step
                        <br /> for wizard style screens / No injected footer
                        actions
                    </div>
                    <Button
                        onClick={handleOpenModalTest2}
                        color={'secondary'}
                        variant={'contained'}
                        disableElevation
                        disableRipple
                    >
                        OPEN MODAL - Multi Step + Programmatic resizing
                    </Button>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        ModalFlexWindow Component injected as separate react
                        view
                        <br />
                        in Old Legacy Shell Modal / Backdrop
                    </div>

                    <Button
                        onClick={openLegacyModal}
                        style={{
                            backgroundColor: 'rgb(212, 80, 70)',
                            color: '#fff',
                        }}
                        variant={'contained'}
                        disableElevation
                        disableRipple
                    >
                        OPEN LEGACY SHELL MODAL
                    </Button>
                </div>
            </div>

            <Modal
                open={showTestModal}
                onClose={handleCloseModalTest} // click en el backdrop > optional
                disableAutoFocus={true} // needed
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={showTestModal}>
                    <ModalFlexWindow
                        // params
                        winTitleText='Test modal - fixed height + fixed width + icon + centered title + injected footer actions child Component'
                        winTitleContentAlign='center' // or "left"
                        winTitleIcon={<AccessAlarm />}
                        winHeightInit={'300px'}
                        winWidthInit={'1150px'}
                        autoHeight={false}
                        hasCloseOnHeader={true}
                        hasHeader={true}
                        noVerticalScroll={false}
                        winCloseHandler={handleCloseModalTest}
                        // optional footer actions for the modal passed as props
                        footerActions={
                            <FooterActions
                                btnLeft1={{
                                    label: 'Button left 1',
                                    color: 'primary',
                                    variant: 'text',
                                    callback: handleBtnCallback,
                                    visible: true,
                                }}
                                btnLeft2={{
                                    label: 'Button left 2',
                                    color: 'secondary',
                                    variant: 'contained',
                                    callback: handleBtnCallback,
                                }}
                                btnLeft3={{
                                    label: 'Button left 3',
                                    color: 'secondary',
                                    variant: 'contained',
                                    callback: handleBtnCallback,
                                }}
                                btnRight1={{
                                    label: 'Button Right 1',
                                    color: 'primary',
                                    variant: 'outlined',
                                    callback: handleBtnCallback,
                                    disabled: false,
                                    visible: true,
                                }}
                                btnRight2={{
                                    label: 'Button Right 2',
                                    color: 'primary',
                                    variant: 'contained',
                                    callback: handleBtnCallback,
                                }}
                                btnRight3={{
                                    label: 'Button Right 3',
                                    color: 'primary',
                                    variant: 'contained',
                                    callback: handleBtnCallback,
                                    // visible: true
                                }}
                            />
                        }
                    >
                        {/*modal content via children*/}
                        <WinTest1 />
                    </ModalFlexWindow>
                </Fade>
            </Modal>

            <Modal
                open={showTestModal2}
                onClose={handleCloseModalTest2} // click en el backdrop > optional
                disableAutoFocus={true} // needed
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{ timeout: 500 }}
            >
                <Fade in={showTestModal2}>
                    <ModalFlexWindow
                        // params
                        winTitleText='Modal 2 Title - (80vw RELATIVE width + 40vh RELATIVE height) '
                        winHeightInit={'40vh'}
                        winWidthInit={'80vw'}
                        autoHeight={false}
                        hasHeader={true}
                        hasCloseOnHeader={true}
                        noVerticalScroll={true}
                        winCloseHandler={handleCloseModalTest2}
                    >
                        {/*modal content via children*/}
                        <WinTest2 />
                    </ModalFlexWindow>
                </Fade>
            </Modal>
        </div>
    )
}
