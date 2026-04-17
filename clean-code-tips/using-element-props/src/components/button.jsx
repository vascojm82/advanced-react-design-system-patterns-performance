import styles from "./button.module.css";

const Button = ({ As="button" , size = "m", className = "", ...otherProps }) => {
  return (
    // Example of As property to render different components
    <As
      {...otherProps}
      className={`${styles.button} ${styles[size]} ${className}`}
    />
  );
};

export default Button;
