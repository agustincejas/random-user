import { StyledImage, StyledLabelProperty, StyledProperty } from "./UserProperty.styled";
import { UserPropertiesEnum } from "../../interfaces/user-properties-type";

interface UserPropertyProps {
  prop: string;
  animated: boolean;
  type: UserPropertiesEnum;
}

const UserProperty = ({ prop, animated, type }: UserPropertyProps) => {
  return(
    type === UserPropertiesEnum.LABEL
    ? <StyledLabelProperty className={ animated ? 'animated': ''}>
        {prop}
      </StyledLabelProperty>
    : type === UserPropertiesEnum.IMAGE
      ? <StyledProperty className={ animated ? 'animatedImg': ''}>
          <StyledImage src={prop} alt="user image" />
        </StyledProperty>
      : <></>
  )
}

export default UserProperty;