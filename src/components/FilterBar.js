import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { createStyles, withStyles } from '@material-ui/core/styles';
import { ButtonBase, TextField } from '@material-ui/core/';
import { fetchTopMediaList } from '../middleware/api';

const useStyles = (theme) => createStyles({
    root: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottom: '4px solid #FFDDFF',
        [theme.breakpoints.down('sm')]:{
            flexDirection: 'column',
        }
    },
    searchBarContainer: {
        display: 'flex', 
        flex: 1, 
        alignItems: 'flex-end', 
        padding: '10px',
        justifyContent: 'flex-end',
        boxSizing: 'border-box',
        [theme.breakpoints.down('sm')]:{
            justifyContent: 'center',
            width: '100%'
        }
    },
    searchBar: {
        [theme.breakpoints.down('sm')]:{
            width: '100%'
        }
    }
});

class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    handleMediaFilterChange(filter) {
        const media = this.props.media;
        this.props.changeMediaList({
            page: 1,
            media: media,
            filter: filter
        })
    }

    render() {
        const classes = this.props.classes;
        const filters = this.props.filters;
        return(
            <div className={classes.root}>
                <div style={{
                        display: 'flex', 
                        flex: 1, 
                        padding: '10px'
                    }}>
                    {filters.map((value) => (
                            <ButtonBase 
                                style={{
                                    margin: '5px', 
                                    padding: '5px', 
                                    borderRadius: '5px'
                                }}
                                onClick={() => this.handleMediaFilterChange(value)}
                                key={value}>
                                <p style={{
                                        margin: 0, 
                                        borderBottom: (value === this.props.filter) ? '1px solid black' : 'none'
                                    }}>
                                    {value}
                                </p>
                            </ButtonBase> 
                    ))}
                </div>
                <div className={classes.searchBarContainer}>
                    <TextField
                        className={classes.searchBar}
                        label="Search..." 
                        variant="outlined" 
                        InputProps={{margin: 'dense'}}
                        InputLabelProps={{margin: 'dense'}}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        filter: state.mediaReducer.mediaList.params.filter,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        changeMediaList: (parameters) => dispatch(fetchTopMediaList(parameters, 'new', true)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(withStyles(useStyles)(FilterBar));