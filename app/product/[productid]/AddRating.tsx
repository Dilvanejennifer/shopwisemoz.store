import { SafeUser } from "@/types";
import { Order, Product, Review } from "@prisma/client";

interface AddRatingProps {
  product: Product & {
    reviwes: Review[];
  };
  user:
    | (SafeUser & {
        orders: Order[];
      })
    | null;
}

const AddRating: React.FC<AddRatingProps> = ({ product, user }) => {
  return <div></div>;
};

export default AddRating;
