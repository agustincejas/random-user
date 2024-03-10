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
        <UserProperty prop={user.first} prevProp={prevUser.first} type={UserPropertiesEnum.LABEL} />
        <UserProperty prop={user.last} prevProp={prevUser.last} type={UserPropertiesEnum.LABEL} />
      </StyledName>
    </StyledNameContainer>
    <UserProperty prop={user.picture} prevProp={prevUser.picture} type={UserPropertiesEnum.IMAGE} />
    <StyledCountry>
      <UserProperty prop={user.country} prevProp={prevUser.country} type={UserPropertiesEnum.LABEL} />
    </StyledCountry>
  </StyledUser>
)

export default User;