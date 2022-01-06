import './App.css';
import Header from './components/Header';
import Book from './components/Book';
import Footer from './components/Footer';

const book1 = {
  title: 'The Power of Now',
  description: 'Lorem ipsum dolor sit amet, cu qui labitur epicuri signiferumque, et mea rebum sonet affert. Amet brute solet nam eu, nec no odio habemus percipit. Ne nec ceteros epicuri, ut duo illum gloriatur. Menandri consulatu mea et, vis an fugit sadipscing comprehensam. Mea elit affert oportere ex.',
  image:'https://images-na.ssl-images-amazon.com/images/I/41FNCXDjE+L._SY344_BO1,204,203,200_.jpg'
};
const book2 = {
  title: 'The Alchemist',
  description: 'Lorem ipsum dolor sit amet, cu qui labitur epicuri signiferumque, et mea rebum sonet affert. Amet brute solet nam eu, nec no odio habemus percipit. Ne nec ceteros epicuri, ut duo illum gloriatur. Menandri consulatu mea et, vis an fugit sadipscing comprehensam. Mea elit affert oportere ex.',
  image:'https://images-na.ssl-images-amazon.com/images/I/51kcX5PpaZL._SX329_BO1,204,203,200_.jpg'
};

function App() {
  return (
    <div className="App">
      <Header logo='Book App'/>
      <div className='content'>
        <Book title={book1.title} image={book1.image} description={book1.description}/>
        <Book title={book2.title} image={book2.image} description={book2.description}/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
