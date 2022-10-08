import React from 'react'
import classesScoped from './MuiAutocomplete.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'

export function MuiAutocomplete() {
    const top100Films = [
        { title: 'Jaws 🦈', year: 1994 },
        { title: 'Nueve reinas 😁', year: 1994 },
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather 🍊', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
        { title: "Schindler's List", year: 1993 },
        { title: 'Pulp Fiction', year: 1994 },
    ]

    return (
        <div className={classesScoped['auto-complete-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Autocomplete for search / filtering
                    </div>
                    <div className={'mui-search-autocomplete-custom'}>
                        <Autocomplete
                            // freeSolo to true so the textbox can contain any arbitrary value.
                            freeSolo
                            // disableClearable
                            options={top100Films.map((option) => option.title)}
                            // open={true}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder='Placeholder'
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <Search
                                                    style={{
                                                        fontSize: 32,
                                                        color: '#888',
                                                    }}
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Autocomplete outlined versions
                    </div>
                    <div className={'mui-search-autocomplete-custom'}>
                        <Autocomplete
                            /*style={{ width: '500px' }}*/
                            // freeSolo to true so the textbox can contain any arbitrary value.
                            freeSolo
                            // disableClearable
                            options={top100Films.map((option) => option.title)}
                            // open={true}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder='Placeholder'
                                    variant={'outlined'}
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            )}
                        />
                    </div>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Autocomplete outlined versions
                    </div>

                    <div className={'mui-search-autocomplete-custom'}>
                        <Autocomplete
                            /*style={{ width: '500px' }}*/
                            // freeSolo to true so the textbox can contain any arbitrary value.
                            freeSolo
                            // disableClearable
                            options={top100Films.map((option) => option.title)}
                            // open={true}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    placeholder='Placeholder'
                                    variant={'outlined'}
                                    /* margin="normal"*/
                                    InputProps={{
                                        ...params.InputProps,
                                        type: 'search',
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <Search
                                                    style={{
                                                        fontSize: 27,
                                                        color: '#888',
                                                        marginLeft: '7px',
                                                    }}
                                                />
                                            </InputAdornment>
                                        ),
                                    }}
                                    InputLabelProps={{ shrink: true }}
                                />
                            )}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
