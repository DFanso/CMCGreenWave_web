import React from 'react';
import './addArticle.css';
import addArtcileCover from '../images/addArtcileCover.jpg';
import StaffDashNavbar from '../components/staffDashNavbar';
import Footer from '../components/Footer';

const AddArticle = () => {
    return (
        <div className='articleAddPage-Content'>
            <StaffDashNavbar />
            <div className="add-article-container" style={{ backgroundImage: `url(${addArtcileCover})` }}>
                <div className="form-container">
                    <form>
                        <h2>Add article</h2>
                        <input type="text" placeholder="Title" required />
                        <input type="text" placeholder="Author" required />
                        <textarea placeholder="Description" required />
                        <input className="fileInput-article" type="file" placeholder="File Upload" required />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AddArticle;
