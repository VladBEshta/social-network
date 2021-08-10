import React from "react"
import './App.css'
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from './components/Login/Login'
import {connect} from "react-redux";
import {initializeApp} from "./redux/state/app-reducer";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) return '...loading'
        else return (
            <BrowserRouter>
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
            </BrowserRouter>
        )}
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
export default connect(mapStateToProps, {initializeApp})(App);