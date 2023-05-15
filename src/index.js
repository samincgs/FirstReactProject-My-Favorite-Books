import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { books } from './books';
import Book from './Book';

//Component
const BookList = () => {
  return (
    <>
      <header>
        <h1>My Favorite Books</h1>
      </header>
      <section className='booklist'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} index={index} />;
        })}
      </section>
    </>
  );
};

// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(`handle form input`);
//     console.log(e.target);
//     console.log(e.target.value);
//     console.log(e.target.name);
//   };
//   const handleButtonClick = () => {
//     console.log(`handle click`);
//   };
//   const handleFormSubmission = (e) => {
//     e.preventDefault();
//     console.log(`form submitted`);
//   };

//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type='text'
//           name='example'
//           onChange={handleFormInput}
//           style={{ margin: '1rem 0' }}
//         />
//         <button type='button' onClick={handleButtonClick}>
//           Click me
//         </button>
//         <button type='submit'>Submit</button>
//       </form>
//     </section>
//   );
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
