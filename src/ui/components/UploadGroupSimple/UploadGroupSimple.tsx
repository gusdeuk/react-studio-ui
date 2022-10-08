import React, { Component } from 'react'
import classes from './UploadGroupSimple.module.scss'

import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import { OutlinedInput } from '@material-ui/core'
import FormHelperText from '@material-ui/core/FormHelperText'

import { CusIconArrowUpCommit } from '../../styles/icons/react/CusIconArrowUpCommit'

export class UploadGroupSimple extends Component<Props, State> {
    private hiddenFileInput: any
    private transparentImage =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII='
    private defaultImage =
        'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzZweCIgaGVpZ2h0PSIzNnB4IiB2aWV3Qm94PSIwIDAgMzYgMzYiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+ZG93bmxvYWQ8L3RpdGxlPgogICAgPGcgaWQ9IlBhZ2UtMSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9ImNyZWF0ZS1uZXctYXBwLWNvcHktMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03NzIuMDAwMDAwLCAtNTA5LjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgIDxnIGlkPSJkb3dubG9hZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzcyLjAwMDAwMCwgNTA5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwXzQiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOCwzNiBDMjMuNTQ2NjY0NCwzNiAyOC41MDczNjU5LDMzLjQ5MTE5NDEgMzEuODA5MjUxNSwyOS41NDY0MzUgQzM0LjQyNTIzOTUsMjYuNDIxMTE3MSAzNiwyMi4zOTQ0NjExIDM2LDE4IEMzNiw4LjA1ODg3NDUgMjcuOTQxMTI1NSwwIDE4LDAgQzguMDU4ODc0NSwwIDAsOC4wNTg4NzQ1IDAsMTggQzAsMjcuOTQxMTI1NSA4LjA1ODg3NDUsMzYgMTgsMzYgWiIgaWQ9Ik92YWwiIGZpbGw9IiM5NkQ1RUYiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMi43ODcsMjcuNjI2IEwzMi4yNSw3LjAwMiBDMzYuMjg2MTkwMSwxMi4yNTI1MjE3IDM3LjExMzIxMzUsMTkuMjk1MzE3OCAzNC40MDMxNjk0LDI1LjMzODAzODIgQzMxLjY5MzEyNTIsMzEuMzgwNzU4NSAyNS44ODM3ODg2LDM1LjQ0NzI3NDUgMTkuMjc4NDYzNiwzNS45MjUyODA5IEMxMi42NzMxMzg1LDM2LjQwMzI4NzMgNi4zMzg4MzU5MywzMy4yMTU1NjggMi43ODcsMjcuNjI2IEwyLjc4NywyNy42MjYgWiIgaWQ9IkNvbWJpbmVkX1NoYXBlIiBmaWxsPSIjNjFDMEU3Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXBfMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMDAwMDAwLCAxMi4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iVHJpYW5nbGUiIG9wYWNpdHk9IjAuNiIgcG9pbnRzPSIxMy44NDEgMCAxOS45MDggMTAuOTQ3IDcuNzc0IDEwLjk0NyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZV9Db3B5IiBwb2ludHM9IjE5LjkxNSAxMC45NDcgMTkuOTE1IDAgMTMuODQxIDAiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iVHJpYW5nbGVfQ29weV8yIiBwb2ludHM9IjAuMDIzIDAgMC4wMjMgMTAuOTQ3IDYuMDk3IDEwLjk0NyI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHg9IjAuMDIyIiB5PSIxMS42MzIiIHdpZHRoPSIxOS44ODUiIGhlaWdodD0iMS4zNjgiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iVHJpYW5nbGVfQ29weV80IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2Ljk1Njc1MCwgNS40NzE4ODUpIHJvdGF0ZSgyOC45OTg5NzcpIHRyYW5zbGF0ZSgtNi45NTY3NTAsIC01LjQ3MTg4NSkgIiBwb2ludHM9IjkuNjExMzc3NDkgMTAuMjYxNDE5MyA5LjUxMTMzNSAyLjA5ODk1MjQyIDQuMzAyMTIyNDkgMC42ODIzNTA3NDIiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iVHJpYW5nbGVfQ29weV81IiBvcGFjaXR5PSIwLjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuOTUzMjUwLCA1LjQ3MTg4NSkgcm90YXRlKDE1MS4wMDEwMjMpIHRyYW5zbGF0ZSgtNi45NTMyNTAsIC01LjQ3MTg4NSkgIiBwb2ludHM9IjkuNjA3ODc3NDkgMC42ODIzNTA3MDMgOS41MDc4MzUgOC44NDQ4MTc1NCA0LjI5ODYyMjQ5IDEwLjI2MTQxOTMiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+'

    // declare defaults (automatic)
    static defaultProps = {
        rawBase64OnUpdateHandler: null,
        labelText: 'Please set label text prop...',
        helperText: 'Please set helper text prop...',
        placeHolderText: 'Please set placeholder text prop...',
        showDefaultImage: false,
    }

    constructor(props: Props | Readonly<Props>) {
        super(props)
        this.state = {
            imagePreviewSrc: this.transparentImage,
            imageNameFieldValue: '',
        }
        this.setupInitElements()
    }

    // init setup based on received props, etc
    setupInitElements = () => {
        // get refs stuff for certain elements
        this.hiddenFileInput = React.createRef()
    }

    // after dom react lifecycle stuff
    componentDidMount() {
        if (this.props.showDefaultImage) {
            this.setState({
                imagePreviewSrc: this.defaultImage,
            })
        }
    }

    // forward event to hidden input
    handleUploadClick = (event: any) => {
        this.hiddenFileInput.current.click()
    }

    // listen to upload changes (hidden input)
    handleUploadChange = (event: any) => {
        const uploadedFile = event.target.files[0]

        if (uploadedFile) {
            let reader = new FileReader()
            reader.addEventListener('load', (event) => {
                // read uploaded result
                if (
                    event &&
                    event.target &&
                    event.target.result &&
                    typeof event.target.result === 'string'
                ) {
                    const dataImagePreviewSrcBase64Data = event.target.result
                    const dataImagePreviewSrcBase64DataRaw = event.target.result.split(
                        ','
                    )[1]

                    this.setState({
                        // update base 64 image
                        imagePreviewSrc: dataImagePreviewSrcBase64Data,
                        imageNameFieldValue: uploadedFile.name,
                    })

                    // close handler defined in parent and received as prop
                    // emit raw data to parent
                    if (this.props.rawBase64OnUpdateHandler) {
                        this.props.rawBase64OnUpdateHandler(
                            dataImagePreviewSrcBase64DataRaw
                        )
                    }
                }
            })
            reader.readAsDataURL(uploadedFile)
        }
    }

    render() {
        return (
            <div className={classes['upload-group-simple-component-base']}>
                <div className={classes.left}>
                    <div className={classes.mask}>
                        <img src={this.state.imagePreviewSrc} />
                    </div>
                </div>

                <div className={['mui-form-custom', classes.middle].join(' ')}>
                    <FormControl style={{ width: '100%' }}>
                        <FormLabel
                            // error
                            htmlFor={'input1'}
                        >
                            {this.props.labelText}
                        </FormLabel>

                        <OutlinedInput
                            id={'input1'}
                            placeholder={this.props.placeHolderText}
                            className={'mui-input-custom no-focus'}
                            type={'search'}
                            readOnly
                            fullWidth
                            value={this.state.imageNameFieldValue}
                            // error
                        />

                        <FormHelperText>{this.props.helperText}</FormHelperText>

                        {/* hidden input stuff */}
                        <input
                            type='file'
                            ref={this.hiddenFileInput}
                            onChange={this.handleUploadChange}
                            style={{ display: 'none' }}
                            accept='image/png, image/jpeg, image/svg+xml'
                        />
                    </FormControl>
                </div>

                <div className={classes.right}>
                    <CusIconArrowUpCommit
                        onClick={this.handleUploadClick}
                        style={{ fontSize: 20, color: '#2eace0' }}
                        className={'mui-icon-custom'}
                    />
                </div>
            </div>
        )
    }
}

interface State {
    imagePreviewSrc: any
    imageNameFieldValue: any
}

interface Props {
    rawBase64OnUpdateHandler?: Function
    labelText?: string
    helperText?: string
    placeHolderText?: string
    showDefaultImage?: boolean
}
