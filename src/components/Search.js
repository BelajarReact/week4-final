import React from 'react';
// import '../Search.css';
import axios from 'axios';
import Loader from './loader.svg';
import Pixabay from './pixabay.svg';
import PageNavigation from './PageNavigation';

class Search extends React.Component {

    constructor( props ) {
        super( props );

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: '',
            totalResults: 0,
            totalPages: 0,
            currentPageNo: 0,
        };

        this.cancel = '';
    }


    /**
     * Get the Total Pages count.
     *
     * @param total
     * @param denominator Count of results per page
     * @return {number}
     */
    getPageCount = ( total, denominator ) => {
        const divisible	= 0 === total % denominator;
        const valueToBeAdded = divisible ? 0 : 1;
        return Math.floor( total/denominator ) + valueToBeAdded;
    };

    /**
     * Fetch the search results and update the state with the result.
     * Also cancels the previous query before making the new one.
     *
     * @param {int} updatedPageNo Updated Page No.
     * @param {String} query Search Query.
     *
     */
    ambilDataPixabay = ( updatedPageNo = '', query ) => {
        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        const searchUrl = `https://pixabay.com/api/?key=446579-0544d1523568f48bffb749e2d&q=${query}${pageNumber}`;

        if( this.cancel ) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.get( searchUrl, {
            cancelToken: this.cancel.token
        } )
            .then( res => {
                const total = res.data.total;
                const totalPagesCount = this.getPageCount( total, 20 );
                const resultNotFoundMsg = ! res.data.hits.length
                    ? 'Gambar tidak ditemukan, silahkan gunakan kata kunci lainya'
                    : '';
                this.setState( {
                    results: res.data.hits,
                    message: resultNotFoundMsg,
                    totalResults: total,
                    totalPages: totalPagesCount,
                    currentPageNo: updatedPageNo,
                    loading: false
                } )
            } )
            .catch( error => {
                if ( axios.isCancel(error) || error ) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch the data. Please check network'
                    })
                }
            } )
    };

    handleInputPencarian = ( event ) => {
        const query = event.target.value;
        if ( ! query ) {
            this.setState( { query, results: {}, message: '', totalPages: 0, totalResults: 0 } );
        } else {
            this.setState( { query, loading: true, message: '' }, () => {
                this.ambilDataPixabay( 1, query );
            } );
        }
    };


    handlePageClick = ( type ) => {
        // event.preventDefault();
        const updatePageNo = 'prev' === type
            ? this.state.currentPageNo - 1
            : this.state.currentPageNo + 1;

        if( ! this.state.loading  ) {
            this.setState( { loading: true, message: '' }, () => {
                this.ambilDataPixabay( updatePageNo, this.state.query );
            } );
        }
    };

    renderSearchResults = () => {
        const { results } = this.state;

        if ( Object.keys( results ).length && results.length ) {
            return (
                <div className="row result-images row-no-gap">
                    { results.map( result => {
                        return (
                            <div className="col-6 kolom" key={ result.id }>
                            <a  href={ result.previewURL }  target="_blank" className="result-item" style={{backgroundImage:`url(${result.webformatURL})`,display:"block"}}>
                                <span className="image-username image-author"><i className="fa fa-user-circle-o"  aria-hidden="true"></i>  {result.user}</span>



                            </a>
                            </div>
                        )
                    } ) }

                </div>
            )
        }
    };

    componentDidMount() {

    }

    componentWillUnmount() {

        this.setState({
            results:[]
        })
    }

    render() {
        const { query, loading, message, currentPageNo, totalPages } = this.state;

        const showPrevLink = 1 < currentPageNo;
        const showNextLink = totalPages > currentPageNo;

        return (
            <div className="container">
                {/*	Heading*/}
                <h2 className="heading">Pencarian Gambar dari Pixabay</h2>
                {/* Search Input*/}
                <label className="search-label" htmlFor="search-input" style={{display:"block"}}>
                    <input
                        type="text"
                        name="query"
                        value={ query }
                        id="search-input"
                        aria-label="search-input"
                        className="form-control"
                        placeholder="Search..."
                        onChange={this.handleInputPencarian}
                    />

                </label>

                {/*	Error Message*/}
                {message && <p className="message">{ message }</p>}

                {/*	Loader*/}
                <img src={ Loader } className={`search-loading ${ loading ? 'show' : 'hide' }`} alt="loader"/>

                {/*Navigation*/}
                <PageNavigation
                    loading={loading}
                    showPrevLink={showPrevLink}
                    showNextLink={showNextLink}
                    handlePrevClick={ () => this.handlePageClick('prev')}
                    handleNextClick={ () => this.handlePageClick('next')}
                />

                {/*	Result*/}
                { this.renderSearchResults() }

                {/*Navigation*/}
                <PageNavigation
                    loading={loading}
                    showPrevLink={showPrevLink}
                    hasQuery={ query === '' }
                    showNextLink={showNextLink}
                    handlePrevClick={ () => this.handlePageClick('prev' )}
                    handleNextClick={ () => this.handlePageClick('next' )}
                />

                <div  className={query ===''?'hide':'show'} style={{textAlign:"center",margin:"20px auto"}}>
                    <img src={Pixabay} height="30"  alt="" />
                </div>

            </div>
        )
    }
}

export default Search