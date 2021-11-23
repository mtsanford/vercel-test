import { EssentialRectImg } from "react-essentialrect";

import dummyimages from "../data/images";
import styles from "../styles/ImageGrid.module.css";

function ImageGrid(props) {
  return (
    <div className={styles.imageGrid}>
      {dummyimages.map((image) => (
          <EssentialRectImg
            src={image.image}
            essentialRect={image.essentialRect}
            className={styles.item}
            key={image.id}
          />
      ))}
    </div>
  );
}

export default ImageGrid;
