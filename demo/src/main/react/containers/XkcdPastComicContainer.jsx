import React, { Component } from "react";
import ComicView from "../components/ComicView";
import { useStore } from "../createStore";
import withStore from "../hocs/withStore";

//class component
export class XkcdPastComicContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            userComicNum: null
        }
    }

    componentDidMount(){
      this.pastComicApiCall();
    }

    render(){
        const {userComicNum} = this.state
        const {store} = this.props;
        const pastComicStatus = store.pastComicStatus
        return pastComicStatus === "SUCCESS" ? 
            <React.Fragment>
                <div>
                    <button type="button" className="btn btn-primary" onClick={() => this.pastComicApiCall(null)}>
                        Get Random Comic
                    </button>
                </div>
                <div>
                    <input 
                        placeholder="Enter desired comic number" 
                        type="text" 
                        value={userComicNum} 
                        onChange={(event) => this.setState({userComicNum: event.target.value})} 
                    />
                    <button disabled={!userComicNum} type="button" className="btn btn-info" onClick={() => this.pastComicApiCall(userComicNum)}>
                        Fetch Comic
                    </button>
                </div>
                <ComicView
                    xkcdComicInfo={store.pastComic}
                />
              
            </React.Fragment>
            : pastComicStatus === "FAILURE" ?
                onFailure()
                : <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
    }

    onFailure = () => {
        return(
            <div>
                Ooops something went wrong, please try again later...
            </div>
        )
    }

    pastComicApiCall = (comicNum) => {
        const storeInfo = useStore.getState();
        storeInfo.fetchPastComic(comicNum);
    }

}

export default withStore (XkcdPastComicContainer)

// Props and State trigger refreshes on the UI
 // this.props
    // const {locationURL} = this.props;
    // variables passed in from the parent

    // this.setState({var:value})
    // this.state.var OR const {var} = this.state;
    // class level variables -> children -> manipulated by children if you 
    // pass the children a function to do so
    // Example:
    // this.state = {
    //     counter: 0
    // }
    // <div>
    //     {this.state.counter}
    //     <CommonButton 
    //        onCLickAction={()=> this.setState({counter: counter + 1})} 
    //      />
    // </div>

    // lifecycle methods
    // component mount, unmount, update