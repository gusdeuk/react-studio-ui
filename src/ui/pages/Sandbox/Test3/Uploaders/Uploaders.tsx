import React from 'react'
import classesScoped from './Uploaders.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import { UploadGroupSimple } from '../../../../components/UploadGroupSimple/UploadGroupSimple'

export function Uploaders() {
    // forward event to hidden input
    const receiveBase64DataUpdate = (base64Data: string) => {
        alert('Catched base 64 DATA >>> ' + base64Data)
    }

    return (
        <div className={classesScoped['uploader-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-2']}>
                    <div className={classes.subtitle}>
                        Text field with preview, field, small legend, default
                        image + upload button
                    </div>
                    <UploadGroupSimple
                        labelText={
                            'This is a Label Text > lorem ipsum dolor sit amet'
                        }
                        helperText={
                            'This is a Helper Text > lorem ipsum dolor sit amet'
                        }
                        placeHolderText={
                            'This ia a Placeholder Text > lorem ipsum dolor sit amet'
                        }
                        rawBase64OnUpdateHandler={receiveBase64DataUpdate}
                        showDefaultImage
                    />
                </div>

                <div className={classes['content-col-2']}>
                    <div className={classes.subtitle}>
                        Text field with preview, field, small legend + upload
                        button (Unset props)
                    </div>
                    <UploadGroupSimple
                        rawBase64OnUpdateHandler={receiveBase64DataUpdate}
                    />
                </div>
            </div>
        </div>
    )
}
