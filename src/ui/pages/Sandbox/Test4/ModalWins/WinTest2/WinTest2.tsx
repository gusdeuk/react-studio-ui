import React, { useState } from 'react'
import classes from './WinTest2.module.scss'
import { FooterActions } from '../../../../../components/FooterActions/FooterActions'
import Checkbox from '@material-ui/core/Checkbox/Checkbox'

export function WinTest2() {
    const [currentPage, setCurrentPage] = useState('init')

    const handleShowDetail = () => {
        setCurrentPage('detail')
        adjustModalBodyHeight('70vh')
    }

    const handleHideDetail = () => {
        setCurrentPage('init')
        adjustModalBodyHeight('40vh')
    }

    const handleConfirmUpdate = () => {
        alert('confirm-update')
    }

    const handleCancel = () => {
        alert('cancel')
    }

    const adjustModalBodyHeight = (cssValueHeight: string) => {
        let winModalBody = document.getElementById('modalFlexWindowBody')
        if (winModalBody) {
            winModalBody.style.height = winModalBody.offsetHeight + 'px'
            setTimeout(() => {
                if (winModalBody) {
                    winModalBody.style.height = cssValueHeight
                }
                // forceUpdate();
            }, 100)
        }
    }

    let pageContent
    if (currentPage === 'init') {
        pageContent = (
            <div
                key={'init-key'}
                className={[classes['page-block'], 'fadeIn animated'].join(' ')}
            >
                <div
                    className={[
                        classes['body-wrapper'],
                        classes['has-footer'],
                    ].join(' ')}
                >
                    <div className={classes['content-block-init']}>
                        <div
                            className={[
                                classes.icon,
                                classes['icon-update-green'],
                            ].join(' ')}
                        />
                        <div className={classes.message}>
                            {' '}
                            80vw RELATIVE width + 40vh RELATIVE height -
                            internal footers fot each STEP {'>'} Footers INSIDE
                            content child component
                        </div>
                    </div>
                </div>

                <div className={classes['footer-wrapper']}>
                    <FooterActions
                        btnLeft1={{
                            label: 'Jump to next screen/step',
                            color: 'primary',
                            variant: 'text',
                            callback: handleShowDetail,
                            visible: true,
                        }}
                        btnRight1={{
                            label: 'Button Right 1',
                            color: 'primary',
                            variant: 'outlined',
                            callback: handleConfirmUpdate,
                            disabled: false,
                            visible: true,
                        }}
                        btnRight2={{
                            label: 'Button Right 2',
                            color: 'primary',
                            variant: 'contained',
                            callback: handleCancel,
                        }}
                    />
                </div>
            </div>
        )
    }

    if (currentPage === 'detail') {
        pageContent = (
            <div
                key={'detail-key'}
                className={[classes['page-block'], 'fadeIn animated'].join(' ')}
            >
                <div
                    className={[
                        classes['body-wrapper'],
                        classes['has-footer'],
                    ].join(' ')}
                >
                    <div className={classes['content-block-detail']}>
                        <h4>
                            This is the second screen, programmatically
                            resized....
                        </h4>

                        <div className={classes.pills}>
                            NEW PILLS HERE / TODO
                        </div>

                        <Checkbox
                            disableRipple
                            defaultChecked
                            color='primary'
                        />
                    </div>
                </div>

                <div className={classes['footer-wrapper']}>
                    <FooterActions
                        btnLeft1={{
                            label: 'Back to Prev Screen',
                            color: 'primary',
                            variant: 'text',
                            callback: handleHideDetail,
                            visible: true,
                        }}
                        btnRight1={{
                            label: 'Button Right 1',
                            color: 'primary',
                            variant: 'outlined',
                            callback: handleConfirmUpdate,
                            disabled: false,
                            visible: true,
                        }}
                        btnRight2={{
                            label: 'Button Right 2',
                            color: 'primary',
                            variant: 'contained',
                            callback: handleCancel,
                        }}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className={classes['modal-update-commit-component']}>
            {pageContent}
        </div>
    )
}
