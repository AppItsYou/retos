import { types } from '../types/types';

// const state = {
//     name: 'Archivaldo',
//     logged: true
// }

export const authReducer = (state = {}, action) => {

    switch (action.type) {
        case types.login:
            return {

                logged: true
            }

        case types.logout:
            return {
                logged: false
            }

        default:
            return { logged: false };
    }

}