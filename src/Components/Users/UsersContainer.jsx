import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { follow, requestUsers, setCurrentPage, toggleFollowingInProgress, unfollow } from '../../redux/users-reducer';
import Preloader from '../Common/Preloader/Preloader';
import Users from './Users';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
        
    }

    onPageChange = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.setCurrentPage(pageNumber);
        this.props.requestUsers(pageNumber, pageSize);
    }
    
    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    };
};

export default compose(
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingInProgress, requestUsers })
) (UsersContainer)