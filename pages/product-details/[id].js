import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { productList as fetchProductList } from "../../data/product-list";

export default function ProductDetails(props) {
  console.log("props ", props);
  const router = useRouter();

  //  this works in the case of fallback:true
  // if (router.isFallback) return <div>Loading...</div>;
  const { title, image, price, id } = props?.productDetails;
  return (
    <div className="w-full flex justify-center h-screen pt-10">
      <div className="flex flex-col space-y-3">
        <Link href="/" className="font-semibold">
          Back to Home
        </Link>
        <div>{title}</div>

        <div className="flex space-x-5">
          <div className="border border-slate-500 p-3 rounded-md bg-white">
            <Image
              src={image}
              width={640}
              height={960}
              alt="coffee"
              responsive
              className="rounded-md"
            />
          </div>
          <div className="rounded-md bg-white flex flex-col space-y-3 w-[300px] p-5">
            <p className="font-semibold">{price}</p>
            <p>Vote</p>
            <div>
              <button className="bg-blue-900 px-5 py-1 text-white">
                Buy Now
              </button>
            </div>
            <div className="mt-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  console.log(params);
  const productList = await fetchProductList();
  return {
    props: {
      productDetails: productList.find(
        (product) => product.id.toString() === params.id
      ),
    },
  };
}

export async function getStaticPaths() {
  const productList = await fetchProductList();
  const paths = productList.map((product) => ({
    params: { id: product.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
