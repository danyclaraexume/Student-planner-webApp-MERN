import React from 'react'
import {Grid} from '@material-ui/core'
import CheckboxList from './checkBoxList'

const Assignment = () => {
    return(
        <Grid container>
            <Grid item xs = '5' style={{backgroundColor:'Gainsboro'}}>
                <p>Current task</p>
                <CheckboxList/>
            </Grid>
            <Grid xs='1'/>
            <Grid item xs = '5' style={{backgroundColor:'LightSkyBlue'}}>
                <h2>completed task</h2>
                                
            </Grid>
        </Grid>
    )
}

export default Assignment;