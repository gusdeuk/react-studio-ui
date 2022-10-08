import React from 'react'
import classes from './DataListMini.module.scss'
import { HeadMini } from './HeadMini/HeadMini'
import { RowMini } from './RowMini/RowMini'
import { DummyData } from './DummyData'

export function DataListMini(props: Props) {
    let accessDataCollection: any = []
    let contentBodyStyles: any
    let componentWrapperStyles: any

    const initView = () => {
        DummyData.createData()
        accessDataCollection = DummyData.getAccessDataCollection()

        // cover everything to parent size > ABS
        componentWrapperStyles = {
            position: 'relative',
        }

        if (props.fitSizeToParentWrapper) {
            componentWrapperStyles = {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }
        }

        // fix scrollable rows height
        contentBodyStyles = {
            height: 'auto',
        }

        if (props.scrollableAreaHeight) {
            // set FIXED content height + component height
            contentBodyStyles.height = props.scrollableAreaHeight + 'px'
            componentWrapperStyles.height =
                props.scrollableAreaHeight + 26 + 'px'
        }
    }

    initView()

    return (
        <div
            className={[classes['access-data-list-component']].join(' ')}
            style={componentWrapperStyles}
        >
            <div className={[classes['head-wrapper']].join(' ')}>
                <HeadMini />
            </div>

            <div
                className={[
                    classes['body-wrapper'],
                    'custom-scroll-area tiny-thumb vert-scroll',
                ].join(' ')}
                style={contentBodyStyles}
            >
                {accessDataCollection.map((value: any, index: any) => {
                    return <RowMini key={'k' + index} />
                })}
            </div>
        </div>
    )
}

interface Props {
    scrollableAreaHeight?: number

    fitSizeToParentWrapper?: boolean
}
