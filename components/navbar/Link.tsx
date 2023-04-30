import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/components/shared/types";

type Props = {
  page: string
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link: React.FC<Props> = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
