import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

import styles from "./profile.module.css";

const ProfileButton = () => {
  const { data: session } = useSession();

  if (!session) return null;

  return (
    <div className={styles.profile} onClick={() => signOut({callbackUrl: '/'})}>
      <img
        src={session.user?.image || ""}
        alt={session.user?.name || "User"}
        className={styles.profileImage}
      />
      <div className={styles.userInfo}>
        <h3 className={styles.userInfoName}>{session.user?.name}</h3>
      </div>
    </div>
  );
};

export default ProfileButton;
