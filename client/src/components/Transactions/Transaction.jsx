import PropTypes from "prop-types";
import { useContext } from "react";
import { toCurrency } from "../../util/util";

import { GlobalContext } from "../../context/GlobalState";

const Transaction = ({ id, description, amount }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className="group border-t-2 flex justify-between">
            <div className="w-full flex justify-between">
                <div className="p-2">{description}</div>
                <div
                    className={`${
                        amount < 0 ? "text-red-800" : "text-green-800"
                    } p-2`}
                >
                    {toCurrency(amount)}
                </div>
            </div>
            <button
                className="hidden group-hover:block bg-red-200 p-2 px-3"
                onClick={() => deleteTransaction(id)}
            >
                X
            </button>
        </li>
    );
};

Transaction.propTypes = {
    id: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};

export default Transaction;
