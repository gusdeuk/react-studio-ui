import React, { Component } from 'react'
import classes from './FooterActions.module.scss'
import Button from '@material-ui/core/Button'

export class FooterActions extends Component<Props, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            showBtnLeft1: false,
            showBtnLeft2: false,
            showBtnLeft3: false,
            showBtnRight1: false,
            showBtnRight2: false,
            showBtnRight3: false,
        }
    }

    private setupInitStates = () => {
        // NOTE: all buttons hidden by default
        // (default props does not work with prop objects + nested properties )
        if (
            this.props.btnLeft1 &&
            this.props.btnLeft1.label &&
            this.props.btnLeft1.visible !== false
        ) {
            this.setState({ showBtnLeft1: true })
        } else {
            this.setState({ showBtnLeft1: false })
        }
        if (
            this.props.btnLeft2 &&
            this.props.btnLeft2.label &&
            this.props.btnLeft2.visible !== false
        ) {
            this.setState({ showBtnLeft2: true })
        } else {
            this.setState({ showBtnLeft2: false })
        }
        if (
            this.props.btnLeft3 &&
            this.props.btnLeft3.label &&
            this.props.btnLeft3.visible !== false
        ) {
            this.setState({ showBtnLeft3: true })
        } else {
            this.setState({ showBtnLeft3: false })
        }

        if (
            this.props.btnRight1 &&
            this.props.btnRight1.label &&
            this.props.btnRight1.visible !== false
        ) {
            this.setState({ showBtnRight1: true })
        } else {
            this.setState({ showBtnRight1: false })
        }
        if (
            this.props.btnRight2 &&
            this.props.btnRight2.label &&
            this.props.btnRight2.visible !== false
        ) {
            this.setState({ showBtnRight2: true })
        } else {
            this.setState({ showBtnRight2: false })
        }
        if (
            this.props.btnRight3 &&
            this.props.btnRight3.label &&
            this.props.btnRight3.visible !== false
        ) {
            this.setState({ showBtnRight3: true })
        } else {
            this.setState({ showBtnRight3: false })
        }
    }

    componentDidMount() {
        this.setupInitStates()
    }

    render() {
        let footerClass = ''
        if (this.props.fullScreenStyle) {
            footerClass = classes['full-screen-style']
        }

        return (
            <div
                className={[classes['modal-flex-actions'], footerClass].join(
                    ' '
                )}
            >
                <div className={classes.left}>
                    {this.props.btnLeft1 && this.state.showBtnLeft1 && (
                        <Button
                            disabled={this.props.btnLeft1.disabled}
                            disableRipple
                            disableElevation
                            variant={this.props.btnLeft1.variant}
                            color={this.props.btnLeft1.color}
                            onClick={this.props.btnLeft1.callback}
                        >
                            {this.props.btnLeft1.label}
                        </Button>
                    )}
                    {this.props.btnLeft2 && this.state.showBtnLeft2 && (
                        <Button
                            disabled={this.props.btnLeft2.disabled}
                            disableRipple
                            disableElevation
                            variant={this.props.btnLeft2.variant}
                            color={this.props.btnLeft2.color}
                            onClick={this.props.btnLeft2.callback}
                        >
                            {this.props.btnLeft2.label}
                        </Button>
                    )}
                    {this.props.btnLeft3 && this.state.showBtnLeft3 && (
                        <Button
                            disabled={this.props.btnLeft3.disabled}
                            disableRipple
                            disableElevation
                            variant={this.props.btnLeft3.variant}
                            color={this.props.btnLeft3.color}
                            onClick={this.props.btnLeft3.callback}
                        >
                            {this.props.btnLeft3.label}
                        </Button>
                    )}
                </div>

                <div className={classes.right}>
                    {this.props.btnRight1 && this.state.showBtnRight1 && (
                        <Button
                            disabled={this.props.btnRight1.disabled}
                            disableRipple
                            disableElevation
                            variant={this.props.btnRight1.variant}
                            color={this.props.btnRight1.color}
                            onClick={this.props.btnRight1.callback}
                        >
                            {this.props.btnRight1.label}
                        </Button>
                    )}
                    {this.props.btnRight2 && this.state.showBtnRight2 && (
                        <Button
                            disabled={this.props.btnRight2.disabled}
                            disableRipple
                            disableElevation
                            variant={this.props.btnRight2.variant}
                            color={this.props.btnRight2.color}
                            onClick={this.props.btnRight2.callback}
                        >
                            {this.props.btnRight2.label}
                        </Button>
                    )}
                    {this.props.btnRight3 && this.state.showBtnRight3 && (
                        <Button
                            disabled={this.props.btnRight3.disabled}
                            disableRipple
                            disableElevation
                            variant={this.props.btnRight3.variant}
                            color={this.props.btnRight3.color}
                            onClick={this.props.btnRight3.callback}
                        >
                            {this.props.btnRight3.label}
                        </Button>
                    )}
                </div>
            </div>
        )
    }
}

interface State {
    showBtnLeft1: boolean
    showBtnLeft2: boolean
    showBtnLeft3: boolean
    showBtnRight1: boolean
    showBtnRight2: boolean
    showBtnRight3: boolean
}

interface Props {
    btnLeft1?: {
        label: string
        color: any
        variant: any
        callback: any
        disabled?: any
        visible?: boolean
    }
    btnLeft2?: {
        label: string
        color: any
        variant: any
        callback: any
        disabled?: any
        visible?: boolean
    }
    btnLeft3?: {
        label: string
        color: any
        variant: any
        callback: any
        disabled?: any
        visible?: boolean
    }
    btnRight1?: {
        label: string
        color: any
        variant: any
        callback: any
        disabled?: any
        visible?: boolean
    }
    btnRight2?: {
        label: string
        color: any
        variant: any
        callback: any
        disabled?: any
        visible?: boolean
    }
    btnRight3?: {
        label: string
        color: any
        variant: any
        callback: any
        disabled?: any
        visible?: boolean
    }
    fullScreenStyle?: boolean
}
