import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Yasser elmansouri elfihri',
        bio: 'A passionate software developer.',
        imgSrc: 'https://avatars.githubusercontent.com/u/172282481?v=4',
        profession: 'Software Engineer'
      },
      shows: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  }

  render() {
    return (
      <div className="container text-center mt-5">
        <button
          className="btn btn-primary mb-3"
          onClick={this.toggleShow}
        >
          {this.state.shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {this.state.shows && (
          <div className="card w-50 mx-auto shadow-sm p-3 mb-5 bg-white rounded">
            <img
              src={this.state.person.imgSrc}
              className="card-img-top rounded-circle mx-auto d-block"
              alt="Profile"
              style={{ width: '150px', height: '150px' }}
            />
            <div className="card-body">
              <h1 className="card-title">{this.state.person.fullName}</h1>
              <p className="card-text">{this.state.person.bio}</p>
              <h2 className="card-subtitle text-muted">{this.state.person.profession}</h2>
            </div>
          </div>
        )}
        <p className="text-muted">
          Component mounted for: {this.state.mountedTime} seconds
        </p>
      </div>
    );
  }
}

export default App;
