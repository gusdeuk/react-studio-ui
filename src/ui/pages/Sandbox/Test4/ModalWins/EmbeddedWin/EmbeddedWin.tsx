import React from 'react'
import classes from './EmbeddedWin.module.scss'
import { DataListMini } from './DataListMini/DataListMini'
import { ModalFlexWindow } from '../../../../../components/ModalFlexWindow/ModalFlexWindow'
import { FooterActions } from '../../../../../components/FooterActions/FooterActions'
import { HeadMessage } from './HeadMessage/HeadMessage'

export function EmbeddedWin(props: Props) {
    const closeModal = () => {
        props.onClose()
    }

    return (
        <div className={[classes['win-embed-component']].join(' ')}>
            {/* height will be defined by old shell container, NO MUI MODAL STUFF HERE*/}
            <ModalFlexWindow
                winTitleText={
                    'Test Open React Component in Legacy Shell Window'
                }
                winHeightInit={'calc(100vh - 115px)'}
                winWidthInit={'100vw'}
                maxWidth={'100vw'}
                maxHeight={'calc(100vh - 115px)'}
                autoHeight={false}
                hasHeader={true}
                hasCloseOnHeader={true}
                noVerticalScroll={true}
                winCloseHandler={closeModal}
                // optional footer actions for the modal passed as props
                footerActions={
                    <FooterActions
                        btnRight1={{
                            label: 'Close',
                            color: 'primary',
                            variant: 'contained',
                            callback: closeModal,
                            disabled: false,
                            visible: true,
                        }}
                    />
                }
            >
                <HeadMessage />
                <DataListMini />
            </ModalFlexWindow>
        </div>
    )
}

interface Props {
    onClose: Function
}
