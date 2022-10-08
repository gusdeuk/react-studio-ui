import React from 'react'
// @ts-ignore
import SelectReact from 'react-select'
// @ts-ignore
import { components } from 'react-select'

import classesScoped from './ReactSelects.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import { CusIconBranchCross } from '../../../../styles/icons/react/CusIconBranchCross'

function ReactSelects() {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry', isDisabled: true },
        { value: 'vanilla', label: 'Vanilla' },
        { value: 'chamooyen', label: 'Chamooyen' },
        { value: 'coronavirus', label: 'Coronavirus' },
    ]

    const testCustomRendererOptions = [
        { id: 1, value: 'chocolate', label: 'Chocolate' },
        { id: 2, value: 'strawberry', label: 'Strawberry' },
        { id: 3, value: 'vanilla', label: 'Vanilla' },
        { id: 4, value: 'chamooyen', label: 'Chamooyen', isDisabled: true },
        { id: 5, value: 'coronavirus', label: 'Coronavirus' },
    ]

    const OptionValueCustomRenderer = (props:any) => {
        const { data } = props
        return (
            <components.SingleValue {...props} key={data.id}>
                <div className='selected-value'>
                    <div className='selected-icon'>
                        <CusIconBranchCross
                            style={{ fontSize: 20, color: '#555' }}
                            className={'mui-icon-custom'}
                        />
                    </div>
                    <div className='selected-label'>{data.label}</div>
                </div>
            </components.SingleValue>
        )
    }

    const OptionImageCustomRenderer = (props: any) => {
        const { data } = props
        return (
            <components.Option {...props} key={data.id}>
                <div className='option-item'>
                    <div className='option-icon'>
                        <CusIconBranchCross
                            style={{ fontSize: 20, color: '#555' }}
                            className={'mui-icon-custom'}
                        />
                    </div>
                    <div className='option-label'>{data.label}</div>
                </div>
            </components.Option>
        )
    }

    return (
        <div className={classesScoped['selects-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>
                    <div className={classes.subtitle}>
                        Browser Native Options Vainilla Select
                    </div>
                    <div style={{ margin: '0 5px 10px' }}>
                        <label
                            className='form-control-label'
                            htmlFor='selectVersion'
                        >
                            This is a label
                        </label>
                        <select className='form-control custom-dropdown'>
                            <option value='2'>Herminio Churches</option>
                            <option value='3'>Louis New Neighborhood</option>
                            <option value='1'>
                                Go and search for it in the angle
                            </option>
                        </select>
                    </div>

                    <div className={classes.subtitle}>
                        Single / Clearable / Searchable React Select
                    </div>
                    <div style={{ margin: '0 5px 10px' }}>
                        <label
                            className='form-control-label'
                            htmlFor='selectVersion'
                        >
                            This is a select label
                        </label>
                        <SelectReact
                            options={options}
                            defaultValue={options[2]}
                            isClearable={true}
                            isSearchable={true}
                            className='custom-single-react-select'
                            classNamePrefix='crs-single-'
                            // defaultMenuIsOpen={ true }
                        />
                    </div>

                    <div className={classes.subtitle}>
                        Single Select with Icons (Custom styled renderer
                        w/specific markup for selected value and menú options)
                    </div>
                    <div style={{ margin: '0 5px 10px' }}>
                        <label
                            className='form-control-label'
                            htmlFor='selectVersion'
                        >
                            This is a select label
                        </label>

                        <SelectReact
                            options={testCustomRendererOptions.map((option) => {
                                return {
                                    value: option.id,
                                    label: option.label,
                                    isDisabled: option.isDisabled,
                                }
                            })}
                            defaultValue={testCustomRendererOptions[2]}
                            placeholder={'Select an Item bla bla'}
                            components={{
                                Option: OptionImageCustomRenderer,
                                SingleValue: OptionValueCustomRenderer,
                            }}
                            // defaultMenuIsOpen={ true }
                            isClearable={true}
                            isSearchable={true}
                            className='custom-single-react-select has-icons'
                            classNamePrefix='crs-single-'
                        ></SelectReact>
                    </div>

                    <div className={classes.subtitle}>React Multi Select</div>
                    <div style={{ margin: '0 5px 10px' }}>
                        <label
                            className='form-control-label'
                            htmlFor='selectVersion'
                        >
                            This is a select label
                        </label>
                        <SelectReact
                            options={options}
                            isMulti
                            className='custom-multi-react-select'
                            classNamePrefix='crs-multi-'
                            isClearable={true}
                            isSearchable={true}
                            defaultValue={[options[0], options[1]]}
                            // defaultMenuIsOpen={ true }
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactSelects
