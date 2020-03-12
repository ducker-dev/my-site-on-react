import React, {Component} from "react";
import "./Components/common.scss";
import "./style.scss";
import ux from "./Components/ux";
import {connect} from "react-redux";

const {Header, Footer} = ux;

class App extends Component {
  render() {
    const {
      theme,
      dictionary
    } = this.props;
    console.log(this.props);
    return (
      <>
        <Header/>
        <section className={`about-me theme_${theme}`}>
          <div className="about-me__left-side">
            <div className="container_small">
              <h2>{dictionary.aboutMe.title}</h2>
              <p>{dictionary.aboutMe.subTitle}</p>
            </div>
          </div>
          <div className="about-me__right-side">
            <div className="container">
              {dictionary.aboutMe.description.map(item => <p>{item}</p>)}
            </div>
          </div>
        </section>
        <Footer/>
      </>
    );
  }
}

const mapStateToProps = store => ({
  theme: store.theme,
  dictionary: store.dictionary
});

export default connect(mapStateToProps)(App);
