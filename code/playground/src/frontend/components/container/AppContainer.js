import React, { Component } from "react";
import { connect } from "react-redux";
import ConnectedListContainer from "./ListContainer";
import ConnectedFormContainer from "./FormContainer";
import { fetchArticlesThunk } from "../../actions/thunks"
import CssBaseline from '@material-ui/core/CssBaseline';

const mapStateToProps = (state) => {
    return {
        debugInfo: state.debugInfo
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchFetchArticles: () => dispatch(fetchArticlesThunk())
    };
};

class AppContainer extends Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div>
                    <div>
                        <h2>Articles</h2>
                        <button type="submit" onClick={this.props.dispatchFetchArticles}>
                            FETCH
                        </button>
                        <ConnectedListContainer />
                        <pre>{JSON.stringify(this.props.debugInfo)}</pre>
                    </div>
                    <div>
                        <h2>Add a new article</h2>
                        <ConnectedFormContainer />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const ConnectedAppContainer = connect(mapStateToProps, mapDispatchToProps)(AppContainer);

export default ConnectedAppContainer;
