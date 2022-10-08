import React, { Component } from 'react'

import styles from '../Shared/SharedStyles.module.scss'
import AnimationGallery from './AnimationGallery/AnimationGallery'

export class TestUiSandboxScreen11 extends Component<Props, State> {
    constructor(props: any) {
        super(props)
    }

    render() {
        return (
            <div
                className={`${styles['base-ui-sandbox']} ${styles.white}  custom-scroll-area vert-scroll`}
            >
                <div>
                    <h6>
                        Animation Gallery {'>'} Lottie SVG / JS based animation
                        files
                        <span className={styles['tag-highlight-red']}>
                            Not styled yet, do not use this
                        </span>
                    </h6>
                    <i>
                        <a href={'https://lottiefiles.com/'} target={'_blank'}>
                            https://lottiefiles.com/
                        </a>
                    </i>
                </div>
                <AnimationGallery />

                <hr />
            </div>
        )
    }
}

interface State {}

interface Props {}
