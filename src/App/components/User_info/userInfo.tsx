import styles from "./user_info.module.css";

type userInfo = {
  name: string;
};
export default function UserInfo(props: userInfo) {
  const { name } = props;
  return (
    <div className="container">
      <div className={styles.UserInfo}>
        <h1 className={styles.userName}>{name}</h1>
        <p className={styles.userprof}>
          Founder of <span>Bubbl</span>
        </p>
        <p className={styles.userinfo}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in Lorem Ipsum available
        </p>
      </div>
    </div>
  );
}
