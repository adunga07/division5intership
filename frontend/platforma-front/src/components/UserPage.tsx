import UserNavBar from "./UserNavBar"
import SideBar from "./SideBar"
import Content from "./Content"

const UserPage = () => {
  return (
    <div>
      <UserNavBar />
      <div className="w-full flex">
        <SideBar />
        <Content />
      </div>
    </div>
  )
}

export default UserPage