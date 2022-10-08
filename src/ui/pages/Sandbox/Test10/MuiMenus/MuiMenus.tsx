import React from 'react'
import classesScoped from './MuiMenus.module.scss'
import classes from '../../Shared/SharedStyles.module.scss'
import {
    Button,
    Menu,
    MenuItem,
    MenuProps,
    IconButton,
} from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import SendIcon from '@material-ui/icons/Send'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import { useTheme } from '@material-ui/core/styles'

function MuiMenus() {
    // getting a theme color
    const theme = useTheme()
    console.log(theme.palette.grey['100'])

    const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null)
    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null)
    const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null)
    const openMenu3 = Boolean(anchorEl3)

    const optionsMenu3 = [
        'None',
        'Atria',
        'Callisto',
        'Dione',
        'Ganymede',
        'Hangouts Call',
        'Luna',
        'Oberon',
        'Phobos',
        'Pyxis',
        'Sedna',
        'Titania',
        'Triton',
        'Umbriel',
    ]

    const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl1(event.currentTarget)
    }

    const handleClose1 = () => {
        setAnchorEl1(null)
    }

    const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl2(event.currentTarget)
    }

    const handleClose2 = () => {
        setAnchorEl2(null)
    }

    const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl3(event.currentTarget)
    }

    const handleClose3 = () => {
        setAnchorEl3(null)
    }

    return (
        <div className={classesScoped['menus-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Menus {'>'} Popped emergent menu, fired from a button
                    </div>
                    <Button
                        aria-controls='simple-menu'
                        aria-haspopup='true'
                        variant='contained'
                        color='primary'
                        disableElevation
                        disableRipple
                        onClick={handleClick1}
                        style={{ width: '150px' }}
                    >
                        Open Menu
                    </Button>
                    <Menu
                        id='simple-menu'
                        className={'mui-menus-custom'}
                        anchorEl={anchorEl1}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        PaperProps={{
                            style: {
                                marginTop: '5px',
                                width: '150px',
                            },
                        }}
                        keepMounted
                        elevation={2}
                        open={Boolean(anchorEl1)}
                        onClose={handleClose1}
                        style={{ minWidth: '150px' }}
                    >
                        <MenuItem onClick={handleClose1} selected>
                            Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose1}>My account</MenuItem>
                        <MenuItem onClick={handleClose1}>Logout</MenuItem>
                    </Menu>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Menus {'>'} Popped emergent menu + icons and labels
                    </div>
                    <Button
                        aria-controls='customized-menu'
                        aria-haspopup='true'
                        variant='contained'
                        color='secondary'
                        disableElevation
                        disableRipple
                        onClick={handleClick2}
                        style={{ width: '150px' }}
                    >
                        Open Icons Menu
                    </Button>
                    <Menu
                        id='customized-menu'
                        className={'mui-menus-custom'}
                        anchorEl={anchorEl2}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        PaperProps={{
                            style: {
                                marginTop: '5px',
                                minWidth: '150px',
                            },
                        }}
                        keepMounted
                        elevation={2}
                        open={Boolean(anchorEl2)}
                        onClose={handleClose2}
                    >
                        <MenuItem selected>
                            <ListItemIcon>
                                <SendIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemText primary='Sent mail' />
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <DraftsIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemText primary='Drafts' />
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <InboxIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemText primary='Inbox' />
                        </MenuItem>
                    </Menu>
                </div>

                <div className={classes['content-col-3']}>
                    <div className={classes.subtitle}>
                        Menus {'>'} Fixed width / height + scrollable options
                    </div>

                    <IconButton
                        aria-label='more'
                        aria-controls='long-menu'
                        aria-haspopup='true'
                        onClick={handleClick3}
                    >
                        <MoreVertIcon />
                    </IconButton>

                    <Menu
                        id='long-menu'
                        className={'mui-menus-custom'}
                        anchorEl={anchorEl3}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        PaperProps={{
                            style: {
                                maxHeight: '200px',
                                minWidth: '150px',
                            },
                        }}
                        elevation={2}
                        open={openMenu3}
                        onClose={handleClose3}
                    >
                        {optionsMenu3.map((option) => (
                            <MenuItem
                                key={option}
                                selected={option === 'Atria'}
                                onClick={handleClose3}
                            >
                                {option}
                            </MenuItem>
                        ))}
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default MuiMenus
