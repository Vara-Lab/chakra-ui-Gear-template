
import { Image } from '@chakra-ui/react';
import { Account } from './account';
import styles from './Header.module.scss';
import Logo from "../../../assets/images/vara street logoNAVCOLOR.svg"

type Props = {
  isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
  return (
    <header className={styles.header}>
      <Image pl={{base:"0.5rem",md:"2rem",xl:"3rem", "2xl":"4rem"}} h="3rem "src={Logo} />
      {isAccountVisible && <Account />}
    </header>
  );
}

export { Header };
