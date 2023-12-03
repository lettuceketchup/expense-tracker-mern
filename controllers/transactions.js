const Transaction = require("../models/Transaction");

// @desc    Get all transactions
// @route   GET /api/v1/transactions
// @access  Public
exports.getTransactions = async (req, res, next) => {
    console.log(`getTransactions`);
    try {
        const Transactions = await Transaction.find();
        console.log(Transactions);

        res.status(200).json({
            success: true,
            count: Transactions.length,
            data: Transactions,
        });
    } catch (error) {
        if(error._message) {
            console.log(`Error: ${error._message}`.red);
        } else {
            console.log(`Error: ${error}`.red);
        }
        res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

// @desc    Add transaction
// @route   POST /api/v1/transactions
// @access  Public
exports.addTransaction = async (req, res, next) => {
    try {
        const { description, amount } = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction,
        });
    } catch (error) {
        if(error._message) {
            console.log(`Error: ${error._message}`.red);
        } else {
            console.log(`Error: ${error}`.red);
        }
        if (error.name === "ValidationError") {
            const messages = Object.values(error.errors).map(
                (val) => val.message
            );
            console.log(`Message: ${messages}`.red);

            return res.status(500).json({
                success: false,
                error: messages,
            });
        } else {
            return res.status(500).json({
                success: false,
                error: "Server Error",
            });
        }
    }
};

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        console.log(transaction);

        if (!transaction) {
            console.log(
                `Error: No transaction found with id of ${req.params.id}`.red
            );
            return res.status(404).json({
                success: false,
                error: "No transaction found",
            });
        }

        await transaction.deleteOne();

        res.status(200).json({
            success: true,
            data: transaction,
        });
    } catch (error) {
        if(error._message) {
            console.log(`Error: ${error._message}`.red);
        } else {
            console.log(`Error: ${error}`.red);
        }
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};
