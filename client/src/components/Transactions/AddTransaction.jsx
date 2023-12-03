import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

const AddTransaction = () => {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const { addTransaction } = useContext(GlobalContext);

    const validateAndAddTransaction = () => {
        if (description && amount) {
            const newTransaction = {
                description,
                amount: parseInt(amount),
            };
            addTransaction(newTransaction);
            setDescription("");
            setAmount("");
        }
    };

    return (
        <>
            <form
                className="flex justify-stretch w-full shadow-sm"
                onSubmit={(e) => {
                    e.preventDefault();
                    validateAndAddTransaction();
                }}
            >
                <div className="grow flex-col items-end">
                    <label className="block grow flex-1">
                        <input
                            className="py-1 px-2 w-full focus:outline-none border-2 border-gray-200"
                            type="text"
                            placeholder="Description"
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                    </label>
                    <label className="block">
                        <input
                            className="py-1 px-2 w-full text-right focus:outline-none border-2 border-t-0 border-gray-200"
                            type="text"
                            placeholder="Amount"
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                        />
                    </label>
                </div>
                <button className="rounded-sm bg-blue-400 text-4xl px-4">
                    +
                </button>
            </form>
        </>
    );
};

export default AddTransaction;
