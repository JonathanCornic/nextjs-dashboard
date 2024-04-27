import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";
import styles from "./right.module.css";

export default function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill sizes={10} className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard ?
          </h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            sapiente quo modi totam temporibus. Totam ullam ipsa atque est!
            Quos.
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill size={10} className={styles.bg} />
        </div>
        <div className={styles.text}>
          <span className={styles.notification}>Comming soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre-rendering is comming
            up!
          </h3>
          <span className={styles.subtitle}>Boost your prductivity</span>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            sapiente quo modi totam temporibus. Totam ullam ipsa atque est!
            Quos.
          </p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
}
