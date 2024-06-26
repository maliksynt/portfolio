import { oswald } from "@/app/fonts";
import ErrorComponent from "@/components/error";
import Separator from "@/components/separator";
import Image from "next/image";
import Link from "next/link";
import works from "../../../../public/works.json";

export default function SelectedWork({
  params,
}: {
  params: {
    workId: string;
  };
}) {
  const work = works.find((work) => work.id === Number(params.workId));

  if (!work) {
    return <ErrorComponent text="Work not found" />;
  }
  return (
    <>
      <div className="flex flex-col w-full mt-12 lg:mt-32">
        <h2
          className={`${oswald.className} text-4xl lg:text-6xl font-bold text-primary uppercase`}
        >
          {work.name}
        </h2>
        <div className="flex flex-col lg:flex-row w-full mb-16">
          <div className="text-primary flex flex-col lg:min-w-[450px]">
            <h3 className="text-sm mt-6 md:mt-20">technologies_</h3>
            <ul className="mt-2">
              {work.technologies.map((techno, index) => (
                <li className="font-bold text-sm" key={index}>
                  {techno}
                </li>
              ))}
            </ul>
            <h3 className="text-sm mt-4 md:mt-8">features_</h3>
            <ul className="mt-2">
              {work.features.map((feature, index) => (
                <li className="font-bold text-sm" key={index}>
                  {feature}
                </li>
              ))}
            </ul>
            <h3 className="text-sm mt-4 md:mt-8">links_</h3>
            <ul className="font-bold text-sm underline-offset-2 mt-2">
              <li className="underline underline-offset-4 ">
                <Link href={work.github} target="_blank">
                  github
                </Link>
              </li>
              {work.link && (
                <li className="underline underline-offset-4 ">
                  <Link href={work.link} target="_blank">
                    website
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="pt-20 text-primary  flex flex-col gap-10 font-medium text-sm md:text-base">
            {work.description.map((descr, index) => (
              <p key={index}>{descr}</p>
            ))}
            <div
              className="flex flex-start gap-12
            "
            ></div>
          </div>
        </div>
        <Separator
          reverse={false}
          text="let's discuss"
          link="https://calendly.com/abdalmalikbourassi/premier-contact"
        />
      </div>
      <div className=" mt-10 lg:mt-32 flex flex-shrink-0 flex-wrap w-full gap-4 justify-center md:justify-end">
        {work.photos.map((image, index) => (
          <div className="mt-2" key={index}>
            <Image
              quality={100}
              src={image}
              height={1400}
              width={1800}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
              }}
              alt={work.name}
            />
          </div>
        ))}
      </div>
      <div className="mt-10 lg:mt-32 mb-16 lg:mb-32">
        <Separator
          reverse={true}
          text="let's talk"
          link="https://calendly.com/abdalmalikbourassi/premier-contact"
        />
      </div>
    </>
  );
}
