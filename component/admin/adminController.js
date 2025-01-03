const adminService = require('./adminService');

const manageAccount = async (req, res) => {
    try {
        const users = await adminService.getFirst5Users();
        res.render('account/account', { users });
    } catch (error) {
        console.error('Error in manageAccount:', error);
        res.status(500).render('error', { 
            message: 'Error loading accounts',
            error: error 
        });
    }
}

const manageProduct = async (req, res) => {
  res.render('product/product');
}

const manageOrder = async (req, res) => {
  res.render('order/order');
}

module.exports = {
    manageAccount,
    manageProduct,
    manageOrder
}