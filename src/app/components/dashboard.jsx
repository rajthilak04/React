import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskLists'

export const Dashboard = ({groups}) => (
    <div>
        <h2>Dashboard</h2>
        { groups.map(group => (<div> 
            <ConnectedTaskList id={group.id} name={group.name} /> 
        </div>)) }
    </div>
);

function mapStateProps(state) {
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStateProps)(Dashboard)