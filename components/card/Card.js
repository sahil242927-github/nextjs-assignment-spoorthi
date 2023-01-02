import Image from "next/image";
import Link from "next/link";

export const Card = ({ title, image, link, price }) => {
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 p-5"
      data-testid="product"
    >
      <Link href={link}>
        <div className="rounded-md">
          <Image
            src={image ?? "/img-not-found.gif"}
            alt={title}
            className="rounded-t-lg"
            width={400}
            height={327}
          />
        </div>
        <div className="p-5">
          <h5
            className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            data-testid="title"
          >
            {title}
          </h5>

          <div
            className="mb-3 font-normal text-gray-700 dark:text-gray-400"
            data-testid="price"
          >
            Rs. {price} only!
          </div>
        </div>
      </Link>
    </div>
  );
};
