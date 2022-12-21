import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from '../../GlobalStyles';
import { SearchBar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Button } from '../Button/Button';
import { fetchImages } from '../../api';
import { AppWrap } from './App.styled';

export class App extends Component {
  state = {
    querry: '',
    images: [],
    loading: false,
    page: 1,
    total: 0,
  };

  handleSubmit = querry => {
    this.setState({ querry, page: 1, total: 0, loading: true, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.querry !== this.state.querry ||
      prevState.page !== this.state.page
    ) {
      try {
        const data = await fetchImages(this.state.querry, this.state.page);
        this.setState({
          images: [...this.state.images, ...data.hits],
          total: data.totalHits,
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  render() {
    return (
      <AppWrap>
        <SearchBar onSubmit={this.handleSubmit} />
        {this.state.loading && <div>Loading</div>}
        {this.state.images && <ImageGallery images={this.state.images} />}
        {this.state.total > 12 && <Button onLoadMore={this.loadMore} />}

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
        <GlobalStyle />
      </AppWrap>
    );
  }
}
