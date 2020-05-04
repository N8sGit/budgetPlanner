import React from 'react';
import { connect } from 'react-redux';

import Slider from '../components/Slider';
import Logout from '../components/Logout';
import { logout } from '../redux';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: '',
            expense: 0,
            savings: 0,
            election: 0,
        }
    }

    handleChange = (key, value) => {
        this.setState({ [key]: value })
    }

    handleElection = (e, v) => {
        this.calculate(v)
        this.setState({ election: v })
    }

    calculate = (newElection = this.state.election, input) => {
        const { salary, election } = this.state;
        const computeValue = input ? input : salary;
        const newExpense = Math.floor((computeValue / 12) * (election / 100))
        const newSavings = Math.floor((computeValue / 12) * (1 - (election / 100)))
        this.setState({ expense: newExpense, savings: newSavings, election: newElection })
    }

    render() {
        const { salary, expense, savings, election } = this.state;
        const { firstname, logout } = this.props;
        return (
            <div>
                <p>Welcome, {firstname}!</p>
                <div>
                    <Slider election={election} handleElection={this.handleElection} />
                </div>
                <div id='input-fields-container'>
                    <p className='field-label'>Salary: $</p>
                    <input type='number' onChange={(e) => {
                        this.setState({ salary: e.target.value })
                        this.calculate(election, e.target.value)
                    }} value={salary} />
                    <p className='field-label'>Expense:</p>
                    <p> ${expense}.00</p>
                    <p className='field-label'>Savings:</p>
                    <p>${savings}.00</p>
                </div>
                <Logout logOut={logout} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    firstname: state.firstname,
});

const mapDispatchToProps = {
    logout,
};


export default connect(mapStateToProps, mapDispatchToProps)(Main);

