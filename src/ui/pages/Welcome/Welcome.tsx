import React from 'react'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

export function Welcome() {

    return (
        <div className="page-block-content page-welcome  animated fadeIn">
            <div>
                <div className="headline-title">Studio UI</div>
                <div>Minimal atomic UI elements collection.</div>
                <div>Components and blocks customized on React material-ui.com</div>
            </div>
            <Link to={'/sandbox'} className="enter-btn">

                <Button
                    color={'primary'}
                    variant={'contained'}
                    disableElevation
                    disableRipple
                >GO TO SANDBOX
                </Button>

            </Link>
        </div>
    )
}
