interface HeaderProps {
  name: string;
  isMarried?: boolean;
}

const Header = ({ name, isMarried }: HeaderProps) => {
  return <h4>Welcome, {name}!</h4>;
};

export default Header;
