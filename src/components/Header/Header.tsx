/* eslint-disable react/jsx-props-no-spreading */
import {
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { styled } from '@mui/system'
import React, { ReactElement } from 'react'

const HeaderBox = styled('div')({
  height: '80px',
  width: '100%',
  boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
})

type HeaderProps = {
  children: ReactElement | ReactElement[] | string
}

export default function Header({
  handleShowForm,
  token,
  headerText,
  handleShowConfirmationModal,
}: any) {
  const [openProfileMenu, setProfileMenuOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setProfileMenuOpen((prevOpen) => !prevOpen)
  }

  const handleClose = () => {
    setProfileMenuOpen(false)
  }

  return (
    <HeaderBox>
      <div
        style={{
          position: 'absolute',
        }}
      >
        <h2>{headerText}</h2>
      </div>
      <div
        style={{
          marginLeft: 'auto',
        }}
      >
        <IconButton
          sx={{
            color: 'primary.main',
          }}
          ref={anchorRef}
          aria-controls={openProfileMenu ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <AccountCircleIcon color="primary" style={{ fontSize: '30px' }} />
        </IconButton>
        <Popper
          open={openProfileMenu}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={openProfileMenu} id="menu-list-grow">
                    <MenuItem
                      onClick={
                        !token ? handleShowForm : handleShowConfirmationModal
                      }
                    >
                      {token ? 'Log Out' : 'Log In'}
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </HeaderBox>
  )
}
