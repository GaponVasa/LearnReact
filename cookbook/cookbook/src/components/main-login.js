import React, { Component } from 'react';

class MainLogin extends Component {

  render() {
		const linkDummy = '#';
		//const{logoLink, signUpOutText, signUpOut} = this.props;
    return (
			<main className="container-fluid">
				<div className="row d-flex justify-content-center m-3">
					<div className="col-12 border border-primary rounded">
							<form action={linkDummy} name="login" id="login" className="row p-3">
									<div className="col-10 row form-group mt-3">
											<div className="col">
													<p className="font-weight-bold float-right">Username.</p>
											</div>
											<div className="col clear-padding-left">
													<input type="text" name="username" className="form-control" maxLength="20" placeholder="Enter user name. Maximum 20 letters."/>
											</div>
									</div>
									<div className="col-10 row form-group">
											<div className="col">
													<p className="font-weight-bold float-right">Password.</p>
											</div>
											<div className="col clear-padding-left">
													<input type="password" name="password" className="form-control" placeholder="Password"/>
											</div>
									</div>
									<div className="col-10 row form-group text-right">
											<div className="col">

											</div>
											<div className="col text-left mt-5">
													<div className="row">
															<input type="button" name="btn-sign-in" id="btn" className="btn btn-outline-primary" value="Sign in"/>
															<label className="d-flex align-items-center form-check-label ml-3">
																	<input type="checkbox" name="remember-me" value="remember-me" className="form-check-input"/>Remember me
															</label>
													</div>
											</div>
									</div>
							</form>
					</div>
				</div>
			</main>
    );
  }
}

export default MainLogin;