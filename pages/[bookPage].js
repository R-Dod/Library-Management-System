export default function bookPage(props){
    const data = [
        {
          id:1,
          src: 'https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ',
          bookName: 'Don Diablo @ Tomorrowland Main Stage 2019 | Official…',
          channel: 'Don Diablo',
          views: '396 k views',
          createdAt: 'a week ago',
          publisher: 'AA production',
          author: 'A'
        },
        {
            id:2,
          src: 'https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA',
          bookName: 'Queen - Greatest Hits',
          channel: 'Queen Official',
          views: '40 M views',
          createdAt: '3 years ago',
          publisher: 'BB production',
          author: 'B'
        },
        {
            id:3,
          src: 'https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw',
          bookName: 'Calvin Harris, Sam Smith - Promises (Official Video)',
          channel: 'Calvin Harris',
          views: '130 M views',
          createdAt: '10 months ago',
          publisher: 'CC production',
          author: 'C'
        },
      ];
    return (
        <>
            <h1> {props.bookName} </h1>
            <h2> {props.publisher} </h2>
            <h3> {props.author} </h3>
        </>
    );
};