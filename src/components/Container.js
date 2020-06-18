import React from 'react';
import Api from './util/Api'; 
import './components.css';
import BookContent from './BookContent';


    


export default class ContainBody extends React.Component {
    constructor(props){
    super(props);
    this.state = {
        author: '',
        title: '',
        books: [],
        visible: false
    }
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.callApi = this.callApi.bind(this);
    }

    handleChange1(event){
    this.setState({
        author: event.target.value
    })
    }

    handleChange2(event){
        this.setState({
            title: event.target.value
        })
    }

    handleBorder(){

    }

    callApi(event){
        event.preventDefault();
        Api.search(this.state.author, this.state.title).then(list => {
            if(list[0]){
                this.setState({
                    books: list,
                    visible: true
                })
            }else{
                this.setState({
                    visible: false,
                    books: []
                })
            }
        })
    }


   
    
    render(){
        return(
            <div className="root" >
                <div className="form-container">
                    <form onSubmit={this.callApi} className={this.state.visible ? "form-extra" : "form"} >
                        Author: <input type="text" onChange={this.handleChange1} className='text-input'/>
                        <br></br>
                        <div className="title">
                            Title:  <input type="text" onChange={this.handleChange2} className='text-input'/>
                        </div>
                        <button type="submit" value="Search" onClick={this.callApi} className='button'>Search</button>
                    </form>
                </div>
                <div className="books">
                    <BookContent books={this.state.books}/>
                </div>
            </div>
        )
    }
}

