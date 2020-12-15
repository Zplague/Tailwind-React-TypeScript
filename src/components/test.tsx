import React from "react";

export default class FetchRandomUser extends React.Component {
  state =  {
    loading: true,
    person: [],
  };

  componentDidMount() {
    const url = "http://swapi.dev/api/planets/1/";
    const response =  fetch(url)
    .then(response => response.json().then((user) => this.setState({ person: user })))
    //this.setState({ person: data.results[0], loading: false });
  }

  render() {
   // data from the response.
    console.log(this.state.person)

    if (this.state.loading) {
      return <div>planets</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a planet</div>;
    }

    return (
      <div>
        <div>{this.state.person.name.title}</div>
        <div>{this.state.person.name.first}</div>
        <div>{this.state.person.name.last}</div>
        <img src={this.state.person.picture.large} />
      </div>
    );
  }
}