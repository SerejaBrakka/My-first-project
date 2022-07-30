import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { getUserProfile } from "../../redux/profile-reducer";
import Profile from "./Profile";
import { getStatus, updateStatus } from "../../redux/profile-reducer";
import { Navigate } from "react-router-dom";
export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    if (!this.props.isAuth) return <Navigate to="/login" />;
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter
)(ProfileContainer);
