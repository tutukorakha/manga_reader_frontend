import logo from './logo.svg';
import './App.css';
import styles from './App.css';
import { Component } from 'react';
import Navbar from "./components/navbar/navbar";
import Content from './module/content/content';
import Carousel from './components/carousel/carousel';

export default class App extends Component {
  render() {
    return(
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <Carousel />
        </div>
      </div>
    );
  }
  // helloWorld = () => {
  //   console.log("Hello World");
  // };

  // render() {
  //   return (
  //   <div className="App">
  //     <nav class="navbar navbar-expand-lg navbar-custom">
  //       <div className="container-custom">
  //         <a className="navbar-brand" href="#">
  //           <img src="https://logosandtypes.com/wp-content/uploads/2020/07/loqueleo.svg" height="42"/>
  //         </a>
  //       </div>

  //       {/* <a class="navbar-brand" href="#">Navbar</a> */}
  //       <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //       <span class="navbar-toggler-icon"></span>
  //       </button>

  //       <div class="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul class="navbar-nav mr-auto mt-5 mt-lg-0">
  //           <li class="nav-item active pl-3 pr-3">
  //           <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
  //           </li>
  //           <li class="nav-item pl-3 pr-3">
  //           <a class="nav-link" href="#">New Release</a>
  //           </li>
  //           <li class="nav-item pl-3 pr-3">
  //           <a class="nav-link" href="#">Popular</a>
  //           </li>
  //           <li class="nav-item pl-3 pr-3">
  //           <a class="nav-link" href="#">Article</a>
  //           </li>
  //           <li class="nav-item pl-3 pr-3">
  //           <a class="nav-link" href="#">Manga List</a>
  //           </li>
  //         </ul>

  //         <form class="form-inline my-2 my-lg-0">
  //           <input class="form-control mr-sm-2" type="search" placeholder="Search" onSubmit={this.helloWorld}/>
  //           <span className="input-group-text border-0" id="search-addon">
  //           </span>
  //           {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
  //         </form>

  //       </div>
  //     </nav>
  //   </div>
  //   );
  // }
}
