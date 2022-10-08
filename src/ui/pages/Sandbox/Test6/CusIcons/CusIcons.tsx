import React from 'react'
import classesScoped from './CusIcons.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import CusIconsCatalog from './CusIconsCatalog'
import CusIconsSamplesSizesColor from './CusIconsSamplesSizesColor'

export function CusIcons() {
    return (
        <div className={classesScoped['cus-icons-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>
                    <CusIconsCatalog />

                    <CusIconsSamplesSizesColor />
                </div>
            </div>
        </div>
    )
}
