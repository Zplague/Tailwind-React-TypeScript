import React from 'react';

const FetchRandomUser = () => {

    const [ person, setPerson ] = React.useState(null)
    const url = "http://swapi.dev/api/planets/1/";
    const response =  fetch(url)
    .then(response => response.json().then((user) => person.setState({ person: user })))
    
    return (
        
        <div>
            
        </div>
    );
}

export default FetchRandomUser;
