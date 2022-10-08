import React, { Component } from 'react'
import { Close } from '@material-ui/icons'
import classes from './ModalFlexWindow.module.scss'

export class ModalFlexWindow extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {}
        this.setupInitElements()
    }

    private windowBodyStyles: any
    private headerContentStyles: any
    private wrapperContentStyles: any

    // declare defaults (automatic)
    static defaultProps = {
        winTitleText: 'Please set modal title',
        winTitleContentAlign: 'left',
        winHeightInit: '500px',
        winWidthInit: '500px',
        autoHeight: true,
        minHeight: '120px',
        maxHeight: 'initial',
        minWidth: 'initial',
        maxWidth: 'initial',
        hasCloseOnHeader: true,
        hasHeader: true,
        footerActions: null,
        noVerticalScroll: false,
    }

    // after dom react lifecycle stuff
    componentDidMount() {}

    // init setup based on received props
    private setupInitElements = () => {
        this.windowBodyStyles = {
            height: this.props.winHeightInit,
            width: this.props.winWidthInit,
            minHeight: this.props.minHeight,
            minWidth: this.props.minWidth,
            maxHeight: this.props.maxHeight,
            maxWidth: this.props.maxWidth,
        }

        if (this.props.autoHeight) {
            this.windowBodyStyles.height = 'auto'
            this.windowBodyStyles.overflow = 'hidden'
        }

        if (this.props.noVerticalScroll) {
            this.windowBodyStyles.overflow = 'hidden'
        }

        if (this.props.winTitleContentAlign == 'center') {
            this.headerContentStyles = {
                justifyContent: 'center',
            }
        }

        this.wrapperContentStyles = {
            paddingTop: '0',
        }

        if (this.props.hasHeader) {
            this.wrapperContentStyles.paddingTop = '45px'
        }

        if (this.props.footerActions) {
            this.windowBodyStyles.marginBottom = '70px'
            this.windowBodyStyles.paddingBottom = '0'
        }
    }

    private handleClose = () => {
        // close handler defined in parent and received as prop
        if (this.props.winCloseHandler) {
            this.props.winCloseHandler()
        }
    }

    render() {
        return (
            <div className={classes['modal-base-component']}>
                <div
                    className={`${classes['modal-wrapper']} fadeIn animated fast`}
                    style={this.wrapperContentStyles}
                >
                    {this.props.hasHeader && (
                        <div
                            className={classes['modal-header']}
                            style={this.headerContentStyles}
                        >
                            <div className={classes['header-content']}>
                                {/*SLOTTED ICON COMP FROM PROP*/}
                                <div className={classes.icon}>
                                    {this.props.winTitleIcon}
                                </div>
                                <div className={`${classes.title} truncate`}>
                                    {this.props.winTitleText}
                                </div>
                            </div>

                            {this.props.hasCloseOnHeader && (
                                <div
                                    className={classes.close}
                                    onClick={this.handleClose}
                                >
                                    <Close className={classes.icon} />
                                </div>
                            )}
                        </div>
                    )}

                    <div
                        className={`${classes['modal-body']} custom-scroll-area vert-scroll `}
                        id='modalFlexWindowBody'
                        style={this.windowBodyStyles}
                    >
                        {this.props.children}
                    </div>

                    {this.props.footerActions && (
                        <div className={classes['modal-footer-actions']}>
                            <div>{this.props.footerActions}</div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

interface State {}

interface Props {
    winTitleText?: string
    winTitleContentAlign?: string
    winHeightInit?: any
    winWidthInit?: any
    autoHeight?: boolean
    minHeight?: any
    maxHeight?: any
    minWidth?: any
    maxWidth?: any
    winCloseHandler?: Function
    winTitleIcon?: object
    hasCloseOnHeader?: boolean
    hasHeader?: boolean
    footerActions?: object
    noVerticalScroll?: boolean
}
