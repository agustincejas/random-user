import { IUserDetails } from "../../interfaces/user";
import { UserPropertiesEnum } from "../../interfaces/user-properties-type";
import UserProperty from "../UserProperty/UserProperty";
import { StyledCountry, StyledName, StyledNameContainer, StyledThumbnail, StyledUser, Thumbnail } from "./User.styled";


interface UserProps {
  user: IUserDetails;
  prevUser: IUserDetails;
}

const User = ({ user, prevUser }: UserProps) => (
  <StyledUser>
    <StyledNameContainer>
      <StyledThumbnail>
        <Thumbnail src={user.picture} alt="user image"/>
      </StyledThumbnail>
      <StyledName>
        <UserProperty prop={user.first} animated={user.first !== prevUser.first} type={UserPropertiesEnum.LABEL} />
        <UserProperty prop={user.last} animated={user.last !== prevUser.last} type={UserPropertiesEnum.LABEL} />
      </StyledName>
    </StyledNameContainer>
    <UserProperty prop={user.picture} animated={user.picture !== prevUser.picture} type={UserPropertiesEnum.IMAGE} />
    <StyledCountry>
      <UserProperty prop={user.country} animated={user.country !== prevUser.country} type={UserPropertiesEnum.LABEL} />
    </StyledCountry>
  </StyledUser>
)

export default User;