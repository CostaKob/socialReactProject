import React from 'react';
import classes from './Profile.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }
    activateEditeMode = () => {
        
        this.setState ( {
            editMode: true // setState asynchron
        } );
    }
    deactivateEditeMode = () => {
        this.setState ( {
            editMode: false // setState asynchron
        } )
    }

    render() {
        return (
            <div>
                { !this.state.editMode && 
                    <div>
                        <span onDoubleClick={this.activateEditeMode}>{this.props.status}</span>
                    </div>
                }
                { this.state.editMode && 
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditeMode} value={this.props.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;