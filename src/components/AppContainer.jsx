import React from 'react'
import { Container } from '@material-ui/core'

const AppContainer = ({children}) => {
  return (
    <Container sx={{ marginTop: "2.5rem", marginBottom: "2.5rem" }}>{children}</Container>
  )
}

export default AppContainer;