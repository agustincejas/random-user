import { useEffect, useState } from "react";
import { IUserDetails } from "../../interfaces/user";
import { getRandomUser } from "../../services/user";
import User from "../User/User";
import { EmptyState, StyledButton, StyledLayout, StyledSection, StyledSectionContent } from "./Layout.styled";

const Layout = () => {
  const [user, setUser] = useState({} as IUserDetails);
  const [prevUser, setPrevUser] = useState({} as IUserDetails);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleGetUser = async() => {
      const user = await getRandomUser();
      setUser(user);
    }

    handleGetUser()
  },[])

  const handleGetNextUser = async() => {
    setLoading(true);
    const user = await getRandomUser();
    setUser(((prevState: IUserDetails) => {
      setPrevUser(prevState);
      return user;
    }))
    setLoading(false);
  }

  return (
    <StyledLayout className={loading ? 'disabled-section': ''}>
      <StyledSection>
        <StyledSectionContent>
          {
            user && user?.first
            ? <User user={user}  prevUser={prevUser}/>
            : <EmptyState />
          }
          <StyledButton disabled={loading} onClick={handleGetNextUser}>Get random user</StyledButton>
        </StyledSectionContent>
      </StyledSection>
    </StyledLayout>
  )
}

export default Layout;