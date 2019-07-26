UPDATE products
SET name = ${name},
price = ${price},
image_url = ${img_url}
WHERE product_id = ${id};