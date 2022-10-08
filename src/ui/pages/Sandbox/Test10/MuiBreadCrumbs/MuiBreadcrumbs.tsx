import React from 'react'
import classesScoped from './MuiBreadcrumbs.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import { Breadcrumbs, Link, Typography } from '@material-ui/core'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

function MuiBreadcrumbs() {
    function handleClick(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        event.preventDefault()
        alert('You clicked a breadcrumb.')
    }

    return (
        <div className={classesScoped['bread-crumbs-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>
                    <div className={classes.subtitle}>
                        Breadcrumbs {'>'} Std links + Custom Icon as separator
                    </div>

                    <div className={'mui-breadcrumbs-custom'}>
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize='small' />}
                            aria-label='breadcrumb'
                        >
                            <Link
                                color='inherit'
                                href='/'
                                onClick={handleClick}
                            >
                                Home
                            </Link>
                            <Link
                                color='inherit'
                                href='/'
                                onClick={handleClick}
                            >
                                Lorem
                            </Link>
                            <Link
                                color='inherit'
                                href='/'
                                onClick={handleClick}
                            >
                                Ipsum Dolor
                            </Link>
                            <Link
                                color='inherit'
                                href='/getting-started/installation/'
                                onClick={handleClick}
                            >
                                Sit amet
                            </Link>
                            <Typography color='textPrimary'>
                                Breadcrumb
                            </Typography>
                        </Breadcrumbs>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MuiBreadcrumbs
