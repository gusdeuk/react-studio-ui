import React from 'react';
import classesScoped from './MuiDateTime.module.scss';
import classes from '../../Shared/SharedStyles.module.scss';

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';


function MuiDateTime() {
    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };


    return (
        <div className={classesScoped['datetime-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>

                    <div className={classes.subtitle}>DateTime {'>'} Several Configuration Examples for Time and Date</div>

                    <div style={{ padding: '20px' }}>


                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid container justify="space-around">

                                <div className={'mui-date-time-custom'}>
                                    <KeyboardDatePicker
                                        disableToolbar
                                        variant="inline"
                                        format="MM/dd/yyyy"
                                        margin="normal"
                                        id="date-picker-inline"
                                        label="Date Picker (inline display)"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </div>
                                <div className={'mui-date-time-custom'}>
                                    <KeyboardDatePicker
                                        margin="normal"
                                        id="date-picker-dialog"
                                        label="Date Picker (dialog display)"
                                        format="MM/dd/yyyy"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change date',
                                        }}
                                    />
                                </div>
                                <div className={'mui-date-time-custom'}>
                                    <KeyboardTimePicker
                                        margin="normal"
                                        id="time-picker"
                                        label="Time Picker - clock"
                                        value={selectedDate}
                                        onChange={handleDateChange}
                                        KeyboardButtonProps={{
                                            'aria-label': 'change time',
                                        }}
                                    />
                                </div>
                            </Grid>
                        </MuiPickersUtilsProvider>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default MuiDateTime;
