import { router } from '../../routes/app_navigator';

export default function navigationReducer(state, action) {
    const newState = router.getStateForAction(action, state);
    return newState || state;
}