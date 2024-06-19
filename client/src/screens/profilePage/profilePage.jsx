import Card from '../../components/card/Card'
import Chat from '../../components/chat/Chat'
import List from '../../components/list/List'
import './profilePage.scss'

const ProfilePage = () => {
  return (
    <div className='profilePage'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <button>Update Profile</button>
                </div>

                <div className="info">
                    <span>Avatar: <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" alt="" /></span>
                    <span>Username: <b>John Doe</b></span>
                    <span>Email: <b>john@email.com</b></span>
                </div>

                <div className="title">
                    <h1>My List</h1>
                    <button>Create new post </button>
                </div>
                <List/>

                <div className="title">
                    <h1>Saved List</h1>
              
                </div>
                <List/>

            </div>
        </div>
        <div className="chatContainer">
            <div className="wrapper">
                <Chat/>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage