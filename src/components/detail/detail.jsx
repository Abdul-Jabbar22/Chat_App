import { auth } from "../../library/firebase";
import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="User Avatar" />
        <h2>Abdul Jabbar</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat settings</span>
            <img src="./arrowUp.png" alt="Arrow Up" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img src="./arrowUp.png" alt="Arrow Up" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Share Photos</span>
            <img src="./arrowDown.png" alt="Arrow Down" />
          </div>
          <div className="photo">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                  alt="Tree"
                />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="Download" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                  alt="Tree"
                />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="Download" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                  alt="Tree"
                />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="Download" className="icon" />
            </div>
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
                  alt="Tree"
                />
                <span>Photo_2024_2.png</span>
              </div>
              <img src="./download.png" className="icon" alt="Download" />
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png" alt="Arrow Up" />
          </div>
        </div>
        <button>Block User</button>
        <button className="logout" onClick={() => auth.signOut()}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
