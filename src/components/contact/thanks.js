import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import wiiro from '../../assets/images/mrWii.png'
import { NavLink } from 'react-router-dom'

const Thanks = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography
          component="div"
          style={{
            height: '100vh',
            marginTop: '15vh'
          }}
        >
          <div className="thankYou">
            <img src={wiiro} alt="Thank You"></img>
            <h1>Thank You!</h1>
            <h2>Will get back at you as soon as possible!</h2>
            <h2>Have a nice day</h2>
            <h2>
              <span role="img" aria-label="smiley">
                😊
              </span>
            </h2>
            <NavLink to="/" exact>
              <button id="btn1">Take me home</button>
            </NavLink>
          </div>
        </Typography>
      </Container>
    </React.Fragment>
  )
}
export default Thanks
