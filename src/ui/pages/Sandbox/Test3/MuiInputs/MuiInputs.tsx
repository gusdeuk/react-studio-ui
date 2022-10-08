import React from 'react'
import classesScoped from './MuiInputs.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import Input from '@material-ui/core/Input'
import FormLabel from '@material-ui/core/FormLabel'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search'
import AccessAlarm from '@material-ui/icons/AccessAlarm'

export function MuiInputs() {
    return (
        <div className={classesScoped['inputs-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Normal Inputs / label, Input + helper text
                    </div>
                    <div className={'mui-form-custom'}>
                        <FormControl style={{ width: '100%' }}>
                            <FormLabel
                                className={'no-margin'}
                                htmlFor={'input1'}
                            >
                                This is a Label
                            </FormLabel>
                            <Input
                                id={'input1'}
                                placeholder='This is a placeholder'
                                className={'mui-input-custom'}
                                autoComplete={'off'}
                                fullWidth
                            />
                            <FormHelperText>
                                Some important helper text as normal text
                            </FormHelperText>
                            <FormHelperText className='Mui-success'>
                                Some important helper text as SUCCESS
                            </FormHelperText>
                        </FormControl>
                    </div>

                    <div className={classes.subtitle}>
                        Normal Inputs / label, Input + helper text (WITH ERRORS)
                    </div>
                    <div className={'mui-form-custom'}>
                        <FormControl style={{ width: '100%' }}>
                            <FormLabel
                                error
                                className={'no-margin'}
                                htmlFor={'input1Error'}
                            >
                                This is a Label
                            </FormLabel>
                            <Input
                                id={'input1Error'}
                                error
                                placeholder='This is a placeholder'
                                className={'mui-input-custom'}
                                autoComplete={'off'}
                                fullWidth
                            />
                            <FormHelperText error>
                                Some important helper text es ERROR
                            </FormHelperText>
                        </FormControl>
                    </div>

                    <div className={classes.subtitle}>
                        Specific Input for Search filters (no default underline)
                    </div>
                    <div className={'mui-form-custom'}>
                        <FormControl style={{ width: '100%' }}>
                            <Input
                                id={'input1'}
                                placeholder='This is a placeholder'
                                className={'mui-input-custom search-mode'}
                                autoComplete={'off'}
                                fullWidth
                                type='search'
                                startAdornment={
                                    <InputAdornment position='start'>
                                        <Search
                                            style={{
                                                fontSize: 28,
                                                color: '#888',
                                            }}
                                        />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>

                    <div className={classes.subtitle}>
                        Input + Icon Adornment to the left
                    </div>
                    <div className={'mui-form-custom'}>
                        <FormControl style={{ width: '100%' }}>
                            <Input
                                id={'input1'}
                                placeholder='This is a placeholder'
                                className={'mui-input-custom'}
                                autoComplete={'off'}
                                fullWidth
                                startAdornment={
                                    <InputAdornment position='start'>
                                        <AccessAlarm
                                            style={{
                                                fontSize: 20,
                                                color: '#888',
                                                marginBottom: '3px',
                                            }}
                                        />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>

                    <div className={classes.subtitle}>
                        Input + Icon Adornment to the right
                    </div>
                    <div className={'mui-form-custom'}>
                        <FormControl style={{ width: '100%' }}>
                            <Input
                                id={'input1'}
                                placeholder='This is a placeholder'
                                className={'mui-input-custom'}
                                autoComplete={'off'}
                                fullWidth
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <AccessAlarm
                                            style={{
                                                fontSize: 20,
                                                color: '#888',
                                                marginBottom: '3px',
                                            }}
                                        />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Outlined Input / label, Input + helper text
                    </div>
                    <div className={'mui-form-custom'}>
                        <FormControl style={{ width: '100%' }}>
                            <FormLabel htmlFor={'input2'}>
                                This is a Label
                            </FormLabel>
                            <OutlinedInput
                                id={'input2'}
                                placeholder='This is a placeholder'
                                className={'mui-input-custom'}
                                autoComplete={'off'}
                                fullWidth
                            />
                            <FormHelperText>
                                Some important helper text as normal text
                            </FormHelperText>
                            <FormHelperText className='Mui-success'>
                                Some important helper text as SUCCESS
                            </FormHelperText>
                        </FormControl>
                    </div>

                    <div className={classes.subtitle}>
                        Outlined Input / label, Input + helper text (WITH
                        ERRORS)
                    </div>
                    <div className={'mui-form-custom'}>
                        <FormControl style={{ width: '100%' }}>
                            <FormLabel error htmlFor={'inputError'}>
                                This is a Label
                            </FormLabel>
                            <OutlinedInput
                                error
                                id={'inputError'}
                                placeholder='This is a placeholder'
                                className={'mui-input-custom'}
                                autoComplete={'off'}
                                fullWidth
                            />
                            <FormHelperText error>
                                Some important helper text as ERROR
                            </FormHelperText>
                        </FormControl>
                    </div>

                    <div className={classes.subtitle}>
                        Outlined Input / label, Input + helper text (WITH ERRORS
                        / WARNING STYLE)
                    </div>
                    <div className={'mui-form-custom'}>
                        <FormControl style={{ width: '100%' }}>
                            <FormLabel
                                error
                                className={'warning-style'}
                                htmlFor={'input2'}
                            >
                                This is a Label
                            </FormLabel>
                            <OutlinedInput
                                error
                                id={'input2'}
                                placeholder='This is a placeholder'
                                className={'mui-input-custom warning-style'}
                                autoComplete={'off'}
                                fullWidth
                            />
                            <FormHelperText error className={'warning-style'}>
                                Some important helper text as warning text
                            </FormHelperText>
                        </FormControl>
                    </div>

                    <div className={classes.subtitle}>
                        Outlined Input + Icon Adornment to the right
                    </div>
                    <div className={'mui-form-custom'}>
                        <FormControl style={{ width: '100%' }}>
                            <OutlinedInput
                                id={'input1'}
                                placeholder='This is a placeholder'
                                className={'mui-input-custom'}
                                autoComplete={'off'}
                                fullWidth
                                endAdornment={
                                    <InputAdornment position='end'>
                                        <AccessAlarm
                                            style={{
                                                fontSize: 20,
                                                color: '#888',
                                                marginRight: '-6px',
                                            }}
                                        />
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </div>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Outlined Multiline Text Area / label, Input + helper
                        text
                    </div>
                    <div className={'mui-form-custom'}>
                        <FormControl style={{ width: '100%' }}>
                            <FormLabel htmlFor={'input3'}>
                                This is a Label
                            </FormLabel>
                            <OutlinedInput
                                id={'input3'}
                                placeholder='This is a placeholder'
                                className={'mui-input-custom'}
                                fullWidth
                                multiline={true}
                                rows={5}
                            />
                            <FormHelperText>
                                Some important helper text as normal text
                            </FormHelperText>
                            <FormHelperText className='Mui-success'>
                                Some important helper text as SUCCESS
                            </FormHelperText>
                        </FormControl>
                    </div>

                    <div className={classes.subtitle}>
                        Outlined Multiline Text Area / label, Input + helper
                        text (WITH ERRORS)
                    </div>
                    <div className={'mui-form-custom'}>
                        <FormControl style={{ width: '100%' }}>
                            <FormLabel error htmlFor={'input3Error'}>
                                This is a Label
                            </FormLabel>
                            <OutlinedInput
                                error
                                id={'input3Error'}
                                placeholder='This is a placeholder'
                                className={'mui-input-custom'}
                                fullWidth
                                multiline={true}
                                rows={5}
                            />
                            <FormHelperText error>
                                Some important helper text as ERROR
                            </FormHelperText>
                        </FormControl>
                    </div>

                    <div className={classes.subtitle}>
                        Outlined Multiline Text Area / label, Input + helper
                        text (WITH ERRORS / / WARNING STYLE)
                    </div>
                    <div className={'mui-form-custom'}>
                        <FormControl style={{ width: '100%' }}>
                            <FormLabel
                                error
                                className={'warning-style'}
                                htmlFor={'input3Error'}
                            >
                                This is a Label
                            </FormLabel>
                            <OutlinedInput
                                error
                                id={'input3Error'}
                                placeholder='This is a placeholder'
                                className={'mui-input-custom warning-style'}
                                fullWidth
                                multiline={true}
                                rows={5}
                            />
                            <FormHelperText error className={'warning-style'}>
                                Some important helper text as warning
                            </FormHelperText>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div>
    )
}
