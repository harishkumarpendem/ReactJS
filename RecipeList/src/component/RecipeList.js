import React, {Fragment} from 'react';
import Axios from 'axios';

class RecipeList extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            recipe : [],
            errorMessage : ''
        }
    }

    componentDidMount() {
        Axios.get(
          'https://beta.eagleowl.in/api/v1/mock/organization/18/outlet/18/recipe/recipes/'
        )
          .then((response) => {
            this.setState({
              recipe: response.data.results,
            });
          })
          .catch((err) => {
            console.error(err);
            this.setState({
              errorMessage: err.message,
            });
          });
    }


    render() {
        return (
          <div>
            <table
              className='table table-hover table-striped table-secondary text-center mt-3'
              border='1'>
              <thead className='bg-warning text-black'>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Last-updated and Name</th>
                  <th>Created-Date</th>
                  <th>Cogs</th>
                  <th>Cost-Price</th>
                  <th>Sale-price</th>
                  <th>Gross-margin</th>
                  <th>Manufacturing-outlet</th>
                </tr>
              </thead>
              <tbody>
                {this.state.recipe.length > 0 && (
                  <Fragment>
                    {this.state.recipe.map((recipe) => {
                      return (
                        <tr>
                          <td>{recipe.id}</td>
                          <td>{recipe.name}</td>
                          <div>
                            <td>{recipe.last_updated.date}</td>
                            <td>{recipe.last_updated.name}</td>
                          </div>
                          <td>{recipe.created.date}</td>
                          <td>{recipe.cogs}</td>
                          <td>{recipe.cost_price}</td>
                          <td>{recipe.sale_price}</td>
                          <td>{recipe.gross_margin}</td>
                          <td>{recipe.manufacturing_outlet}</td>
                        </tr>
                      );
                    })}
                  </Fragment>
                )}
              </tbody>
            </table>
          </div>
        );
    }
}

export default RecipeList;