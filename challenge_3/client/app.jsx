class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      page: 0
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(pageNum) {
    this.setState({
      page: pageNum
    })
  }

  render() {
    let currentPage = this.state.page;
    let showPage;
    
    if (currentPage === 0) {
      showPage = <div><button onClick={ () => {this.changePage(1)} }>Checkout</button></div>
    } else if (currentPage === 1) {
      showPage = <FormOne changePage={this.changePage} />
    } else if (currentPage === 2) {
      showPage = <FormTwo changePage={this.changePage} />
    } else if (currentPage === 3) {
      showPage = <FormThree changePage={this.changePage} />
    } else if (currentPage === 4) {
      showPage = <Confirmation changePage={this.changePage} />
    }

    return (
      showPage
    )
  }
}


class FormOne extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      password: ''
    }

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.postToDB = this.postToDB.bind(this);
  }

  handleChange (e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  postToDB() {
    axios.post('/test', this.state)
    .then(function (response) {
      console.log(response);
      console.log(typeof response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // axios.get('/test')
    // .then(function (response) {
    //   console.log('response', response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }

  handleSubmit () {
    this.props.changePage(2);
    console.log('posting...')
    this.postToDB();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label> Name
            <input name="name" value={this.state.name} onChange={this.handleChange} />
          </label>
        </div>  
        <div>
          <label> Email
            <input name="email" value={this.state.email} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label> Password
            <input name="password" value={this.state.password} onChange={this.handleChange} />
          </label>
        </div>  
        <button>Next</button>
      </form>
    )
  }
}


class FormTwo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  // handleSubmit (e) {
  //   this.props.changePage(2);
  // }

  render() {
    return (
      <form onSubmit={ () => {this.props.changePage(3)} }>
        <label> Address Line 1
          <input name="address1" value={this.state.address1} onChange={this.handleChange} />
        </label>
        <label> Address Line 2
          <input name="address2" value={this.state.address2} onChange={this.handleChange} />
        </label>
        <label> City
          <input name="city" value={this.state.city} onChange={this.handleChange} />
        </label>
        <label> State
          <input name="state" value={this.state.state} onChange={this.handleChange} />
        </label>
        <label> Zip Code
          <input name="zipcode" value={this.state.zipcode} onChange={this.handleChange} />
        </label>
        <label> Phone
          <input name="phone" value={this.state.phone} onChange={this.handleChange} />
        </label>
        <button>Next</button>
      </form>
    )
  }
}


class FormThree extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      creditcardnumber: '',
      cvv: '',
      zipcode: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  // handleSubmit () {
  //   e.preventDefault();
  // }

  render() {
    return (
      <form onSubmit={ () => {this.props.changePage(4)} }>
        <label> Credit Card Number
          <input name="creditcardnumber" value={this.state.creditcardnumber} onChange={this.handleChange} />
        </label>
        <label> Expiry Date
          <input name="expirydate" value={this.state.expirydate} onChange={this.handleChange} />
        </label>
        <label> CVV
          <input name="cvv" value={this.state.cvv} onChange={this.handleChange} />
        </label>
        <button>Next</button>
      </form>
    )
  }
}


class Confirmation extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div> 
        <h1>Confirmation Page</h1>
        <button onClick={ () => {this.props.changePage(0)} }>Purchase</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))