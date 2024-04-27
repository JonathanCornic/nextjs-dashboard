import styles from "@/app/ui/dashboard/add-product/add-product.module.css";

export default function AddProductPage() {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="category" id="category">
          <option value="general">Chosse a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          name="description"
          id="description"
          rows="16"
          placeholder="description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
