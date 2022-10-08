import React from 'react';
import classesScoped from './MuiAlert.module.scss';
import classes from '../../Shared/SharedStyles.module.scss';
import {Alert, AlertTitle, Color} from '@material-ui/lab';
import {Button} from "@material-ui/core";
import {AccountBalance, Alarm} from "@material-ui/icons";


function MuiAlert() {

    return (
        <div className={classesScoped['alert-component']}>
            <div className={classes['content-row']}>

                <div className={classes['content-col-1']}>

                    <div className={classes.subtitle}>Alert Messages - FILLED style, Just message, no title
                    </div>

                    <Alert severity="error" variant="filled" style={{ marginBottom:'10px'}}>
                        This is an error alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="warning" variant="filled" style={{ marginBottom:'10px'}}>
                        This is a warning alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="info" variant="filled" style={{ marginBottom:'10px'}}>
                        This is an info alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="success" variant="filled" style={{ marginBottom:'10px'}}>
                        This is a success alert — <strong>check it out!</strong>
                    </Alert>

                    <div className={classes.subtitle}>Alert Messages - FILLED style, Just message, no title
                    </div>

                    <Alert severity="error" style={{ marginBottom:'10px'}}>
                        This is an error alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="warning" style={{ marginBottom:'10px'}}>
                        This is a warning alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="info"  style={{ marginBottom:'10px'}}>
                        This is an info alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="success"  style={{ marginBottom:'10px'}}>
                        This is a success alert — <strong>check it out!</strong>
                    </Alert>


                    <div className={classes.subtitle}>Alert Messages with Titles - OUTLINED style
                    </div>
                    <Alert severity="error" variant="outlined" style={{ marginBottom:'10px'}}>
                        <AlertTitle>Error</AlertTitle>
                        This is an error alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="warning" variant="outlined" style={{ marginBottom:'10px'}}>
                        <AlertTitle>Warning</AlertTitle>
                        This is a warning alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="info" variant="outlined" style={{ marginBottom:'10px'}}>
                        <AlertTitle>Info</AlertTitle>
                        This is an info alert — <strong>check it out!</strong>
                    </Alert>
                    <Alert severity="success" variant="outlined" style={{ marginBottom:'10px'}}>
                        <AlertTitle>Success</AlertTitle>
                        This is a success alert — <strong>check it out!</strong>
                    </Alert>




                    <div className={classes.subtitle}>Alert Messages - built in actions
                    </div>

                    <Alert onClose={() => { alert('close me')}}  style={{ marginBottom:'10px'}}>This is a success alert with a close X — check it out!</Alert>
                    <Alert
                        action={
                            <Button color="inherit" size="small" disableRipple>UNDO</Button>
                        }
                        style={{ marginBottom:'10px'}}
                    >
                        This is a success alert with an action — check it out!
                    </Alert>



                    <div className={classes.subtitle}>Alert Messages - custom icon / no icon and force color state
                    </div>

                    <Alert icon={<AccountBalance />}  color="info" style={{ marginBottom:'10px'}}>
                        This is a custom info alert — check it out!
                    </Alert>

                    <Alert icon={false} color="info" style={{ marginBottom:'10px'}}>
                        This is a custom info alert — check it out!
                    </Alert>





                </div>
            </div>
        </div>
    );

}

export default MuiAlert;
