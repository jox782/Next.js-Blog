import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/user.png"
          alt="user image"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Joe</h1>
      <p>
        I blog about web development - especially frontend frameworks like next
        js and react
      </p>
    </section>
  );
}
export default Hero;
