import Link from 'next/link'

function BookList({ books }) {
    return (
        <>
        <h1>List of Books</h1>
        {books.map( book => {
            return (
                <div key={book.id}>
                    <Link href = {`books/${book.id}`}>
                    <h2>
                        {book.id} {book.title} {book.isbn}
                    </h2>
                    </Link>
                    <hr />
                </div>
            )
        })}
    </>
    )
}

export default BookList

export async function getStaticProps() {
    const response = await fetch('https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books')
    const data = await response.json()

    return {
        props: {
            books:data
        },
    }
}

