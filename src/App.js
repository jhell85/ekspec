import React from 'react'
import 'fomantic-ui-css/semantic.css';
import { Container} from 'semantic-ui-react';
import './App.css'

const App = () => {
  return (
    <div className="ui grid middle aligned background" >
      <div className="row">
        <div className="column">
      <Container>
        <div className="ui text container center aligned segment inverted" >
          <h1 className="ui header">
            EK Specialties
          </h1>
          <h2>Property Management & Heavy Equipment 
           maintenance and repair</h2> 
            <h2>for the Portland Oregon area</h2>
          <h3>(406) 998-9555</h3>

        </div>
      </Container>
      </div>
      </div>
    </div>
    )
}

export default App;
