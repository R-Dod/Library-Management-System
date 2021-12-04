
import { NextPage } from "next";
import Router,{ useRouter } from 'next/router';
import Popup from '../../components/Popup' ;
import { useState } from "react";
import Image from 'next/image'

const BookPage: NextPage<any, any> = function () {

  const router = useRouter();

  const [buttonPopup, setButtonPopup] = useState(false);

  console.log(router.query);
  // Get ID from router.query and fetch data for that id
  // replace it by returned data from API
  const data = {
    id:100,
    src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
    bookName: 'Hamlet',
    author: 'ShakesPeare',
    publisher: 'Simon & Schuster',
    date_of_publish:'02-DEC-99',
    description: 'Best Selling drama book',
    category: 'Drama',
    cost: 2500,
    ISBN: '0-1210-2219-6',
    copies:5
  };

  

  return (
      <>
      {/* src={data.src} */}
          
          <h1> {data.bookName} </h1>
          <Image
              priority
              src={`/images/${data.id}.jpg`}
              height={144}
              width={144}
              alt={`${data.id}`}
            />
          <h3> Author: {data.author} </h3>
          <h4>Category: {data.category}</h4>
          <h5> 
             Publisher: {data.publisher} <br/> 
            Published on: {data.date_of_publish}<br/>
            <br/> 
            Description: {data.description}<br/>
            <br/>
            Original Cost: {data.cost}<br/>
            ISBN: {data.ISBN}<br/>
          </h5>
          <button className="button" onClick={()=> setButtonPopup(true)}>Issue</button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3> Book Issued! </h3>  
            { (data.copies>0) ?
            <p>
              Please collect the book from us at the earliest.
              The due date for returning the book is "within 2 weeks" !
            </p>
            :
              <p>
                No copies of the book available. Please check again later.
            </p>
            
          }
          </Popup>
      </>
  );

};

export default BookPage;