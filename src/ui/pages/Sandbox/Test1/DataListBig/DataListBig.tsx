import React, { Component } from 'react'
import classes from './DataListBig.module.scss'
import { HeadBig } from './HeadBig/HeadBig'
import { RowBig } from './RowBig/RowBig'
import { DummyData } from './DummyData'

export class DataListBig extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {}
        this.initView()
    }

    private accessDataCollection: any = []
    private contentBodyStyles: any
    private componentWrapperStyles: any

    initView = () => {
        DummyData.createData()
        this.accessDataCollection = DummyData.getAccessDataCollection()

        // cover everything to parent size > ABS
        this.componentWrapperStyles = {
            position: 'relative',
        }

        if (this.props.fitSizeToParentWrapper) {
            this.componentWrapperStyles = {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }
        }

        // fix scrollable rows height
        this.contentBodyStyles = {
            height: 'auto',
        }

        if (this.props.scrollableAreaHeight) {
            // set FIXED content height + component height
            this.contentBodyStyles.height =
                this.props.scrollableAreaHeight + 'px'
            this.componentWrapperStyles.height =
                this.props.scrollableAreaHeight + 36 + 'px'
        }
    }

    componentDidMount(): void {}

    render() {
        return (
            <div
                className={[classes['access-data-list-component']].join(' ')}
                style={this.componentWrapperStyles}
            >
                <div className={[classes['head-wrapper']].join(' ')}>
                    <HeadBig />
                </div>

                <div
                    className={[
                        classes['body-wrapper'],
                        'custom-scroll-area tiny-thumb vert-scroll',
                    ].join(' ')}
                    style={this.contentBodyStyles}
                >
                    {this.accessDataCollection.map((value: any, index: any) => {
                        return <RowBig key={'k' + index} />
                    })}
                </div>
            </div>
        )
    }
}

interface State {}

interface Props {
    scrollableAreaHeight?: number

    fitSizeToParentWrapper?: boolean
}
