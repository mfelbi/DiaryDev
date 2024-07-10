import React from 'react';

const Components = () => {
  return (
    <div className="container mt-5">
      <h1>Browse Components</h1>
      <p>Here you can find a variety of UI components that you can use in your projects.</p>
      <div className="row">
        
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Button Component</h5>
              <p className="card-text">A simple and elegant button component.</p>
              <button className="btn btn-primary">Primary Button</button>
              <button className="btn btn-secondary mt-2">Secondary Button</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Card Component</h5>
              <p className="card-text">A responsive and customizable card component.</p>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Card Title</h5>
                  <p className="card-text">This is an example of a card component.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Form Component</h5>
              <p className="card-text">A simple and elegant form component.</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Components;
