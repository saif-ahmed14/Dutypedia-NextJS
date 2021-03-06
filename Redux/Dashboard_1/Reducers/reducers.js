import { combineReducers } from 'redux';

import { dutypediaReducers } from '../../Dashboard_1/Reducers/Staff/Dutypedia';
import create_online_user from '../../Dashboard_1/Reducers/Staff/Dutypedia/onlineUser';
import { offlineReducers } from '../../Dashboard_1/Reducers/Staff/Offline';
import { offline_user } from '../../Dashboard_1/Reducers/Staff/Offline/offlineUser';

import workOutRoutineReducers from './Routine/workOutRoutineReducers';

import groupUserSelect from './groupUserSelect';
import mentorListReducer from './mentorListReducer';
const reducers = combineReducers({
    workOutRoutineReducers,
    groupUserSelect,
    mentorListReducer,
    dutypedia: dutypediaReducers,
    onlineUser: create_online_user,
    offline: offlineReducers,
    offlineUser: offline_user
});

export default reducers;
