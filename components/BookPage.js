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

    }
}

export default BookPage
