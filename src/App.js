import React from "react"
import './App.css'
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/Login'
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/state/app-reducer";
import {compose} from "redux";
import store from "./redux/state/redux-store";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) return '...loading'
        return (
            <div className="wrapper">
                <HeaderContainer/>
                <NavBar/>

                    <Route path='/profile/:userId?'
                           render={() =>
                               <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() =>
                               <DialogsContainer/>}/>
                    <Route path='/users'
                           render={() =>
                               <UsersContainer/>}/>
                    <Route path='/login'
                           render={() =>
                               <LoginPage/>}/>

                <Footer/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
let AppContainer = connect(mapStateToProps, {initializeApp})(withRouter(App))


export const MainApp = () => {
    return <Provider store={store}>
        <BrowserRouter>
            <AppContainer/>
        </BrowserRouter>
    </Provider>

}