import Logo from "./logo";
import Link from "next/link";
import classes from "./main-navigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      {/* to render any element as a link you have to add anchor tag */}
      <Link href={"/"}>
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href={"/posts"}>Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/posts">posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
