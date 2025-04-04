import UserNavBar from "./UserNavBar"
import SideBar from "./SideBar"
import Content from "./Content"

const UserPage = () => {
  return (
    <div>
      <UserNavBar />
      <div className="w-full flex">
        <SideBar link1="My questions" link2="My answers" link3="My profile" />
        <Content />
      </div>
    </div>
  )
}

export default UserPage