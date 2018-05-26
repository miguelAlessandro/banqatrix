import React from 'react'

export default class Bank extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Amigos Ahorradores</p>
                <p>Periodo 5/8</p>
                <p>Integrantes</p>
                <ul>Jean Pierre Mandujano</ul>
                <ul>Renzo Mogrovejo</ul>
                <ul>Miguel Miní</ul>
                <ul>José Huallpa</ul>
            </div>
        );
    }
}


class BankForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            periodicity: null,
            fee: null,
            members: null
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.setState({
            name: event.target.name,
            periodicity: event.target.periodicity,
            fee: event.target.fee,
            members: event.target.members
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nombre:
                    <input type="text" value={this.state.name} />
                </label>
                <label>
                    Periodicidad:
                    <input type="text" value={this.state.periodicity} />
                </label>
                <label>
                    Cuota:
                    <input type="number" value={this.state.fee} />
                </label>
                <label>
                    Integrantes:
                    <input type="text" value={this.state.members} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
