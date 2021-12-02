import { NextPage } from "next";
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from "next";
//import { Book } from "@material-ui/icons";


const BookPage: NextPage<any, any> = function ({ book }) {
    const router = useRouter();

    return (
        <div>
            <h2>
                {book.id} {book.title} | {book.author_id}
            </h2>
            <h3>{book.pages} Pages  {book.releaseDate}</h3>
            <p>{book.isbn}</p>
        </div>
    )
//   console.log(router.query);
//   // Get ID from router.query and fetch data for that id
//   // replace it by returned data from API
//   const data = {
//     id:1,
//     src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
//     bookName: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
//     channel: 'Don Diablo',
//     views: '396 k views',
//     createdAt: 'a week ago',
//     publisher: 'AA production',
//     author: 'A'
//   };

  

//   return (
//       <>
//           <h1> {data.bookName} </h1>
//           <h2> {data.publisher} </h2>
//           <h3> {data.author} </h3>
//       </>
//   );
};

export default BookPage

export const getStaticProps: GetStaticProps = async (context) =>{
    const { params } = context
    const response = await fetch(`https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/${params.bookid}`)
    const data = await response.json()
    return {
        props: {
            book: data
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () =>{
    const response = await fetch(`https://my-json-server.typicode.com/dmitrijt9/book-api-mock/books/`)
    const data = await response.json()

    const paths = data.map((book) => {
        return {
            params: {
                bookid : `${book.id}`,
            }
        }
    })

    return {
    paths,
    fallback: false
}
}