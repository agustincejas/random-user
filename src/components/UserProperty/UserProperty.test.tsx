import { render, screen } from '@testing-library/react'
import UserProperty from './UserProperty'
import { UserPropertiesEnum } from '../../interfaces/user-properties-type'

describe('UserProperty', () => {

  it('renders label variant', async() => {
    const prop = "John";

    render(<UserProperty prop={prop} prevProp={'Mark'} type={UserPropertiesEnum.LABEL} />)

    const regex = new RegExp(prop,'i');
    expect(screen.getByText(regex)).toBeInTheDocument()
  })

  it('renders picture variant', async() => {
    const prop = "www.url.com";

    render(<UserProperty prop={prop} prevProp={'www.otherurl.com'} type={UserPropertiesEnum.IMAGE} />)

    expect(screen.getByAltText('user image')).toBeInTheDocument()
  })

  it('does not highlights unchanged prop', async() => {
    const prop = "Mark";

    render(<UserProperty prop={prop} prevProp={prop} type={UserPropertiesEnum.LABEL} />)

    expect(screen.queryByTitle('highlightedElement')).not.toBeInTheDocument()
  })

  it('highlights changed prop', async() => {
    const prop = "John";

    render(<UserProperty prop={prop} prevProp={'Mark'} type={UserPropertiesEnum.LABEL} />)

    expect(screen.getByTitle('highlightedElement')).toBeInTheDocument()
  })
})