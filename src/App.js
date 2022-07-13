import React from 'react';
import axios from 'axios';
import logo from "./assets/img/logo.svg";
import "./assets/css/app.css";

export default class App extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
        .catch(error => console.log(error));
    }
  
    render() {
      return (
        <div className="c-app">
            <header className="c-header js-header">
                <img src={logo} className="c-header__logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    Demo get data API link:
                </p>
                <a
                    className="c-header__link"
                    href="https://jsonplaceholder.typicode.com/users"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    here
                </a>
            </header>
            <main className="c-main">
                <table className="c-main__table">
                    <thead>
                        <tr className="c-main__table--tr">
                            <th className="c-main__table--th">Name</th>
                            <th className="c-main__table--th">Email</th>
                            <th className="c-main__table--th">Address</th>
                            <th className="c-main__table--th">Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.persons.map(person => 
                            <tr className="c-main__table--tr" key={person.key}>
                                <td className="c-main__table--td" key={person.username}>{person.name}</td>
                                <td className="c-main__table--td" key={person.email}>{person.email}</td>
                                <td className="c-main__table--td" key={person.address.zipcode}>{person.address.street}, {person.address.city}</td>
                                <td className="c-main__table--td" key={person.name}>{person.company.name}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </main>
            <footer className="c-footer">
                <p>Registration number 12067241.</p>
                <p>
                    <a
                        className="c-header__link"
                        href="https://xenia.tech/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Xenia Tech Co LTD. 
                    </a> <span>Copyright © 2022. All Rights Reserved</span>
                </p>
            </footer>
        </div>
      )
    }
}