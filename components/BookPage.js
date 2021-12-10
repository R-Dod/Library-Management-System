import React, { Component } from "react";

class BookPage extends Component {
    constructor(props) {

        
        super(props);
        const {
            BOOK_ID, 
            TITLE, 
            AUTHORS, 
            CATEGORIES, 
            PUBLISHER_ID,
            DATE_OF_PUBLISH,
            DESCRIPTION,
            COST,
            ISBN
        } = props.location.state
//     this.state = {

//       BOOK_ID : `${bookdetails.BOOK_ID}`,
//       TITLE : `${bookdetails.TITLE}`,
//       AUTHORS: `${bookdetails.AUTHORS}`,
//       CATEGORIES: `${bookdetails.CATEGORIES}`,
//       PUBLISHER_ID: `${bookdetails.PUBLISHER_ID}`,
//       DATE_OF_PUBLISH: `${bookdetails.DATE_OF_PUBLISH}`,
//       DESCRIPTION: `${bookdetails.DESCRIPTION}`,
//       COST: `${bookdetails.COST}`,
//       ISBN: `${bookdetails.ISBN}`      

//     }        
    }
}

export default BookPage
