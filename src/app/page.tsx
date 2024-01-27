import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
const page = () => {
  return (
    <div>
      {/* we are going to make navbar */}
      <div>
        <ul>
          <Link href="">
            <li></li>
          </Link>
          <Link href="">
            <li></li>
          </Link>
          <Link href="">
            <li></li>bs
          </Link>
          <Link href="">
            <li></li>
          </Link>
          <Link href="">
            <li></li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default page;
