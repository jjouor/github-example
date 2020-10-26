import React from "react";
import { connect } from "react-redux";

class Results extends React.Component {
  render() {
    const userResults = this.props.userData.map((userResult) => (
      <p key={userResult.id}>{userResult.login}</p>
    ));

    const repoResults = this.props.repoData.map((repoResult) => (
      <p key={repoResult.id}>{repoResult.name}</p>
    ));

    return (
      <div className="Results">
        <h1 className="MainResult">Result:</h1>
        <table>
          <tr>
            <th>Users: </th>
            <th>Repositories: </th>
          </tr>
          <tr>
            <td>{userResults}</td>
            <td>{repoResults}</td>
          </tr>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userData,
    repoData: state.repoData,
  };
};

export default connect(mapStateToProps)(Results);
