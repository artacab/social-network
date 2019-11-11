import React from 'react'
import {followAC, setCurrentPageAC, setUsersAC, setUsersTotalCountAC, unfollowAC} from "../../redux/users-reducer";
import {connect} from "react-redux"
import * as axios from "axios/index";
import Users from "./Users";

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setusers(response.data.items);
                this.props.setTotalUsersCount(60);
                debugger;
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setusers(response.data.items)
            });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged}
                      curretPage={this.props.currentPage}
                      users={this.props.users}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setusers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);