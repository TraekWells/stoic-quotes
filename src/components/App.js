import React from "react";
import Footer from "./Footer";
import Header from "./Header";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null,
      author: null,
    };
  }

  componentDidMount() {
    const url = "https://stoicquotesapi.com/v1/api/quotes/random";

    fetch(url)
      .then((response) => response.json())
      .then(({ body, author }) => this.setState({ quote: body, author }));
  }
  render() {
    return (
      <>
        <Header />
        <main>
          <h1>{this.state.quote}</h1>
          <p>{this.state.author}</p>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
