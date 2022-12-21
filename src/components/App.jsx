import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from '../api';

export class App extends Component {
  state = {
    querry: '',
    images: null,
    loading: false,
  };

  seachQuerry = querry => {
    this.setState({ querry });
    console.log(querry);
  };

  async componentDidUpdate(_, prevState) {
    console.log(this.state.images);

    if (prevState.querry !== this.state.querry) {
      try {
        this.setState({ loading: true });
        const images = await fetchImages(this.state.querry);
        console.log(images);
        this.setState({ images: images });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.seachQuerry} />
        {this.state.loading && <div>Loading</div>}
        {this.state.images && <ImageGallery images={this.state.images} />}
        <Button />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    );
  }
}
