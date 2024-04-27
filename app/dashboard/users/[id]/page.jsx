import styles from "@/app/ui/dashboard/single-user/single-user.module.css";
import Image from "next/image";

export default function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/default-avatar.png" alt="" fill />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label>Email</label>
          <input type="email" name="email" placeholder="JohnDoe@gmail.com" />
          <label>password</label>
          <input type="password" name="password"/>
          <label>Phone</label>
          <input type="phone" name="phone" placeholder="06 66 48 25 15" />
          <label>Address</label>
          <input type="text" name="address" placeholder="bordeaux" />
          <label>is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
