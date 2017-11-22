import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import './css/bootstrap.min.css';
import './css/semantic.min.css';
import './css/tether.min.css';
import './font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" onClick={goHomePage}>MyMoney</a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" onClick={goHomePage}>Home <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" onClick={goAddPage}>Record An Expense</a>
              <a className="nav-item nav-link" onClick={goTenExpensePage}>Recent 10 Expenses</a>
              <a className="nav-item nav-link" onClick={goSearchPage}>Expenses Search</a>
            </div>
            <div className="btn-group">
              <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-globe" aria-hidden="true" aria-haspopup="true" aria-expanded="false">
                </i>
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" onClick={goHomePage}>English</a>
                <a className="dropdown-item" href="zh-TW/index.html">繁體中文</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="ui container">
          <div className="ui page-header">
            <br />
            <h1 className="text-center">MyMoney</h1><br />
          </div>
          <form className="ui form">
            <div className="field">
              <button className="ui blue massive fluid button" type="button" onClick={goAddPage}>Record An Expense</button>
            </div>
            <div className="field">
              <button className="ui blue massive fluid button" type="button" onClick={goTenExpensePage}>Recent 10 Expenses</button>
            </div>
            <div className="field">
              <button className="ui blue massive fluid button" type="button" onClick={goSearchPage}>Expenses Search</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function goHomePage() {
  const element = (
    <div className="App">
      <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" onClick={goHomePage}>MyMoney</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" onClick={goHomePage}>Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" onClick={goAddPage}>Record An Expense</a>
            <a className="nav-item nav-link" onClick={goTenExpensePage}>Recent 10 Expenses</a>
            <a className="nav-item nav-link" onClick={goSearchPage}>Expenses Search</a>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-globe" aria-hidden="true" aria-haspopup="true" aria-expanded="false">
              </i>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" onClick={goHomePage}>English</a>
              <a className="dropdown-item" href="zh-TW/index.html">繁體中文</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="ui container">
        <div className="ui page-header">
          <br />
          <h1 className="text-center">MyMoney</h1><br />
        </div>
        <form className="ui form">
          <div className="field">
            <button className="ui blue massive fluid button" type="button" onClick={goAddPage}>Record An Expense</button>
          </div>
          <div className="field">
            <button className="ui blue massive fluid button" type="button" onClick={goTenExpensePage}>Recent 10 Expenses</button>
          </div>
          <div className="field">
            <button className="ui blue massive fluid button" type="button" onClick={goSearchPage}>Expenses Search</button>
          </div>
        </form>
      </div>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

function goAddPage() {
  const element = (
    <div className="App">
      <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" onClick={goHomePage}>MyMoney</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" onClick={goHomePage}>Home</a>
            <a className="nav-item nav-link active" onClick={goHomePage}>Record An Expense <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" onClick={goTenExpensePage}>Recent 10 Expenses</a>
            <a className="nav-item nav-link" onClick={goSearchPage}>Expenses Search</a>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-globe" aria-hidden="true" aria-haspopup="true" aria-expanded="false">
              </i>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" onClick={goHomePage}>English</a>
              <a className="dropdown-item" href="zh-TW/index.html">繁體中文</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="ui container">
        <div id="page-header" className="ui page-header">
          <h1 className="text-center">Record An Expense</h1>
          <div id="saving">
          </div>
        </div>
        <form className="ui form">
          <div className="field" id="date-input">
            <label>Date</label>
            <input type="date" id="date" />
          </div>
          <div className="field" id="name-input">
            <label>Item Name</label>
            <input type="text" id="name" placeholder="Pizza" />
          </div>
          <div className="field">
            <label>Category</label>
            <div id="category-select" className="ui selection dropdown" tabIndex="0">
              <div className="default text">Category</div>
              <i className="dropdown icon"></i>
              <input type="hidden" name="category-select" />
              <div className="menu transition hidden" tabIndex="-1">
                <div className="item" data-value="food">Food</div>
                <div className="item" data-value="clothes">Clothing</div>
                <div className="item" data-value="traffic">Transportation</div>
                <div className="item" data-value="entertainment">Entertainment</div>
              </div>
            </div>
          </div>
          <div className="field" id="price-input">
            <label>Price</label>
            <input type="text" id="price" placeholder="200" />
          </div>
          <div className="field">
            <button className="ui blue button" type="button" id="submit">Record!</button>
            <button className="ui button" type="button" onClick={goHomePage}>Back</button>
          </div>
        </form>
      </div>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

function goTenExpensePage() {
  const element = (
    <div className="App">
      <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" onClick={goHomePage}>MyMoney</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" onClick={goHomePage}>Home</a>
            <a className="nav-item nav-link" onClick={goAddPage}>Record An Expense</a>
            <a className="nav-item nav-link active" onClick={goTenExpensePage}>Recent 10 Expenses <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" onClick={goSearchPage}>Expenses Search</a>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-globe" aria-hidden="true" aria-haspopup="true" aria-expanded="false">
              </i>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" onClick={goHomePage}>English</a>
              <a className="dropdown-item" href="zh-TW/index.html">繁體中文</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="ui container">
        <div className="ui page-header">
          <h1 className="text-center">Recent 10 Expenses</h1>
        </div>
        <table className="ui selectable celled table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Item Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <button className="ui button" onClick={goHomePage}>Back</button>
      </div>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

function goSearchPage() {
  const element = (
    <div className="App">
      <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" onClick={goHomePage}>MyMoney</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link" onClick={goHomePage}>Home</a>
            <a className="nav-item nav-link" onClick={goAddPage}>Record An Expense</a>
            <a className="nav-item nav-link" onClick={goTenExpensePage}>Recent 10 Expenses</a>
            <a className="nav-item nav-link active" onClick={goSearchPage}>Expenses Search <span className="sr-only">(current)</span></a>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-globe" aria-hidden="true" aria-haspopup="true" aria-expanded="false">
              </i>
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" onClick={goHomePage}>English</a>
              <a className="dropdown-item" href="zh-TW/index.html">繁體中文</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="ui container">
        <div className="ui page-header">
          <h1 className="text-center">Expenses Search</h1>
        </div>
        <form className="ui form">
          <input type="radio" name="mode" value="thisMonth" /> This Month
          <br />
          <input type="radio" name="mode" value="period" /> Specified Period
          <br />From
          <input id="from" className="input-field" type="date" />To<input id="to" className="input-field" type="date" />
          <br /><br />
          <button className="ui blue button" type="button" id="submit">Search</button>
          <button className="ui button" type="button" onClick={goHomePage}>Back</button>
        </form>



        <table id="expenses" className="ui table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

export default App;
