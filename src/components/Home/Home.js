import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        let heading = "We provide creative solutions so that your business can succeed in a crazy world."
        let subheading = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        return (
            <div>
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                        <h1 className="title">{ heading }</h1>
                        <div className="is-two-thirds column is-paddingless">
                            <h2 className="subtitle is-4">{ subheading }</h2>
                        </div>
                        <a className="button is-large is-primary" id="learn">Learn more</a>
                        </div>
                    </div>
                </section>                

                <section className="section">
                    <div className="container">
                        <div className="columns pd is-desktop">
                        <div className="column is-1 has-text-centered">
                            <i className="fa fa-paint-brush is-primary"></i>
                        </div>
                        <div className="column is-one-third-desktop">
                            <p className="title"><strong>We provide superior creative solutions so that your business can succeed in a crazy world.</strong></p>
                        </div>
                        <div className="column">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        </div>
                        </div>
                    </div>

                    <div className="columns pd">
                        <div className="column">
                        <div className="card">
                            <div className="card-content">
                            <p className="title">"Savage Creative Collective created a solution for all of our media needs and brought our brand and business back from the dead."</p>
                            <p className="subtitle">- Happy Client <i className="fa fa-smile-o"></i></p>
                            </div>
                        </div>
                        </div>
                        <div className="column">
                        <div className="card">
                            <div className="card-content">
                            <p className="title">"Savage Creative Collective created a solution for all of our media needs and brought our brand and business back from the dead."</p>
                            <p className="subtitle">- Happy Client <i className="fa fa-smile-o"></i></p>
                            </div>
                        </div>
                        </div>
                        <div className="column">
                        <div className="card">
                            <div className="card-content">
                            <p className="title">"Savage Creative Collective created a solution for all of our media needs and brought our brand and business back from the dead."</p>
                            <p className="subtitle">- Happy Client <i className="fa fa-smile-o"></i></p>
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Home;