import { Nav } from "react-bootstrap";

const NavigationSignoutView = ({ displayName, handleSignout, navHomePageHref, navUserProfileHref }) =>
    <>
        <Nav.Link className="navButton pr-3 pl-3" href={navUserProfileHref}>{displayName}</Nav.Link>
        <Nav.Link className="navButton pr-3 pl-3" href={navHomePageHref} onSelect={(e) => { handleSignout();
 }}>Signout</Nav.Link>
    </>;

export default NavigationSignoutView;