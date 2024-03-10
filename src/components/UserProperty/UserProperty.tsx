import { useEffect, useState } from "react";
import { StyledImage, StyledLabelProperty, StyledProperty } from "./UserProperty.styled";
import { UserPropertiesEnum } from "../../interfaces/user-properties-type";
import { ANIMATION_TIME } from "../../config";

interface UserPropertyProps {
  prop: string;
  prevProp: string;
  type: UserPropertiesEnum;
}

const UserProperty = ({ prop, prevProp, type }: UserPropertyProps) => {
  const [title, setTitle] = useState('');

  useEffect(()=> {
    if(prevProp) {
      setTitle(prop !== prevProp ? 'highlightedElement': '');
    }
  }, [prop, prevProp])

  setTimeout(()=> {
    setTitle('')
  }, ANIMATION_TIME)

  return(
    type === UserPropertiesEnum.LABEL
    ? <StyledLabelProperty title={title}>
        {prop}
      </StyledLabelProperty>
    : type === UserPropertiesEnum.IMAGE
      ? <StyledProperty title={title}>
          <StyledImage src={prop} alt="user image" />
        </StyledProperty>
      : <></>
  )
}

export default UserProperty;