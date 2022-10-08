import React from 'react'
import classes from './TestComponent.module.scss'

export function TestComponent() {
    return (
        <div className={[classes['test-component']].join(' ')}>
            <div className={classes['test-1']}>EXAMPLE :hover</div>

            <div className={`${classes['test-2']} ${classes['sibling-class']}`}>
                SIBLING selector
            </div>

            <div className={classes['test-3']}>
                <div className={classes['direct-child']}>
                    EXAMPLE {'>'} DIRECT CHILD
                </div>
            </div>

            <div className={classes['test-4']} data-test={'my-value'}>
                EXAMPLE CUSTOM ATTR SELECTOR [data-test='my-value']
            </div>

            <div className={classes['test-5']}>
                <div>NTH SELECTOR :nth-child(n)</div>
            </div>

            <div className={classes['test-6']}>
                <div>first child SELECTOR :first-child</div>
            </div>

            <div className={classes['test-7']}>
                <div>DUMMY This is a div</div>
                <p>bingo p</p>
            </div>

            <div className={classes['test-8']}>
                <p>DUMMY this is a p</p>
                <ul>bingo UL</ul>
            </div>

            <div className={classes['test-9']}>
                <div title={'flower'}>bingo title</div>
            </div>

            <div className={classes['test-10']}>
                <a href={'https'}>Bingo A https</a>
            </div>
            <div className={classes['test-11']}>
                {' '}
                <a href={'pirulo.pdf'}>Bingo A *.pdf</a>
            </div>
            <div className={classes['test-12']}>
                <input placeholder={'example focus'} />
            </div>
            <div className={classes['test-13']}>
                <input type={'email'} value={'invalid example'} />
            </div>
            <div className={classes['test-14']}>
                <input placeholder={'lalala placeholder style'} />
            </div>
            <div className={classes['test-15']}>
                <div>BINGO1</div>
                <p>BINGO2</p>
            </div>
        </div>
    )
}
