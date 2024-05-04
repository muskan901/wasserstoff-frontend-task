import React from 'react';
import './App.css'; // Importing CSS file for styling

function App() {
  return (
    <div className="black-background">
      <div className="container">
        <div className="content">
          <img
            src={"https://cdn-icons-png.flaticon.com/512/5631/5631972.png"}
            alt="Example"
            className="image"
            style={{ maxWidth: "50px", maxHeight: "50px" }}
          />
          <div className="text">
            <h3>Astrix.</h3>
          </div>
        </div>
      </div>
      <div className="container2">
        <div className="text2">
          <h3>
            ASTR <br></br>IX
          </h3>
        </div>
        <div className="text3">
          <h3>
            COLL <br></br>ECTI <br></br>ON
          </h3>
        </div>
        <div className="image-with-text">
          <div className="image-container">
            <div className="image-slider">
              {/* Add multiple images within the image-slider container */}
              <img src={"https://i.pinimg.com/originals/4e/ef/2a/4eef2a7e88a81e57d9f8ccb1be02ab91.png"} alt="Image 1" className="image2"/>
              {/* <div className="overlay-text">Lunar Palace</div> */}
              <img src={"https://i.pinimg.com/236x/c6/ba/1e/c6ba1eb7937d3f372f1d7fd65aef87da.jpg"} alt="Image 2" className="image3"/>
              {/* <div className="overlay-text">Lunar Palace</div> */}
              <img src={"https://i.etsystatic.com/44059549/r/il/81c016/5249766249/il_570xN.5249766249_9hlm.jpg"}alt="Image 3" className="image4"/>
              {/* <div className="overlay-text">Lunar Palace</div> */}
              <img src={"https://www.dailycamera.com/wp-content/uploads/migration/2009/1215/20091215_18DCFCOV-2.jpg?w=620"} alt="Image 4" className="image5"
              />
              {/* <div className="overlay-text">Lunar Palace</div> */}
            </div>
          </div>
        </div>

        <div class="rectangle">
          <div class="overlay-text">Event : Oasis Blue Tour, JLN Stadium, Delhi * Collection Live : Meta Lives</div>
        </div>
      </div>
      <div className='container3'>
        <div className='text4'>
          <h4>Explore Your First <br></br>Collectible</h4>
        </div>
        <div className='text5'>
          <h1>Meta Lives</h1>
        </div>
        <div className='text6'>
          <h4>Live in Astrix</h4>
        </div>
        <div className='text7'>
          <h5>Lorem ipsum dolor sit amet, <br></br>consectetur adipiscing elit, sed do <br></br>eiusmod tempor incididunt ut labore <br></br>et dolore magna aliqua.</h5>
        </div>
      </div>
      <div className='image-container2'>
        <img src={"https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"} alt="Image 4" className="image6"/>
        <img src={"https://cdn.imgbin.com/10/20/11/imgbin-avatar-user-profile-icon-women-wear-frock-GNLBV4N6qanFpjEYMEqxEgcCd.jpg"} alt="Image 4" className="image7"/>
        <img src={"https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"} alt="Image 4" className="image8"/>
        <img src={"https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png"} alt="Image 4" className="image9"/>
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXoM1S2fGa_e-5h0Vd9ZG9KLPCZ7vXnqRUs30DT9VmFg&s"} alt="Image 4" className="image10"/>
      </div>
      <div className="container3">
        <div className='text8'>
          <h5>22k people interested</h5>
        </div>
        <div className='text9'>
          <h6>Collectibles</h6>
        </div>
      </div> 
      <div className='container4'>
      <img src={"https://i.pinimg.com/236x/c6/ba/1e/c6ba1eb7937d3f372f1d7fd65aef87da.jpg"} alt="Image 2" className="image11"/>
      <img src={"https://i.pinimg.com/236x/c6/ba/1e/c6ba1eb7937d3f372f1d7fd65aef87da.jpg"} alt="Image 2" className="image12"/>
      </div>
      <div className='container3'>
        <button class="button">Join Waitlist</button>
      </div>
    </div>
  );
}

export default App;
