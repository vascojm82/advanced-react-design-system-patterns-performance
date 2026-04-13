import { Outlet, useNavigation, useLocation } from "react-router";
import { LoadingMessage, NavContainer, NavLink } from "./styled-elements";
import { Suspense } from "react";

const Nav = () => {
  const { state } = useNavigation();
  const { pathname } = useLocation();

  return (
    <>
      <NavContainer>
        <NavLink to={"/"}>Main</NavLink>
        <NavLink to={"/books"}>Books</NavLink>
        <NavLink to={"/club"}>Club</NavLink>
        {state === "loading" && <LoadingMessage>Loading...</LoadingMessage>}
      </NavContainer>

      {/* For Suspense, when React renders a boundary (something), it remembers what it last successfully showed inside it */}
      {/* if a Suspense boundary already has committed content, don't replace it with the fallback during a transition —  */}
      {/* keep showing the old content until the new content is ready, because of this React behavior, if we want to show what's */}
      {/* in the fallback when the user clicks on 'Club', we must force Suspense to re-render, we do that by adding a 'key' to Suspense */}
      {/* In React, changing a component's key forces it to unmount and remount from scratch — React treats it as a completely different */}
      {/* component instance, not an update to the existing one. So when pathname changes from / to /club, the old Suspense is destroyed and */}
      {/* a brand new one is mounted in its place. */}
      {/* The new Suspense has never rendered anything — no committed content. When Club then suspends, React has nothing to preserve, */}
      {/* so it has no choice but to show the fallback. */}
      <Suspense key={pathname} fallback={<NavContainer>Lazy Loading...</NavContainer>}>
        <NavContainer>
          <Outlet />
        </NavContainer>
      </Suspense>
    </>
  );
};

export default Nav;
