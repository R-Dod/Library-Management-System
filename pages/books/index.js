import Link from 'next/link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function BookList({ books }) {  

    return (
        <>
 <h1>List of Books</h1>
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                    <TableHead>
                        <button>Add</button>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Author(s)</TableCell>
                        <TableCell>Category(s)</TableCell>
                        <TableCell>Publisher</TableCell>
                        <TableCell>Cost</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {books.map((book) => (
                            <TableRow key={book.id}>
                                <Link href = {`books/${book.id}`}><a>
                                    <TableCell component="th" scope="row">{book.id}</TableCell>
                                    <TableCell >{book.title}</TableCell>
                                    <TableCell >{book.Author}</TableCell>
                                    <TableCell >{book.Category}</TableCell>
                                    <TableCell >{book.publisher}</TableCell>
                                    <TableCell >{book.cost}</TableCell>
                                    </a>
                                    </Link>
                                    <TableCell><Link href = "#">Delete</Link></TableCell>
                                    </TableRow>
                                    ))}
                                    </TableBody>
                                    </Table>
                                    </TableContainer>
    </>    
    )
}



export default BookList

export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/books')
    const data = await response.json()

    return {
        props: {
            books:data
        },
    }
}

