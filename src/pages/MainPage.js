import { Switch } from 'react-router-dom'
import React from 'react'
import { Route } from 'react-router-dom'
import Topbar from '../components/Topbar'
import Addwordpage from './Addwordpage'
import Homepage from './Homepage'

const MainPage = () => {
    return (
        <div>
            <Topbar/>
            <Switch>
                <Route path='/add-word'>
                    <Addwordpage/>
                </Route>
                <Route path='/'>
                    <Homepage/>
                </Route>
            </Switch>
        </div>
    )
}

export default MainPage
