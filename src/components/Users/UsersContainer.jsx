import React from 'react'
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount, toogleFollowingProgress,
    toogleIsFetching,
    unfollow
} from "../../redux/users-reducer";
import {connect} from "react-redux"
import * as axios from "axios/index";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toogleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.toogleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toogleIsFetching(false);
            this.props.setUsers(data.items)
        });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   isFetching={this.props.isFetching}
                   toogleFollowingProgress={this.props.toogleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toogleIsFetching, toogleFollowingProgress
})(UsersContainer);