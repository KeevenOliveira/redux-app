import { MdOutlineShoppingCart } from "react-icons/md";
import { useAppSelector } from "../../app/hook";
import "./index.css";

const Cart = () => {

    const count = useAppSelector(state => state.counter.value);

    return (
        <div className="cartContainer">
            {count > 0 ? <span className="badgeCart">{count}</span> : null}
            <MdOutlineShoppingCart className="iconCart" color="#FFC300" size={25} />
        </div>
    );
}

export default Cart;