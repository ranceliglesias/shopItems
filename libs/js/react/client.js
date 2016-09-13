var ClientApp = React.createClass({
    getInitialState: function() {
        return {
            products: [{id:'', name:'', description:'', price:'', category_name:''}]
        };
    },

    // on mount, fetch all products and stored them as this component's state
    componentWillMount: function() {
        this.serverRequest = $.get("api/read_all_products.php", function (products) {
            this.setState({
                products: JSON.parse(products)
            })
        }.bind(this));
    },

    // on unmount, kill product fetching in case the request is still pending
    componentWillUnmount: function() {
        this.serverRequest.abort();
    },
    render: function() {
        const results = this.state.products;
        return (
            <div className="container">
            <table className='table table-bordered table-hover'>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Categoria</th>
                    </tr>
                {results.map(function(result){
                    return (
                                <tr key={result.id}>
                                    <td>{result.name}</td>
                                    <td>{result.description}</td>
                                    <td>{parseFloat(result.price).toFixed(2)}</td>
                                    <td>{result.category_name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
});

ReactDOM.render(<ClientApp/>, document.getElementById('client'));
