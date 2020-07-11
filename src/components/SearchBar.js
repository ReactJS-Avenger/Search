import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className="ui segment">
                <div className="ui form">
                    <div className="field">
                        <form onSubmit={this.onFormSubmit}>
                            <label>User Input</label>
                            <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchBar;