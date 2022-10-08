import React from 'react'
import classes from './PrimaryButton.module.scss'

type Props = {
    label: string
}

export function PrimaryButton(props: Props) {
    return <button className={classes['primary-button']}>{props.label}</button>
}
