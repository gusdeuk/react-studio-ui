import React from 'react'
import styles from '../Shared/SharedStyles.module.scss'
import { SwiperCarousels } from './SwiperCarousels/SwiperCarousels'
import { MuiTooltips } from './MuiTooltips/MuiTooltips'

export function TestUiSandboxScreen5() {
    return (
        <div
            className={`${styles['base-ui-sandbox']} ${styles.white}  custom-scroll-area vert-scroll`}
        >
            <div>
                <h6>
                    Mui Tooltips {'>'}{' '}
                    <span className={styles['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>
                    <a
                        href={'https://material-ui.com/components/tooltips/'}
                        target={'_blank'}
                    >
                        https://material-ui.com/components/tooltips/
                    </a>
                </i>
                <MuiTooltips />
            </div>

            <div>
                <h6>
                    Customized Swiper Carousels (React-Swiper-JS) {'>'}{' '}
                    <span className={styles['tag-highlight-green']}>
                        Studio restyled version
                    </span>
                </h6>
                <i>
                    <a href={'https://swiperjs.com/react/'} target={'_blank'}>
                        https://swiperjs.com/react/
                    </a>
                </i>
                <i>
                    <a href={'https://swiperjs.com/api/'} target={'_blank'}>
                        https://swiperjs.com/api/
                    </a>
                </i>

                <SwiperCarousels />
            </div>

            <hr />
        </div>
    )
}
