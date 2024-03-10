import { render, screen } from '@testing-library/react'
import User from "./User"
import { IUserDetails } from '../../interfaces/user'

describe("User", () => {
  const userProps: IUserDetails = {
    first: 'John',
    last: 'Travolta',
    country: 'United States',
    picture: 'www.some-picture.com',
    thumbnail: 'thumb'
  }
  it("renders all properties", () => {
    render(<User user={userProps} prevUser={{} as IUserDetails} />)

    expect(screen.getByText(userProps.first)).toBeInTheDocument();
    expect(screen.getByText(userProps.last)).toBeInTheDocument();
    expect(screen.getByText(userProps.country)).toBeInTheDocument();
    expect(screen.getAllByAltText('user image')).toHaveLength(2);
  })
})