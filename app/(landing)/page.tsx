import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center top-2/4 justify-center flex-col">
      <div className="font-bold text-2xl">WeCare</div>

      <div>
        <div className="py-5 flex justify-center gap-[2rem]">
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
          <Link href="/sign-up">
            <Button>Register</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
