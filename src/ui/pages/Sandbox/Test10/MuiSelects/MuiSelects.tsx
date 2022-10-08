import React from 'react'
import classesScoped from './MuiSelects.module.scss'

import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import MuiSelect from '@material-ui/core/Select'

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}))

function MuiSelects() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chamooyen', label: 'Chamooyen' },
        { value: 'coronavirus', label: 'Coronavirus' },
    ]

    const classes = useStyles()
    const [age, setAge] = React.useState('')

    const handleChange = (event: any) => {
        setAge(event.target.value)
    }

    return (
        <div className={classesScoped['selects-component']}>
            <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Age</InputLabel>
                <MuiSelect
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={age}
                    onChange={handleChange}
                    MenuProps={{ elevation: 2 }}
                >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-helper-label'>
                    Age
                </InputLabel>
                <MuiSelect
                    labelId='demo-simple-select-helper-label'
                    id='demo-simple-select-helper'
                    value={age}
                    onChange={handleChange}
                    MenuProps={{ elevation: 2 }}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
                <FormHelperText>Some important helper text</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <MuiSelect
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                    MenuProps={{ elevation: 2 }}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
                <FormHelperText>Without label</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel
                    shrink
                    id='demo-simple-select-placeholder-label-label'
                >
                    Age
                </InputLabel>
                <MuiSelect
                    labelId='demo-simple-select-placeholder-label-label'
                    id='demo-simple-select-placeholder-label'
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    MenuProps={{ elevation: 2 }}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
                <FormHelperText>Label + placeholder</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl} disabled>
                <InputLabel id='demo-simple-select-disabled-label'>
                    Name
                </InputLabel>
                <MuiSelect
                    labelId='demo-simple-select-disabled-label'
                    id='demo-simple-select-disabled'
                    value={age}
                    onChange={handleChange}
                    MenuProps={{ elevation: 2 }}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
                <FormHelperText>Disabled</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl} error>
                <InputLabel id='demo-simple-select-error-label'>
                    Name
                </InputLabel>
                <MuiSelect
                    labelId='demo-simple-select-error-label'
                    id='demo-simple-select-error'
                    value={age}
                    onChange={handleChange}
                    renderValue={(value) => `⚠️  - ${value}`}
                    MenuProps={{ elevation: 2 }}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
                <FormHelperText>Error</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-readonly-label'>
                    Name
                </InputLabel>
                <MuiSelect
                    labelId='demo-simple-select-readonly-label'
                    id='demo-simple-select-readonly'
                    value={age}
                    onChange={handleChange}
                    inputProps={{ readOnly: true }}
                    MenuProps={{ elevation: 2 }}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
                <FormHelperText>Read only</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-autowidth-label'>
                    Age
                </InputLabel>
                <MuiSelect
                    labelId='demo-simple-select-autowidth-label'
                    id='demo-simple-select-autowidth'
                    value={age}
                    onChange={handleChange}
                    autoWidth
                    MenuProps={{ elevation: 2 }}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
                <FormHelperText>Auto width</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
                <MuiSelect
                    value={age}
                    onChange={handleChange}
                    displayEmpty
                    className={classes.selectEmpty}
                    inputProps={{ 'aria-label': 'Without label' }}
                    MenuProps={{ elevation: 2 }}
                >
                    <MenuItem value='' disabled>
                        Placeholder
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
                <FormHelperText>Placeholder</FormHelperText>
            </FormControl>
            <FormControl required className={classes.formControl}>
                <InputLabel id='demo-simple-select-required-label'>
                    Age
                </InputLabel>
                <MuiSelect
                    labelId='demo-simple-select-required-label'
                    id='demo-simple-select-required'
                    value={age}
                    onChange={handleChange}
                    className={classes.selectEmpty}
                    MenuProps={{ elevation: 2 }}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
                <FormHelperText>Required</FormHelperText>
            </FormControl>
            <FormControl variant='outlined' className={classes.formControl}>
                <InputLabel id='demo-simple-select-outlined-label'>
                    Age
                </InputLabel>
                <MuiSelect
                    labelId='demo-simple-select-outlined-label'
                    id='demo-simple-select-outlined'
                    value={age}
                    onChange={handleChange}
                    label='Age'
                    MenuProps={{ elevation: 2 }}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
            </FormControl>
            <FormControl variant='filled' className={classes.formControl}>
                <InputLabel id='demo-simple-select-filled-label'>
                    Age
                </InputLabel>
                <MuiSelect
                    labelId='demo-simple-select-filled-label'
                    id='demo-simple-select-filled'
                    value={age}
                    onChange={handleChange}
                    MenuProps={{ elevation: 2 }}
                >
                    <MenuItem value=''>
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </MuiSelect>
            </FormControl>
        </div>
    )
}

export default MuiSelects
