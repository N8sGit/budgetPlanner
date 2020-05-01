import React from 'react';

import Slider from '../components/Slider';
import Logout from '../components/Logout';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            salary: null,
            expense: 0,
            savings: 0,
            election: 0,
        }
    }

    componentWillUpdate() {
        console.log('hello')
        console.log(this.state.election, 'election')
    }

    handleChange = (key, value) => {
        this.setState({ [key]: value })
    }

    handleElection = (e) => {
        this.calculate(e.target.ariaValueNow)
        this.setState({ election: Number(e.target.ariaValueNow) })
    }

    calculate = (newElection = this.state.election) => {
        const { salary, election } = this.state;
        const newExpense = ((salary / 12) * election / 100).toFixed(2)
        const newSavings = ((salary / 12) * (1 - (election / 100))).toFixed(2)
        console.log(this.state, 'state')
        console.log(newExpense, newSavings, 'hanns')
        this.setState({ expense: newExpense, savings: newSavings, election: newElection })
    }

    render() {
        const { salary, expense, savings, election } = this.state;
        const { firstname } = this.props;
        console.log(this.state, 'state');
        return (
            <div>
                <p>Welcome {firstname}</p>
                <div>
                    <Slider election={election} handleElection={this.handleElection} />
                </div>
                <div id='input-fields-container'>
                    <p className='field-title'>Salary</p>
                    <input type='number' onChange={(e) => {
                        this.setState({ salary: e.target.value })
                        this.calculate()
                    }} value={salary} />
                    <p className='field-title'>Expense</p>
                    <p> {expense} </p>
                    <p className='field-title'>Savings</p>
                    <p>{savings}</p>
                </div>
                <Logout logOut={this.props.setLogout} />
            </div>
        )
    }
}



