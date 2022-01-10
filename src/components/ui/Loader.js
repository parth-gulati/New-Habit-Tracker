import React from 'react'
import logo from '../../assets/spiderman-dance.gif'
import { styled } from "@mui/system";

const StyledDiv = styled('div')(({theme})=>({
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}))

const StyledImage = styled('img')(({theme})=>({
    height: '200px'
}))

export default function Loader() {
    return (
        <StyledDiv>
            <StyledImage src={logo} />
        </StyledDiv>
    )
}
