import FallbackSpinner from "@/components/fallbackSpinner";
import Separator from "@/components/separator";
import Slider from "@/components/slider";
import Work from "@/components/work";
import { Suspense } from "react";

export default function SelectedWorks() {
  return (
    <>
      <div className="flex flex-col w-full">
        <p className="mt-20 text-primary flex justify-start gap-4">
          selected works <span className="font-bold"> 2023 - 2024</span>
        </p>
        <div className="mb-20 mt-[-50px]">
          <Separator />
        </div>
        <Suspense fallback={<FallbackSpinner />}>
          <Work display="all" />
        </Suspense>
      </div>
      <Separator />
      <Slider />
      <div className="gap-64 w-full mt-40 md:mt-64 lg:mt-72 xl:mt-[340px] mb-24">
        <Separator reverse={false} link="/" text="let's talk" />
      </div>
    </>
  );
}
