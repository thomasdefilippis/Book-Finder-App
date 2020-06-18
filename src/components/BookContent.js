import React from 'react';
import { Grid } from '@material-ui/core';
import BookCard from './BookCard';



export default function BookContent(props) {
    let list;
    const createCard = (book) => {
        return(
                <Grid item key={book.id}>
                    <br></br>
                       <BookCard book={book} />
                    <br></br>
                </Grid>
        )
        
    }

    if(props.books[0] !== undefined){
        list = props.books.map(book => {
            return createCard(book)
        }

        )
    }else{
         list = <div></div>
    }
    return(
        <div>
            {list}
        </div>
    )
}

