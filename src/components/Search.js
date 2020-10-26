import React from "react";
import { connect } from "react-redux";
import { CHANGE_REPODATA, CHANGE_USERDATA } from "../reducers/search";

const mapStateToProps = (state) => {
  return {
    state: state,
    userData: state.userData,
    repoData: state.repoData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveUserData: (payload) => {
      dispatch({ type: CHANGE_USERDATA, payload });
    },
    saveRepoData: (payload) => {
      dispatch({ type: CHANGE_REPODATA, payload });
    },
  };
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    if (!this.state.value) return;

    const saveUserData = this.props.saveUserData;
    const saveRepoData = this.props.saveRepoData;

    let userResponse = await fetch(
      "https://api.github.com/search/users?q=" + this.state.value
    );
    var repoResponse = await fetch(
      "https://api.github.com/search/repositories?q=" + this.state.value
    );
    let userData = await userResponse.json();
    let repoData = await repoResponse.json();
    saveUserData(userData.items);
    saveRepoData(repoData.items);
  }
  render() {
    console.log(this.props.state);
    return (
      <form className="Searchbar" onSubmit={this.handleSubmit}>
        <input
          className="SearchInput"
          placeholder="Search..."
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input className="SearchButton" type="submit" value="Submit" />
      </form>
    );
  }
}
const WrapperAppComponent = connect(mapStateToProps, mapDispatchToProps)(App);
export default WrapperAppComponent;
