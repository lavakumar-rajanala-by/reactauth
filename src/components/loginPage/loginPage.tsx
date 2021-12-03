import React from 'react';
import blueYonderLogo from './blyeyounder-logo.png';
import LoginBackground from './analyticsLoginBackground.png';
import { makeStyles } from '@material-ui/core/styles';
import { Palette } from '@jda/lui-common-component-library';
import { Box, Button, Typography } from '@material-ui/core';
import { LogIn } from '@jda/lui-common-icon-library';

const TenantLogo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.tenantLogo}>
      <Typography variant="h4" gutterBottom id="form-dialog-description">
        <Box fontWeight={'fontWeightBold'} color="white" display="flex">
          BY DevSite
        </Box>
      </Typography>
      {/* <img src={ALMLogo} className={classes.tenantImg} alt="Alm Logo" /> */}
    </Box>
  );
};

const LoginPage = (props: any) => {
  const classes = useStyles();

  return (
    <Box className={classes.appWrapper}>
      <Box className={classes.loginBackground}>
        <img className={classes.loginBackgroundImg} alt="LuminateWallpaper" src={LoginBackground} />
      </Box>
      <Box className={classes.msgAreaStyle}>
        <Box className={classes.sectionCenteredStyle}>
          <TenantLogo />
          <Button variant="outlined" className={classes.loginButtonWrapper} onClick={props.login}>
            <LogIn />
            Login
          </Button>
        </Box>

        <Box className={classes.copyrightStyle}>
          <Box m={2}>
            <img className={classes.copyRightImg} src={blueYonderLogo} alt="JDA plan to deliver" />
          </Box>
          <Box className={classes.copyrightMsg}>
            {'Copyright © %d(currentYear), JDA Software Group, Inc. ALL RIGHTS RESERVED.'.replace(
              '%d(currentYear)',
              new Date().getFullYear().toString()
            )}
            <br />
            <br />
            The software is the confidential information of Blue Yonder Group, Inc., and is licensed as restricted
            rights software. The use, reproduction, or disclosure of this software is subject to restrictions set forth
            in your license agreement with Blue Yonder
          </Box>
          <Box className={classes.versionDetail}>2021.4.0</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;

const useStyles = makeStyles(() => {
  return {
    sectionCenteredStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '50%',
    },
    copyrightStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    loginButtonWrapper: {
      marginTop: '10px',
      display: 'flex',
      justifyContent: 'space-around',
      color: Palette.colors.byBlue['A700'],
      width: '120px',
      borderColor: Palette.colors.byBlue['A700'],
    },
    copyrightMsg: {
      fontFamily: 'Roboto',
      fontSize: '12px',
      color: 'white',
      textAlign: 'center',
      opacity: '0.8',
      width: '500px',
    },
    msgAreaStyle: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'column',
      height: '90%',
    },
    tenantLogo: {
      width: 'auto',
    },
    versionDetail: {
      color: '#9da2bb',
      background: '#040b28',
      padding: '2px 10px',
      fontSize: '10px',
      margin: '5px',
      borderRadius: '5px',
    },
    tenantImg: {
      maxWidth: 360,
      maxHeight: 300,
    },
    copyRightImg: {
      height: 40,
    },
    loginBackground: {
      backgroundRepeat: 'repeatX',
      zIndex: 0,
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
    loginBackgroundImg: {
      height: 600,
    },
    appWrapper: {
      backgroundColor: Palette.colors.byDarkBlue['900'],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      height: '100vh',
    },
  };
});
