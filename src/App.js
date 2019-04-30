import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            IsShowMeModalOpen: false,
            IsConfirmationModalOpen: false,
            IsFormModalOpen: false,
            IsNestedModalOpen: false,
            IsChildModalOpen: false,
            IsOutsideModalOpen: false
        }
    }

    openShowMeModal = () => {
        this.setState({ IsShowMeModalOpen: true });
    }

    closeShowMeModal = (e) => {
        if (e.target.dataset.msg !== undefined)
            alert(e.target.dataset.msg);
        this.setState({ IsShowMeModalOpen: false });
    }

    openConfirmationModal = () => {
        this.setState({ IsConfirmationModalOpen: true });
    }

    closeConfirmationModal = (e) => {
        if (e.target.dataset.msg !== undefined)
            alert(e.target.dataset.msg);
        this.setState({ IsConfirmationModalOpen: false });
    }

    openFormModal = () => {
        this.setState({ IsFormModalOpen: true });
    }

    closeFormModal = (e) => {
        if (e.target.dataset.msg !== undefined)
            alert(e.target.dataset.msg);
        this.setState({ IsFormModalOpen: false });
    }

    openNestedModal = () => {
        this.setState({ IsNestedModalOpen: true });
    }

    closeNestedModal = (e) => {
        if (e.target.dataset.msg !== undefined)
            alert(e.target.dataset.msg);
        this.setState({ IsNestedModalOpen: false });
    }

    openChildModal = () => {
        this.setState({ IsChildModalOpen: true });
    }

    closeChildModal = (e) => {
        if (e.target.dataset.msg !== undefined)
            alert(e.target.dataset.msg);
        this.setState({ IsChildModalOpen: false });
    }

    openOutSideModal = () => {
        this.setState({ IsOutsideModalOpen: true });
    }

    closeOutSideModal = (e) => {
        if (e.target.dataset.msg !== undefined)
            alert(e.target.dataset.msg);
        this.setState({ IsOutsideModalOpen: false });
    }

    render() {
        return (
            <div className="App">
                <div className="row">
                    <div className="col-sm-3">
                        <button className="btn btn-default clearfix" onClick={this.openShowMeModal}>Show Me !</button>
                        <button className="btn btn-primary clearfix" onClick={this.openConfirmationModal}>Show Confirmation !</button>
                        <button className="btn btn-success clearfix" onClick={this.openFormModal}>Form Modal !</button>
                        <button className="btn btn-warning clearfix" onClick={this.openNestedModal}>Nested Modal !</button>
                        <button className="btn btn-danger clearfix" onClick={this.openOutSideModal}>Non Outside Click Modal !</button>
                    </div>                    
                </div>

                <Modal open={this.state.IsShowMeModalOpen} center showCloseIcon={false} onClose={this.closeShowMeModal} >
                    <label className="clearfix">Hi there !</label>
                    <button className="btn btn-default pull-right" data-msg="you clicked Close me !" onClick={this.closeShowMeModal}>Close me !</button>
                </Modal>

                <Modal open={this.state.IsConfirmationModalOpen} center showCloseIcon={false} onClose={this.closeConfirmationModal} >
                    <label className="clearfix">Confirm your message !</label>
                    <button className="btn btn-default" data-msg="you clicked Cancel !" onClick={this.closeConfirmationModal}>Cancel</button>
                    <button className="btn btn-primary pull-right" data-msg="you clicked Ok !" onClick={this.closeConfirmationModal}>Ok</button>
                </Modal>

                <Modal open={this.state.IsFormModalOpen} center showCloseIcon={false} onClose={this.closeFormModal} >
                    <div className="form-group">
                        <label className="clearfix">Name</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label className="clearfix">Email</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label className="clearfix">Password</label>
                        <input className="form-control" type="password" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-default" data-msg="you clicked Cancel !" onClick={this.closeFormModal}>Cancel</button>
                        <button type="button" className="btn btn-success pull-right" data-msg="you clicked Submit !" onClick={this.closeFormModal}>Submit</button>
                    </div>
                </Modal>

                <Modal open={this.state.IsNestedModalOpen} center showCloseIcon={false} onClose={this.closeNestedModal} >
                    <label className="clearfix">I am parent modal !</label>
                    <button className="btn btn-default" data-msg="you clicked Cancel !" onClick={this.closeNestedModal}>Cancel</button>
                    <button className="btn btn-warning pull-right" onClick={this.openChildModal}>Child Modal !</button> 
                    <Modal open={this.state.IsChildModalOpen} center showCloseIcon={false} onClose={this.closeChildModal} >
                        <label className="clearfix">I am child modal !</label>
                        <button className="btn btn-default" data-msg="you clicked Close parent !" onClick={this.closeNestedModal}>Close parent !</button>
                        <button className="btn btn-warning pull-right" data-msg="you clicked Close child !" onClick={this.closeChildModal}>Close child !</button>
                    </Modal>
                </Modal>

                <Modal open={this.state.IsOutsideModalOpen} center showCloseIcon={false} >
                    <label className="clearfix">Outside click or Escape Key will not close the Modal !</label>
                    <button className="btn btn-danger pull-right" data-msg="you clicked Understood !" onClick={this.closeOutSideModal}>Understood !</button>
                </Modal>
            </div>
        );
    }
}

export default App;
