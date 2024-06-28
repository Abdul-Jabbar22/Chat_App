import "./addUser.css";
import { db } from "../../../../library/firebase";
import {
  collection,
  doc, // Make sure to import `doc` from `firebase/firestore`
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { useState } from "react";

const AddUser = () => {
  const [user, setUser] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

    try {
      const userRef = collection(db, "users");
      const q = query(userRef, where("username", "==", username));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setUser(querySnapshot.docs[0].data());
      } else {
        setUser(null); // Clear user state if no user is found
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      setUser(null); // Clear user state in case of error
    }
  };

  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    try {
      const newChatRef = doc(chatRef); // Generate a new document reference
      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });
      console.log(newChatRef.id); // Log the new chat ID
    } catch (err) {
      console.error("Error creating chat:", err); // Log the error
    }
  };

  return (
    <div className="addUser">
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Username" name="username" />
        <button type="submit">Search</button>
      </form>
      <div className="user">
        {user && (
          <div className="detail">
            <img src={user.avatar || "./avatar.png"} alt="Avatar" />
            <span>{user.username}</span>
            <button onClick={handleAdd}>Add User</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddUser;
