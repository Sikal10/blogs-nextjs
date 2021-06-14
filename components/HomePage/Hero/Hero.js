import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src={"/images/site/sikal.png"} alt={"Sikal image"} width={300} height={300}  unsized={""}/>
            </div>
            <h1>I'm Sikal</h1>
            <p>I blog about web development</p>
        </section>
    );
};

export default Hero;