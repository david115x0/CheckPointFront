
import { Component } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Banner from './components/Banner';
import Cards from './components/Cards';
import Description from './components/description';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <>
        <main>
        <Header />
        <Banner />
        <Description />
        <Cards />
        <Footer />
        </main>
      </>
    )
  }
}


