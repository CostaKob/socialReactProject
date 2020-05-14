import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';


class Users extends React.Component {

    componentDidMount () {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
        .then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount (response.data.totalCount);
        });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i=1; i <= pagesCount; i++) {
            pages.push(i);
        }

        let onPageChange = (pageNumber) => {
            this.props.setCurrentPage (pageNumber);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
        };

        return <div>
            <div>
                {pages.map( p => {
                    if(p <= 20){
                        return <span onClick={ (e) => {onPageChange(p)}} className={ this.props.currentPage === p && classes.selectedPage }>{p}</span>
                    }
                
                })}
            </div>
                {
                    this.props.users.map((u) =>
                        <div key={u.id}>
                            <span>
                                <div className={classes.user}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto} />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                        : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{"u.lastName"}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </span>
                            </span>
                        </div>)
                }
            </div>
    }
}

export default Users;




// import React from 'react';
// import classes from './Users.module.css';
// import * as axios from 'axios';
// import userPhoto from '../../assets/images/user.png';

// const Users = (props) => {
//     if (props.users.length === 0){

//         axios.get('https://social-network.samuraijs.com/api/1.0/users')
//         .then(response => {
//             props.setUsers(response.data.items);
//         });
//     } 
    
//     return <div>
//         {
//             props.users.map( (u) => 
//             <div key={u.id}>
//                     <span>
//                         <div className={classes.user}>
//                             <img src={u.photos.small != null ? u.photos.small : userPhoto} />
//                         </div>
//                         <div>
//                             { u.followed 
//                                 ? <button onClick={ () => {props.unfollow(u.id)} }>Unfollow</button> 
//                                 : <button onClick={ () => {props.follow(u.id)} }>Follow</button>
//                             }
//                         </div>
//                     </span>
//                 <span>
//                     <span>
//                         <div>{u.name}</div>
//                         <div>{"u.lastName"}</div>
//                         <div>{u.status}</div>
//                     </span>
//                     <span>
//                         <div>{"u.location.country"}</div>
//                         <div>{"u.location.city"}</div>
//                     </span>
//                 </span>
//             </div>)
//         }
//     </div>

// }
// export default Users;