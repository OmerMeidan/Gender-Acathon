import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
const theme = createTheme();

export default function SignIn() {
    const navigate =useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [gender,setGender]=useState('')
    const handleClick = ()=>{
        const profile = {
            email: email,
            password: password,
            gender:gender
        }
        navigate('/Form',{state:profile})
    }

  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
            backgroundImage: 'url(https://serviced.co.il/wp-content/uploads/2021/08/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8-%D7%A9%D7%99%D7%A8%D7%95%D7%AA-%D7%9C%D7%A7%D7%95%D7%97%D7%95%D7%AA-%D7%9E%D7%A9%D7%A8%D7%93-%D7%94%D7%97%D7%99%D7%A0%D7%95%D7%9A.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              height:'100vh',
            backgroundSize: '50vw',
            backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'lightblue' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            התחברות
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
            onChange={(e)=>setEmail(e.target.value)}
              margin="normal"
              required
              fullWidth
              id="email"
              label="מייל"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
            onChange={(e)=>setPassword(e.target.value)}
              margin="normal"
              required
              fullWidth
              name="password"
              label="סיסמה"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControl margin="normal" fullWidth>
                <InputLabel id="demo-simple-select-label">מגדר</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="מגדר"
                    onChange={(e)=>setGender(e.target.value)}
                >
                <MenuItem value={"זכר"}>זכר</MenuItem>
                <MenuItem value={"נקבה"}>נקבה</MenuItem>
                <MenuItem value={"אחר"}>אחר</MenuItem>
                </Select>
                </FormControl>
            
            <Button
            onClick={()=>handleClick()}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {" "}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}