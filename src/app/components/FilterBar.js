import React, { Component }  from 'react';
import { FormControl, Typography, Select, MenuItem, InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { DatePicker } from '@material-ui/pickers';



const boostrapStyle = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: 'white',
        border: `1px solid ${theme.palette.primary.main}`,
        fontSize: 12,
        width: 'auto',
        height: '15px',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: theme.typography.fontFamily,
        '&:focus': {
            borderRadius: 4,
            borderColor: theme.palette.primary.main,
            boxShadow: '0 0 0 0.2rem #b19cd9',
        },
    },
}))


const BootstrapInput = (boostrapStyle)(InputBase);


const useStyles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        borderBottom: '1px solid lightgray',
        paddingBottom: theme.spacing(2),
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            marginTop: theme.spacing(1),
        }
    },
    formControl: {
        minWidth: 120,
        margin: theme.spacing(1)
    },
    select: {
        width: '300px',
        height: '40px'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    datepicker: {
        margin: theme.spacing(2),
    },
    datepickerRoot: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    datepickerInput: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: 'white',
        border: `1px solid ${theme.palette.primary.main}`,
        fontSize: 12,
        width: 'auto',
        height: '15px',
        padding: '10px 26px 10px 12px',
        minWidth: '260px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: theme.typography.fontFamily,
        '&:focus': {
            borderRadius: 4,
            borderColor: theme.palette.primary.main,
            boxShadow: '0 0 0 0.2rem #b19cd9',
        },
    },
});

class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: 'All',
            release: new Date()
        };
    }

    handleChange(event) {
        console.log(event);
        this.setState({
            [event.target.name]: event.target.value 
        });
    }

    render() {
        const classes = this.props.classes;
        const release = this.state.release;
        return(
            <div className={classes.root}>
                <FormControl variant="outlined" className={classes.formControl}>
                    <Typography varient="h6" noWrap>Genre</Typography>
                    <Select
                        className={classes.select}
                        value={this.state.genre}
                        onChange={this.handleChange.bind(this)}
                        input={
                            <BootstrapInput name="genre" id="genre-input" />
                        }>
                        <MenuItem value="All">All</MenuItem>
                        <MenuItem value="Action">Action</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant="outlined" className={classes.formControl}>
                    <Typography varient="h6" noWrap>Release</Typography>
                    <DatePicker
                        InputProps={{classes: {
                            root: classes.datepickerRoot,
                            input: classes.datepickerInput
                        }}}
                        inputVariant="outlined"
                        views={["year", "month"]}
                        variant="inline"
                        name="release"
                        onChange={(date) => this.setState({release: date})}
                        value={release}
                        format="MMMM YYYY"/>
                </FormControl>
                    
            </div>
        );
    }
}

export default withStyles(useStyles)(FilterBar);