import React from 'react';
import './Articles.css';
import articlepicOne from '../images/articlepicOne.jpg';
import ArticleNavbar from '../components/articlesNavbar';
import Footer from '../components/Footer';

const Articles = () => {
    return (
        <div className="articles-content-page">
            <ArticleNavbar />
            <div className="articles-container" style={{ backgroundImage: `url(${articlepicOne})` }}>
                <div className="article first-two-artciles">
                    <h2>Garbage Disposal</h2>
                    <p>
                        Over the years, population growth and economic development have resulted in an increasing number of anthropogenic activities on land and an increase in pollution globally which has contributed to degrading the environment and the related ecosystem services. Land-based pollution originates from different sources, including municipal, industrial and agricultural waste, wastewater and nutrient run-off, and from power generation.
                    </p>
                    <p>- CMC Admin Landfill Sites</p>
                </div>

                <div className="article first-two-artciles">
                    <h2>Sewage Treatment</h2>
                    <p>
                        Raising awareness about the dangers of raw sewage on the groundwater, and promoting best practices in wastewater treatment. This document shows how Kenya, being a third world country that is an ASAL, with options that are much limited and more difficult due to: lack of infrastructure, technical and institutional capacity, and financing, can sustainably utilize wastewater, which represents a widely available and valuable resource.
                    </p>
                    <p>- CMC Admin</p>
                </div>

                <div className="article">
                    <h2>Recycling</h2>
                    <p>
                        Recycling is the process of converting waste materials into new materials and objects. The recyclability of a material depends on its ability to reacquire the properties it had in its virgin or original state. It is an alternative to "conventional" waste disposal that can save material and help lower greenhouse gas emissions.
                    </p>
                    <p>- CMC Admin</p>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default Articles;