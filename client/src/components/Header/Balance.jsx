import { useContext } from "react";
import { toCurrency } from "../../util/util";

import { GlobalContext } from "../../context/GlobalState";

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const balance = transactions
        .map((t) => t.amount)
        .reduce((acc, curr) => acc + curr, 0);
    const amount = toCurrency(balance);

    return (
        <div className="flex max-xs:w-full justify-between items-end max-w-md">
            <span className="">
                <h4 className="text-lg">BALANCE</h4>
            </span>
            <span className="text-2xl text-right pl-6">
                {amount}
            </span>
        </div>
    );
};

export default Balance;
