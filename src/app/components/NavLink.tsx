// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useJump } from "../context/JumpContext";

// interface NavLinkProps {
//   href: string;
//   children: React.ReactNode;
//   onClick?: () => void; // ✅ Added onClick as an optional prop
// }

// const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
//   const pathname = usePathname();
//   const { triggerJump } = useJump(); // Get the jump function
//   const isActive = pathname === href || pathname.startsWith(`${href}/`);

//   return (
//     <Link
//       href={href}
//       className={`block py-2 px-4 rounded transition-colors duration-300 ${
//         isActive
//           ? "bg-yellow-500 text-black font-bold"
//           : "text-white hover:text-black hover:bg-yellow-200"
//       }`}
//       onClick={() => {
//         triggerJump(); // Make the smiley jump
//         if (onClick) onClick(); // Call any additional click handler if provided
//       }}
//     >
//       {children}
//     </Link>
//   );
// };

// export default NavLink;
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`block py-2 px-4 rounded transition-colors duration-300 ${
        isActive
          ? "bg-yellow-500 text-black font-bold"
          : "text-white hover:text-yellow-400"
      }`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
