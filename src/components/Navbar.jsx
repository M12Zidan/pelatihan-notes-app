import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-screen-lg p-4">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-white font-semibold text-2xl">NotesApp</h1>
          <nav>
            <ul className="flex gap-6">
              <li className="text-white font-medium text-md">
                <Link href={"/"}>Beranda</Link>
              </li>
              <li className="text-white font-medium text-md">
                <Link href={"/notes"}>List Catatan</Link>
              </li>
              <li className="text-white font-medium text-md">
                <Link href={"/create"}>Buat Catatan</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
