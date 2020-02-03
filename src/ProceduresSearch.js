import React from 'react';

class ProceduresSearch extends React.Component {

  // fake database / api results
  state = {
    procedures: [
      {
        name: 'Extraction',
        description: 'Yank out that bad boy! Who needs it',
        cost: 1000
      },
      {
        name: 'Root Canal',
        description: 'Long, painful, intense. For lovers of extreme dentistry only.',
        cost: 10000
      },
      {
        name: 'Jaw Extraction',
        description: 'Lose that heavy baggage! Fluids only from now on!',
        cost: -1000
      },
      {
        name: 'Wallet Extraction',
        description: 'I am taking it all',
        cost: Infinity
      },

    ]
  }

  render() {

    const searchTerm = this.props.match.params.query.toLowerCase();

    const results = this.state.procedures.filter( proc => {
      // items from the array for which this function returns true will be included in the output array
      return proc.name.toLowerCase().includes( searchTerm );
    })



    console.log('results:', results );


    return (
      <div>
        <h2>Procedures Results for "{this.props.match.params.query}"</h2>

        <ul>
        {
          results.map( r => (
            <li key={r.name}>
              {r.name} - ${r.cost}
            </li>
          ))
        }
        </ul>
      </div>
    )
  } // render

} // end of Procedures

export default ProceduresSearch
