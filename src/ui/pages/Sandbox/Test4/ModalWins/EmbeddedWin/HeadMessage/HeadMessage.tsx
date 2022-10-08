import React from 'react'
import classes from './HeadMessage.module.scss'
import { CusIconTriangleError } from '../../../../../../styles/icons/react/CusIconTriangleError'

export function HeadMessage() {
    return (
        <div className={classes['head-message-component']}>
            <div className={classes.icon}>
                <CusIconTriangleError
                    style={{ fontSize: '48px', color: '#ff605d' }}
                />
            </div>

            <div className={[classes.text, 'truncate-multiline-3'].join(' ')}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud
            </div>
        </div>
    )
}
