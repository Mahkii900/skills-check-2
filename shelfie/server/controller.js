module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db')
        db.get_inventory()
        .then((inventory) => res.status(200).send(inventory))
    },

    createProduct: (req, res) => {
        const db = req.app.get('db')
        const {name, price, img_url} = req.body
        db.create_product({name, price, img_url})
        .then(res.sendStatus(200))
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product({id})
        .then(res.sendStatus(200))
    },

    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {name, price, img_url} = req.body
        db.update_product({name, price, img_url, id})
        .then(res.sendStatus(200))
    },

    getProduct: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_product({id})
        .then((prod) => {
            let [product] = prod
            res.status(200).send(product)
        })
    }
}