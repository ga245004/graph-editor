import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

const Header = (props) => {

    const {classes, openLoginDialog, handleCloseLoginDialog} = props;

    let open = openLoginDialog
        ? true
        : false;

    return <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
                Graph Editor
            </Typography>
            <IconButton aria-haspopup="true" color="inherit">
                <AccountCircle/>
            </IconButton>
            <Typography variant="subtitle1" color="inherit">
                Hello, User
            </Typography>
            <Dialog
                open={open}
                onClose={handleCloseLoginDialog}
                aria-labelledby="login-dialog-title">
                <DialogTitle id="login-dialog-title">{"Login into Application!"}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Username"
                        type="email"
                        fullWidth/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseLoginDialog} color="primary">
                        Close
                    </Button>
                    <Button onClick={handleCloseLoginDialog} color="primary" autoFocus>
                        Login
                    </Button>
                </DialogActions>
            </Dialog>

        </Toolbar>
    </AppBar>
};

export default withStyles(styles)(Header);
