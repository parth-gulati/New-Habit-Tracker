import React from 'react'
import { Grid, Typography, Button } from '@mui/material'
import saddance from '../../assets/sad-dance.gif'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'

const StyledHeading = styled(Typography)(({theme})=>({
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem',
      },
      color: theme.palette.common.darkRed,
      textAlign: 'center'
})) 

const StyledButton = styled(Button)(({theme})=>({
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
        textAlign: 'center'
      },
}))

export default function NotFound() {
    console.clear()
    console.log('Well, 404, if you\'re looking for a code.')
    return (
        <Grid direction="column" style={{height: '80vh'}} alignItems="center" justifyContent="center" container>
            <StyledHeading variant="h4">Slow down, Señor. Where ya headed?</StyledHeading>
            <img style={{height: '250px'}} src={saddance} />
            <StyledButton variant="contained" component={Link} to="/tracker">Apologise for wandering and go back</StyledButton>
        </Grid>
    )
}