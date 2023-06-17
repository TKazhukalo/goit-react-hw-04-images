import React, { useEffect, useState } from "react";
import * as API from '../services/api';
import { SearchBar } from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
 
  useEffect(() => {
    if (searchName === '') {
      return;
    }
const addImages = async () => {
  try {
      setIsLoading(true);
        const data = await API.getImages(searchName, currentPage);
        if (data.hits.length === 0) {
          return toast.info(' Нічого не знайдено...🙈', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
        const normalizedImages = API.normalizedImages(data.hits);
        setImages((prevImages) => [...prevImages, ...normalizedImages])
        setIsLoading(false);
        setError('');
        setTotalPages(Math.ceil(data.totalHits / 12));
      }
      catch {
        toast.error('Щось пішло не так 😱!');
      } finally {
        setIsLoading(false);
      }
    }
    addImages();
  },[searchName, currentPage]);

const loadMore = () => {
  setCurrentPage(prevState => prevState + 1);
};
const  handleSubmit = query => {
  setSearchName(query);
  setImages([]); 
  setCurrentPage(1);
    };
    return (
      <div>
        <ToastContainer transition={Slide} />
        <SearchBar onSubmit={handleSubmit} />
        {images.length > 0 ? (
          <ImageGallery images={images} />
        ) : (
          <p
            style={{
              padding: 200,
              textAlign: 'center',
                fontSize: 36,
              color:'#038514',
            }}
          >
            Що знайти 🖼? 
          </p>
        )}
        {isLoading && <Loader />}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={loadMore} /> 
        )}
      </div>
    );
  }



// class App extends Component {
//  state = {
//     searchName: '',
//     images: [], 
//     currentPage: 1,
//     error: null, 
//     isLoading: false, 
//     totalPages: 0, 
//   };
//   componentDidUpdate(_, prevState) {
    
//     if (
//       prevState.searchName !== this.state.searchName ||
//       prevState.currentPage !== this.state.currentPage
//     ) {
//       this.addImages(); 
//     }
//   }


//   loadMore = () => {
//     this.setState(prevState => ({
//       currentPage: prevState.currentPage + 1,
//     }));
//   };

 
//   handleSubmit = query => {
//     this.setState({
//       searchName: query,
//       images: [], 
//       currentPage: 1, 
//     });
//   };


//   addImages = async () => {
//     const { searchName, currentPage } = this.state;
//     try {
//       this.setState({ isLoading: true });
//       const data = await API.getImages(searchName, currentPage);
//       if (data.hits.length === 0) {
//       return toast.info(' Нічого не знайдено...🙈', {
//           position: toast.POSITION.TOP_RIGHT,
//         });
//       }


//   const normalizedImages = API.normalizedImages(data.hits);

//     this.setState(state => ({
//         images: [...state.images, ...normalizedImages], 
//         isLoading: false, 
//         error: '',
//         totalPages: Math.ceil(data.totalHits / 12), 
//       }));
//     } catch (error) {
//       this.setState({ error: 'Щось пішло не так 😱!' }); 
//     } finally {
//       this.setState({ isLoading: false });
//     }
//   };
//  render() {
//     const { images, isLoading, currentPage, totalPages } = this.state;

//     return (
//       <div>
//         <ToastContainer transition={Slide} />
//         <SearchBar onSubmit={this.handleSubmit} />
//         {images.length > 0 ? (
//           <ImageGallery images={images} />
//         ) : (
//           <p
//             style={{
//               padding: 200,
//               textAlign: 'center',
//                 fontSize: 36,
//               color:'#038514',
//             }}
//           >
//             Що знайти 🖼? 
//           </p>
//         )}
//         {isLoading && <Loader />}
//         {images.length > 0 && totalPages !== currentPage && !isLoading && (
//           <Button onClick={this.loadMore} /> 
//         )}
//       </div>
//     );
//   }
// }

// export default App;
