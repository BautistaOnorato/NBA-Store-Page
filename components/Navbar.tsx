import Image from "next/image";
import MainNav from "./MainNav";
import Link from "next/link";
import { getCategories } from "@/service/categories";
import NavbarActions from "./NavbarActions";
import MobileMenu from "./MobileMenu";

const Navbar = async () => {
  const categories = await getCategories()

  return (
    <header className="bg-black">
      <div className="mx-auto max-w-7xl">
        <div className="hidden sm:flex items-center h-20 justify-between px-3">
          <div className="flex items-center gap-x-14">
            <Link href="/">
              <Image
                src="/store.nba.com.svg"
                alt="NBA logo"
                width={150}
                height={150}
              />
            </Link>
            <MainNav categories={categories} />
          </div>
          <NavbarActions />
        </div>
        <MobileMenu categories={categories} />
      </div>
    </header>
  );
};

export default Navbar;
