import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { ResourceCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

const ResourceCard = ({ id, title, image, downloadNumber, downloadLink }: ResourceCardProps) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link href={downloadLink} target="_blank">
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              alt={title}
              height={440}
              width={384}
              className="h-full rounded-md object-cover"
            />
          </div>
          <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image
            src="/downloads.svg"
            alt="download"
            height={20}
            width={20}
          />
          {`${downloadNumber}`}
        </div>

        <Link 
          href={downloadLink} 
          target="_blank"
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          Get it now!

          <Image
            src="/arrow-blue.svg"
            alt="arrow"
            height={10}
            width={13}
          />

        </Link>
      </CardContent>
    </Card >
  );
}

export default ResourceCard;