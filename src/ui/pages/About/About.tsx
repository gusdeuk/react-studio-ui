import React from 'react'
import Button from '@material-ui/core/Button'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

export function About() {

    return (
        <div className="page-block-content page-about   animated fadeIn">
           <div>
                <div className="headline-title">About Studio UI</div>
                <div>Styling made with care by <a href="https://www.elpixelista.com" title="" target="_blank">EL PIXELISTA</a>.</div>
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
