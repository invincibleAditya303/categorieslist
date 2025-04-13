import {Route, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const ProtectedRoute = props => {
    const jwtToken = Cookies.get('userDetails')

    if (jwtToken === undefined) {
        return <Redirect to='/api/login/' />
    }

    return <Route {...props} />
}

export default ProtectedRoute