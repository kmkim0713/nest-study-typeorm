-- 1. 회원
CREATE TABLE users (
                       id           BIGINT AUTO_INCREMENT PRIMARY KEY,
                       email        VARCHAR(100) NOT NULL UNIQUE,
                       password     VARCHAR(255) NOT NULL,
                       name         VARCHAR(50)  NOT NULL,
                       phone        VARCHAR(20),
                       created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
                       updated_at   DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB;

-- 2. 상품 카테고리
CREATE TABLE categories (
                            id          INT AUTO_INCREMENT PRIMARY KEY,
                            name        VARCHAR(50) NOT NULL UNIQUE,
                            description VARCHAR(255)
) ENGINE=InnoDB;

-- 3. 상품
CREATE TABLE products (
                          id           BIGINT AUTO_INCREMENT PRIMARY KEY,
                          category_id  INT,
                          name         VARCHAR(100) NOT NULL,
                          description  TEXT,
                          price        DECIMAL(10,2) NOT NULL,
                          stock        INT DEFAULT 0,
                          created_at   DATETIME DEFAULT CURRENT_TIMESTAMP,
                          updated_at   DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                          FOREIGN KEY (category_id) REFERENCES categories(id)
) ENGINE=InnoDB;

-- 4. 주문
CREATE TABLE orders (
                        id          BIGINT AUTO_INCREMENT PRIMARY KEY,
                        user_id     BIGINT NOT NULL,
                        status      ENUM('PENDING','PAID','SHIPPED','CANCELLED') DEFAULT 'PENDING',
                        total_price DECIMAL(10,2) DEFAULT 0,
                        created_at  DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updated_at  DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                        FOREIGN KEY (user_id) REFERENCES users(id)
) ENGINE=InnoDB;

-- 5. 주문 아이템
CREATE TABLE order_items (
                             id         BIGINT AUTO_INCREMENT PRIMARY KEY,
                             order_id   BIGINT NOT NULL,
                             product_id BIGINT NOT NULL,
                             quantity   INT NOT NULL,
                             price      DECIMAL(10,2) NOT NULL,
                             FOREIGN KEY (order_id)  REFERENCES orders(id)   ON DELETE CASCADE,
                             FOREIGN KEY (product_id) REFERENCES products(id)
) ENGINE=InnoDB;





SET FOREIGN_KEY_CHECKS = 0;


TRUNCATE TABLE products;

SET FOREIGN_KEY_CHECKS = 1;


INSERT INTO categories (name, description) VALUES
                                               ('Electronics', 'Electronic devices such as smartphones, laptops, and accessories'),
                                               ('Clothing', 'Men and women clothing, fashion, and accessories'),
                                               ('Books', 'Books, e-books, and stationery'),
                                               ('Home & Kitchen', 'Home appliances, kitchenware, and household items'),
                                               ('Sports', 'Sporting goods, sportswear, and equipment'),
                                               ('Toys & Games', 'Toys, board games, and children products'),
                                               ('Beauty', 'Cosmetics, skincare, and personal care products'),
                                               ('Automotive', 'Car accessories, tools, and automotive parts'),
                                               ('Health', 'Health products, supplements, and wellness items'),
                                               ('Jewelry', 'Rings, necklaces, bracelets, and watches'),
                                               ('Garden', 'Gardening tools, plants, and outdoor items'),
                                               ('Pet Supplies', 'Pet food, toys, and accessories'),
                                               ('Office Supplies', 'Stationery, office equipment, and organizers'),
                                               ('Footwear', 'Shoes, boots, sandals, and sports shoes'),
                                               ('Bags', 'Handbags, backpacks, and luggage'),
                                               ('Music', 'Musical instruments, records, and audio devices'),
                                               ('Video Games', 'Gaming consoles, video games, and accessories'),
                                               ('Baby Products', 'Baby clothes, toys, and care items'),
                                               ('Furniture', 'Home furniture, office furniture, and decor'),
                                               ('Groceries', 'Food, beverages, and household grocery items');



INSERT INTO products (category_id, name, description, price, stock) VALUES
                                                                        (1, 'Smartphone X200', 'Latest smartphone with 6.5 inch display', 699.99, 50),
                                                                        (1, 'Laptop Pro 15', 'High performance laptop with 16GB RAM', 1299.99, 30),
                                                                        (1, 'Wireless Earbuds', 'Bluetooth earbuds with noise cancellation', 99.99, 100),
                                                                        (1, 'Smartwatch Series 5', 'Fitness tracking smartwatch', 199.99, 75),
                                                                        (1, '4K LED TV 55 inch', 'Ultra HD television with smart features', 799.99, 20),
                                                                        (2, 'Men T-Shirt Classic', 'Cotton t-shirt in various colors', 19.99, 200),
                                                                        (2, 'Women Dress Summer', 'Lightweight summer dress', 39.99, 150),
                                                                        (2, 'Men Jeans Slim Fit', 'Denim jeans for men', 49.99, 120),
                                                                        (2, 'Women Jacket', 'Warm jacket for winter', 89.99, 80),
                                                                        (2, 'Unisex Hoodie', 'Comfortable hoodie for all seasons', 29.99, 180),
                                                                        (3, 'Novel: The Great Adventure', 'Fiction novel about adventures', 14.99, 250),
                                                                        (3, 'Science Book: Physics Basics', 'Introduction to physics', 24.99, 100),
                                                                        (3, 'Cookbook: Easy Recipes', 'Simple recipes for daily meals', 19.99, 80),
                                                                        (3, 'Children Book: Fun Tales', 'Illustrated storybook for kids', 9.99, 300),
                                                                        (3, 'Notebook A5', 'Lined notebook for school and office', 4.99, 400),
                                                                        (4, 'Blender Pro 1000', 'High power kitchen blender', 59.99, 60),
                                                                        (4, 'Coffee Maker Deluxe', 'Automatic coffee machine', 79.99, 50),
                                                                        (4, 'Vacuum Cleaner 2000W', 'Powerful home vacuum cleaner', 129.99, 40),
                                                                        (4, 'Microwave Oven 25L', 'Compact microwave oven', 89.99, 70),
                                                                        (4, 'Knife Set Stainless', 'Professional kitchen knife set', 49.99, 90),
                                                                        (5, 'Yoga Mat Pro', 'Non-slip yoga mat', 29.99, 100),
                                                                        (5, 'Football Official', 'Standard size football', 24.99, 150),
                                                                        (5, 'Tennis Racket', 'Lightweight tennis racket', 89.99, 60),
                                                                        (5, 'Running Shoes', 'Comfortable running shoes', 59.99, 80),
                                                                        (5, 'Dumbbell Set', 'Adjustable dumbbells for strength training', 79.99, 50),
                                                                        (6, 'Building Blocks Set', 'Educational toy for kids', 39.99, 120),
                                                                        (6, 'Puzzle 1000 pieces', 'Challenging jigsaw puzzle', 19.99, 200),
                                                                        (6, 'Board Game: Adventure Quest', 'Family board game', 29.99, 80),
                                                                        (6, 'Toy Car Set', 'Set of 5 miniature cars', 14.99, 150),
                                                                        (6, 'Stuffed Animal Bear', 'Soft toy for children', 9.99, 180),
                                                                        (7, 'Lipstick Red', 'Long lasting red lipstick', 19.99, 100),
                                                                        (7, 'Face Cream', 'Moisturizing facial cream', 29.99, 70),
                                                                        (7, 'Perfume Eau de Toilette', 'Floral scent perfume', 49.99, 50),
                                                                        (7, 'Shampoo Anti-Dandruff', 'Cleansing shampoo for daily use', 12.99, 200),
                                                                        (7, 'Makeup Brush Set', 'Professional brush kit', 24.99, 150),
                                                                        (8, 'Car Vacuum Cleaner', 'Portable car vacuum', 39.99, 60),
                                                                        (8, 'Car Seat Cover', 'Universal car seat cover', 29.99, 100),
                                                                        (8, 'Car GPS Navigator', 'GPS device with real-time updates', 99.99, 40),
                                                                        (8, 'Car Tool Kit', 'Set of essential car tools', 49.99, 50),
                                                                        (8, 'Dash Cam HD', 'High-definition dashboard camera', 79.99, 30),
                                                                        (9, 'Vitamin C Supplement', 'Daily vitamin supplement', 14.99, 200),
                                                                        (9, 'Protein Powder', 'Whey protein for muscle building', 39.99, 120),
                                                                        (9, 'First Aid Kit', 'Compact first aid kit', 19.99, 150),
                                                                        (9, 'Yoga Ball', 'Stability exercise ball', 24.99, 100),
                                                                        (9, 'Health Tracker', 'Monitor heart rate and steps', 49.99, 80),
                                                                        (10, 'Gold Necklace', '18k gold necklace', 199.99, 20),
                                                                        (10, 'Silver Ring', '925 silver ring with stone', 49.99, 50),
                                                                        (10, 'Wrist Watch Classic', 'Analog wristwatch', 99.99, 30),
                                                                        (10, 'Bracelet Charm', 'Fashionable charm bracelet', 29.99, 100),
                                                                        (10, 'Earrings Set', 'Pair of earrings', 19.99, 150);





INSERT INTO orders (user_id, status, total_price) VALUES
                                                      (1, 'PAID', 149.98),
                                                      (2, 'PENDING', 59.99),
                                                      (3, 'SHIPPED', 79.97),
                                                      (4, 'CANCELLED', 0.00),
                                                      (5, 'PAID', 199.95),
                                                      (6, 'PAID', 49.99),
                                                      (7, 'PENDING', 129.98),
                                                      (8, 'SHIPPED', 59.98),
                                                      (9, 'PAID', 89.97),
                                                      (10, 'PAID', 299.95),
                                                      (11, 'PENDING', 39.99),
                                                      (12, 'SHIPPED', 159.96),
                                                      (13, 'PAID', 49.99),
                                                      (14, 'CANCELLED', 0.00),
                                                      (15, 'PAID', 99.98),
                                                      (16, 'PENDING', 74.97),
                                                      (17, 'PAID', 199.95),
                                                      (18, 'SHIPPED', 59.98),
                                                      (19, 'PAID', 129.97),
                                                      (20, 'PENDING', 49.99),
                                                      (1, 'PAID', 89.95),
                                                      (2, 'SHIPPED', 149.97),
                                                      (3, 'PENDING', 59.99),
                                                      (4, 'PAID', 199.95),
                                                      (5, 'SHIPPED', 79.97),
                                                      (6, 'PAID', 129.98),
                                                      (7, 'PENDING', 59.98),
                                                      (8, 'PAID', 49.99),
                                                      (9, 'SHIPPED', 199.95),
                                                      (10, 'PENDING', 99.97),
                                                      (11, 'PAID', 149.98),
                                                      (12, 'SHIPPED', 79.97),
                                                      (13, 'PAID', 59.99),
                                                      (14, 'CANCELLED', 0.00),
                                                      (15, 'PAID', 199.95),
                                                      (16, 'PENDING', 49.99),
                                                      (17, 'SHIPPED', 129.97),
                                                      (18, 'PAID', 89.98),
                                                      (19, 'PENDING', 79.97),
                                                      (20, 'SHIPPED', 149.95),
                                                      (1, 'PAID', 59.99),
                                                      (2, 'PAID', 99.97),
                                                      (3, 'SHIPPED', 149.98),
                                                      (4, 'PENDING', 49.99),
                                                      (5, 'PAID', 199.95),
                                                      (6, 'SHIPPED', 129.97),
                                                      (7, 'PAID', 79.99),
                                                      (8, 'PENDING', 59.98),
                                                      (9, 'PAID', 199.95),
                                                      (10, 'SHIPPED', 149.97),
                                                      (11, 'PAID', 89.98),
                                                      (12, 'PENDING', 49.99);






INSERT INTO order_items (order_id, product_id, quantity, price) VALUES
                                                                    (1, 1, 1, 699.99),
                                                                    (1, 3, 2, 99.99),
                                                                    (2, 6, 1, 19.99),
                                                                    (2, 7, 1, 39.99),
                                                                    (3, 2, 1, 1299.99),
                                                                    (3, 5, 2, 79.99),
                                                                    (4, 4, 1, 199.99),
                                                                    (5, 10, 1, 299.95),
                                                                    (5, 12, 1, 24.99),
                                                                    (6, 8, 3, 89.99),
                                                                    (6, 9, 1, 59.99),
                                                                    (7, 11, 2, 14.99),
                                                                    (7, 13, 1, 19.99),
                                                                    (8, 14, 1, 89.99),
                                                                    (8, 15, 2, 49.99),
                                                                    (9, 16, 1, 59.99),
                                                                    (9, 17, 1, 129.98),
                                                                    (10, 18, 1, 79.97),
                                                                    (10, 19, 1, 49.99),
                                                                    (11, 20, 2, 39.99),
                                                                    (12, 21, 1, 24.99),
                                                                    (12, 22, 1, 59.99),
                                                                    (13, 23, 1, 29.99),
                                                                    (13, 24, 2, 49.99),
                                                                    (14, 25, 1, 14.99),
                                                                    (15, 26, 3, 19.99),
                                                                    (15, 27, 1, 39.99),
                                                                    (16, 28, 1, 89.99),
                                                                    (16, 29, 2, 24.99),
                                                                    (17, 30, 1, 49.99),
                                                                    (17, 31, 1, 199.95),
                                                                    (18, 32, 1, 129.97),
                                                                    (18, 33, 2, 59.99),
                                                                    (19, 34, 1, 79.99),
                                                                    (19, 35, 1, 149.98),
                                                                    (20, 36, 1, 29.99),
                                                                    (20, 37, 2, 49.99),
                                                                    (21, 38, 1, 19.99),
                                                                    (21, 39, 1, 99.99),
                                                                    (22, 40, 1, 129.97),
                                                                    (22, 41, 1, 49.99),
                                                                    (23, 42, 2, 79.99),
                                                                    (23, 43, 1, 59.99),
                                                                    (24, 44, 1, 149.95),
                                                                    (24, 45, 1, 99.97),
                                                                    (25, 46, 1, 49.99),
                                                                    (25, 47, 2, 29.99),
                                                                    (26, 48, 1, 199.95),
                                                                    (26, 49, 1, 79.97),
                                                                    (27, 50, 1, 129.97),
                                                                    (27, 1, 1, 699.99),
                                                                    (28, 2, 2, 1299.99),
                                                                    (28, 3, 1, 99.99),
                                                                    (29, 4, 1, 199.99),
                                                                    (29, 5, 1, 79.99),
                                                                    (30, 6, 1, 19.99),
                                                                    (30, 7, 1, 39.99);




