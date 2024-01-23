import { Card, Container, Grid, IconButton, makeStyles } from '@material-ui/core'
import { CloudDownload } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme)=>{
    return{
        body:{
            marginTop: '10rem',
            height: '60rem'
        },
        gridItem:{
            height: 'auto',
            backgroundColor: 'transparent',
            position: 'relative',
            borderRadius: '1rem',

            
        },
        formsCover:{
            width:'50%',
            objectFit: 'contain',
            borderRadius: 30,
            '&:hover':{
                opacity: 1
            }

        },
        downloadBtn:{
            position: 'absolute',
            bottom: 20,
            left:20,
            color: theme.palette.primary.main,
        }
    }

})
const apply = [
    {
    Title: 'Learn Application',
    Cover: 'Images/learn.png',
    Link: 'https://forms.gle/jeS4KCQdqy7UxPcm9',
    },
    {
    Title: 'Internship Application',
    Cover: 'Images/internship.png',
    Link: 'https://forms.gle/c93cLKjbriWCXwWx5',
    },
]
function Apply() {
    const classes = useStyles()
  return (
    <div className={classes.body}>
      <Container>
        <Grid container>
            {apply.map((forms)=>{
                return(
                    
                    <Grid item md = {6} className = {classes.gridItem} key = {forms.Title}>
                            <a href={forms.Link}>
                            <img className={classes.formsCover} src={forms.Cover} alt={forms.Title} />
                            </a>
                    </Grid>
                )

            })}
        </Grid>
      </Container>
    </div>
  )
}

export default Apply
