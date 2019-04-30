# react-modal-popup #
<a target="_blank" href="LICENSE.md"><img src="https://img.shields.io/badge/licence-MIT-brightgreen.svg" alt="license : MIT"></a>
<a target="_blank" href="https://www.cmarix.com/react-js-web-development-company.html"><img src="https://img.shields.io/badge/framework-react-blue.svg" alt="framework : react"></a>
<a target="_blank" href="https://www.npmjs.com/package/react-responsive-modal"><img src="https://img.shields.io/badge/npm-modal-orange.svg" alt="npm: modal"></a>

A responsive and simple react modals which will be compatible with all latest react versions and other more features. Read documentation on <a target="_blank" href="https://react-responsive-modal.leopradel.com/">react responsive modal</a>

## Installation ##

    npm install react-responsive-modal --save

## Simple modal ##
	import React, { Component } from 'react';
	import Modal from 'react-responsive-modal';

	class App extends Component extends React.Component {

	    constructor() {
	        super();
	        this.state = {
	            IsShowMeModalOpen: false,            
	        }
	    }

	    openShowMeModal = () => {
	        this.setState({ IsShowMeModalOpen: true });
	    }
	
	    closeShowMeModal = (e) => {
	        this.setState({ IsShowMeModalOpen: false });
	    }
	
	    render() {
	        return (
	            <div className="App">
	                <div className="row">
	                    <div className="col-sm-3">
	                        <button className="btn btn-default clearfix" onClick={this.openShowMeModal}>Show Me !</button>
	                    </div>                    
	                </div>
	
	                <Modal open={this.state.IsShowMeModalOpen} center showCloseIcon={false} onClose={this.closeShowMeModal} >
	                    <label className="clearfix">Hi there !</label>
	                    <button className="btn btn-default pull-right" onClick={this.closeShowMeModal}>Close me !</button>
	                </Modal>
	            </div>
	        );
	    }
	}

	ReactDOM.render(<App />, document.getElementById('app'));

## Confirmation modal ##
	import React, { Component } from 'react';
	import Modal from 'react-responsive-modal';

	class App extends Component extends React.Component {

	    constructor() {
	        super();
	        this.state = {
	            IsConfirmationModalOpen: false
	        }
	    }
	        
	    openConfirmationModal = () => {
	        this.setState({ IsConfirmationModalOpen: true });
	    }
	
	    closeConfirmationModal = (e) => {
	        if (e.target.dataset.msg !== undefined)
	            alert(e.target.dataset.msg);
	        this.setState({ IsConfirmationModalOpen: false });
	    }
	
	    render() {
	        return (
	            <div className="App">
	                <div className="row">
	                    <div className="col-sm-3">
	                        <button className="btn btn-primary clearfix" onClick={this.openConfirmationModal}>Show Confirmation !</button>
	                    </div>                    
	                </div>
	
	                <Modal open={this.state.IsConfirmationModalOpen} center showCloseIcon={false} onClose={this.closeConfirmationModal} >
	                    <label className="clearfix">Confirm your message !</label>
	                    <button className="btn btn-default" data-msg="you clicked Cancel !" onClick={this.closeConfirmationModal}>Cancel</button>
	                    <button className="btn btn-primary pull-right" data-msg="you clicked Ok !" onClick={this.closeConfirmationModal}>Ok</button>
	                </Modal>
	            </div>
	        );
	    }
	}
	
	ReactDOM.render(<App />, document.getElementById('app'));



## Let us know! ##
We’d be really happy if you sent us links of your projects where you use our component.  For this simple endeavor you can email us to [biz@cmarix.com](mailto:biz@cmarix.com "biz@cmarix.com") and on the same email do share your queries, questions or suggestions you have regarding react.

P.S. We’re going to publish more awesome examples on third party libraries, coding standards, plugins and more  for all technologies. Stay tuned!

**Stay Socially Connected**

Get more familiar with our work by visiting few of our portfolio links.

[Portfolio](https://www.cmarix.com/portfolio.html) | [Facebook](https://www.facebook.com/CMARIXTechnoLabs/) | [Twitter](https://twitter.com/CMARIXTechLabs) | [Linkedin](https://www.linkedin.com/company/cmarix-technolabs-pvt-ltd-) | [Behance](https://www.behance.net/CMARIXTechnoLabs/) | [Instagram](https://instagram.com/cmarixtechnolabs/) | [Dribbble](https://dribbble.com/CMARIXTechnoLabs) | [Uplabs](https://www.uplabs.com/cmarixtechnolabs)

Please don’t forget to follow them.

## License ##

	MIT License
	
	Copyright © 2019 CMARIX TechnoLabs
	
	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:
	
	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.
	
	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

