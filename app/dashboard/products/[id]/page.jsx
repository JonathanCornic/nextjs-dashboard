import styles from "@/app/ui/dashboard/single-product/single-product.module.css";
import Image from "next/image";

export default function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/default-avatar.png" alt="" fill />
        </div>
        IPhone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="Title" placeholder="IPhone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$999" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="72" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <input type="text" name="size" placeholder="size" />
          <label>Description</label>
          <input type="text" name="description" placeholder="description" />
          <label>Category</label>
          <select name="category" id="category">
            <option value="general">Chosse a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}
