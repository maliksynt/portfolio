import { Button } from "@/components/ui/button";
import Link from "next/link";
import LogoImage from "../../components/logoImage";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="w-full bg-primary flex flex-col items-center justify-between relative">
      <div className="flex flex-col-reverse md:flex-row text-background w-9/12  gap-16 md:gap-64 mt-16  mb-12 md:mt-40 md:mb-40">
        <ul className="flex flex-col gap-2 lg:gap-6">
          <li className="font-bold">contact</li>
          <li>
            {" "}
            <Button
              variant="link"
              size="transparent"
              className="text-background bg-primary"
              asChild
            >
              <Link href="mailto:abdalmalikbourassi@gmail.com" target="_blank">
                abdalmalikbourassi@gmail.com
              </Link>
            </Button>
          </li>
          <li>
            {" "}
            <Button
              variant="link"
              size="transparent"
              className="text-background bg-primary flex justify-start gap-2 items-center"
              asChild
            >
              <Link
                href="https://www.linkedin.com/in/abd-al-malik-bourassi-2b4423301/"
                target="_blank"
              >
                <Linkedin />
              </Link>
            </Button>
          </li>
          <li>
            {" "}
            <Button
              variant="link"
              size="transparent"
              className="text-background bg-primary flex justify-start gap-2 items-center"
              asChild
            >
              <Link href="https://github.com/maliksynt" target="_blank">
                <Github />
              </Link>
            </Button>
          </li>
          <li className="opacity-50 hidden lg:flex">
            designed and developed by me
          </li>
        </ul>
        <ul className="flex flex-col gap-2 lg:gap-6">
          <li className="font-bold">navigation</li>
          <li>
            {" "}
            <Button
              variant="link"
              size="transparent"
              className="text-background bg-primary"
              asChild
            >
              <Link href="/">homepage</Link>
            </Button>
          </li>
          <li>
            {" "}
            <Button
              variant="link"
              size="transparent"
              className="text-background bg-primary"
              asChild
            >
              <Link href="/selectedworks">selected works</Link>
            </Button>
          </li>
          <li>
            {" "}
            <Button
              variant="link"
              size="transparent"
              className="text-background bg-primary"
              asChild
            >
              <Link href="/howiwork">how i work</Link>
            </Button>
          </li>
        </ul>
      </div>
      <div className="px-6 w-full sm:px-0 sm:w-9/12">
        <LogoImage location="footer" />
      </div>
    </div>
  );
}
