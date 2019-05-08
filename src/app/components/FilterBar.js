import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import { FormControl, Typography, Select, MenuItem, InputBase } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import { KeyboardDatePicker} from 'material-ui-pickers';

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
        marginTop: theme.spacing.unit * 3,
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
}))(InputBase);


const useStyles = theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        width: '100%',
        flexDirection: 'column',
        borderBottom: '1px solid lightgray',
        paddingBottom: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'row',
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1)
        }
    },
    formControl: {
        minWidth: 120
    },
    select: {
        width: '300px',
        height: '40px'
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    datepicker: {
        margin: theme.spacing.unit * 2,
        height: '15px'
    },
    datepickerInput: {
        padding: 0,
        '.MuiOutlinedInput-input': {
            padding: 0
        }
    }
    
});

class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genre: 'All',
            release: ''
        };
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value 
        });
    }

    render() {
        const classes = this.props.classes;
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
                <KeyboardDatePicker
                    classes={{
                        root: classes.datepicker,
                        div: {
                            fieldset: {
                                input: classes.datepickerInput
                            }
                        }
                    }}
                    views={["year"]}
                    variant="inline"
                    inputVariant="outlined"
                    format="yyyy"/>
            </div>
        );
    }
}

export default withStyles(useStyles)(FilterBar);