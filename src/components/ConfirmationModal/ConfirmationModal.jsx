import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import CheckoutItem from '../CheckoutItem/CheckoutItem';
import CrossSellItem from '../CrossSellItem/CrossSellItem';
import './ConfirmationModal.scss';

const ConfirmationModal = () => {
  const data2 = {
    "data": {
        "hits": [
            {
                "type": "cross_sell_products",
                "attributes": {
                    "applies_to": [
                        {
                            "relationship_type": "ACCESSORY",
                            "product_id": 362950
                        }
                    ],
                    "product": {
                        "attributes": {
                            "_es_score": null,
                            "brand": {
                                "name": "Nelson"
                            },
                            "catalogue_number": "95902580-25",
                            "first_activated_at": "2020-08-04T17:06:28.137326+02:00",
                            "main_image": {
                                "image_sizes": {
                                    "large": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-1-800.jpg",
                                    "medium": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-1-400.jpg",
                                    "original": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-1-1500.jpg",
                                    "small": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-1-100.jpg",
                                    "thumbnail": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-1-50.jpg"
                                },
                                "image_type": "MAIN",
                                "media_source": "neleos",
                                "media_type": "IMAGE"
                            },
                            "media": [
                                {
                                    "image_sizes": {
                                        "large": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-1-800.jpg",
                                        "medium": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-1-400.jpg",
                                        "original": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-1-1500.jpg",
                                        "small": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-1-100.jpg",
                                        "thumbnail": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-1-50.jpg"
                                    },
                                    "image_type": "MAIN",
                                    "media_source": "neleos",
                                    "media_type": "IMAGE"
                                },
                                {
                                    "image_sizes": {
                                        "large": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-2-800.jpg",
                                        "medium": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-2-400.jpg",
                                        "original": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-2-1500.jpg",
                                        "small": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-2-100.jpg",
                                        "thumbnail": "https://pictures.nelson.nl/images/productimages/9/95/959/95902580-25/95902580-25-2-50.jpg"
                                    },
                                    "image_type": "ALTERNATE",
                                    "media_source": "neleos",
                                    "media_type": "IMAGE"
                                }
                            ],
                            "name": "Nelson 3-pack Socks",
                            "price": {
                                "available_max_regular_price": {
                                    "amount": 7.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 7,99",
                                    "pre_decimal_str": "7"
                                },
                                "available_max_sale_price": {
                                    "amount": 7.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 7,99",
                                    "pre_decimal_str": "7"
                                },
                                "available_min_regular_price": {
                                    "amount": 7.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 7,99",
                                    "pre_decimal_str": "7"
                                },
                                "available_min_sale_price": {
                                    "amount": 7.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 7,99",
                                    "pre_decimal_str": "7"
                                },
                                "is_discounted": false,
                                "max_regular_price": {
                                    "amount": 7.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 7,99",
                                    "pre_decimal_str": "7"
                                },
                                "max_sale_price": {
                                    "amount": 7.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 7,99",
                                    "pre_decimal_str": "7"
                                },
                                "min_regular_price": {
                                    "amount": 7.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 7,99",
                                    "pre_decimal_str": "7"
                                },
                                "min_sale_price": {
                                    "amount": 7.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 7,99",
                                    "pre_decimal_str": "7"
                                }
                            },
                            "product_attributes": {
                                "orderable_shoe_size_eu": [
                                    "40-46",
                                    "36-42"
                                ],
                                "shoe_size_eu": [
                                    "40-46",
                                    "36-42"
                                ]
                            },
                            "product_classification": "Sokken",
                            "product_collections": [],
                            "product_id": 357428,
                            "product_sku": "nls-95902580-25",
                            "product_type": "ShoeAccessory",
                            "rollup_attribute_set": "SHOE_SIZE",
                            "rollup_attributes": [
                                "shoe_size_eu"
                            ],
                            "slug": "nelson-3-pack-sokken",
                            "state": "ORDERABLE",
                            "structure": "PARENT"
                        },
                        "id": 357428,
                        "type": "products"
                    }
                }
            },
            {
                "type": "cross_sell_products",
                "attributes": {
                    "applies_to": [
                        {
                            "relationship_type": "MAINTENANCE",
                            "product_id": 362950
                        }
                    ],
                    "product": {
                        "attributes": {
                            "_es_score": null,
                            "brand": {
                                "name": "Bama"
                            },
                            "catalogue_number": "91108500-99",
                            "first_activated_at": "2012-06-22T00:00:00+02:00",
                            "main_image": {
                                "image_sizes": {
                                    "large": "https://pictures.nelson.nl/images/productimages/9/91/911/91108500-99/91108500-99-1-800.jpg",
                                    "medium": "https://pictures.nelson.nl/images/productimages/9/91/911/91108500-99/91108500-99-1-400.jpg",
                                    "original": "https://pictures.nelson.nl/images/productimages/9/91/911/91108500-99/91108500-99-1-1500.jpg",
                                    "small": "https://pictures.nelson.nl/images/productimages/9/91/911/91108500-99/91108500-99-1-100.jpg",
                                    "thumbnail": "https://pictures.nelson.nl/images/productimages/9/91/911/91108500-99/91108500-99-1-50.jpg"
                                },
                                "image_type": "MAIN",
                                "media_source": "neleos",
                                "media_type": "IMAGE"
                            },
                            "media": [
                                {
                                    "image_sizes": {
                                        "large": "https://pictures.nelson.nl/images/productimages/9/91/911/91108500-99/91108500-99-1-800.jpg",
                                        "medium": "https://pictures.nelson.nl/images/productimages/9/91/911/91108500-99/91108500-99-1-400.jpg",
                                        "original": "https://pictures.nelson.nl/images/productimages/9/91/911/91108500-99/91108500-99-1-1500.jpg",
                                        "small": "https://pictures.nelson.nl/images/productimages/9/91/911/91108500-99/91108500-99-1-100.jpg",
                                        "thumbnail": "https://pictures.nelson.nl/images/productimages/9/91/911/91108500-99/91108500-99-1-50.jpg"
                                    },
                                    "image_type": "MAIN",
                                    "media_source": "neleos",
                                    "media_type": "IMAGE"
                                }
                            ],
                            "name": "Bama Shoe Deodorant",
                            "price": {
                                "available_max_regular_price": {
                                    "amount": 6.75,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "75",
                                    "formatted": "€ 6,75",
                                    "pre_decimal_str": "6"
                                },
                                "available_max_sale_price": {
                                    "amount": 6.75,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "75",
                                    "formatted": "€ 6,75",
                                    "pre_decimal_str": "6"
                                },
                                "available_min_regular_price": {
                                    "amount": 6.75,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "75",
                                    "formatted": "€ 6,75",
                                    "pre_decimal_str": "6"
                                },
                                "available_min_sale_price": {
                                    "amount": 6.75,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "75",
                                    "formatted": "€ 6,75",
                                    "pre_decimal_str": "6"
                                },
                                "is_discounted": false,
                                "max_regular_price": {
                                    "amount": 6.75,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "75",
                                    "formatted": "€ 6,75",
                                    "pre_decimal_str": "6"
                                },
                                "max_sale_price": {
                                    "amount": 6.75,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "75",
                                    "formatted": "€ 6,75",
                                    "pre_decimal_str": "6"
                                },
                                "min_regular_price": {
                                    "amount": 6.75,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "75",
                                    "formatted": "€ 6,75",
                                    "pre_decimal_str": "6"
                                },
                                "min_sale_price": {
                                    "amount": 6.75,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "75",
                                    "formatted": "€ 6,75",
                                    "pre_decimal_str": "6"
                                }
                            },
                            "product_classification": "Onderhoud",
                            "product_collections": [],
                            "product_id": 69165,
                            "product_sku": "200000260211",
                            "product_type": "Standard",
                            "rollup_attribute_set": null,
                            "slug": "bama-onderhoud",
                            "state": "ORDERABLE",
                            "structure": "STANDALONE"
                        },
                        "id": 69165,
                        "type": "products"
                    }
                }
            },
            {
                "type": "cross_sell_products",
                "attributes": {
                    "applies_to": [
                        {
                            "relationship_type": "ACCESSORY",
                            "product_id": 362950
                        }
                    ],
                    "product": {
                        "attributes": {
                            "_es_score": null,
                            "brand": {
                                "name": "Van Lier"
                            },
                            "catalogue_number": "84013510-63",
                            "first_activated_at": "2017-03-06T00:00:00+01:00",
                            "main_image": {
                                "image_sizes": {
                                    "large": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-1-800.jpg",
                                    "medium": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-1-400.jpg",
                                    "original": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-1-1500.jpg",
                                    "small": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-1-100.jpg",
                                    "thumbnail": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-1-50.jpg"
                                },
                                "image_type": "MAIN",
                                "media_source": "neleos",
                                "media_type": "IMAGE"
                            },
                            "media": [
                                {
                                    "image_sizes": {
                                        "large": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-1-800.jpg",
                                        "medium": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-1-400.jpg",
                                        "original": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-1-1500.jpg",
                                        "small": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-1-100.jpg",
                                        "thumbnail": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-1-50.jpg"
                                    },
                                    "image_type": "MAIN",
                                    "media_source": "neleos",
                                    "media_type": "IMAGE"
                                },
                                {
                                    "image_sizes": {
                                        "large": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-2-800.jpg",
                                        "medium": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-2-400.jpg",
                                        "original": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-2-1500.jpg",
                                        "small": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-2-100.jpg",
                                        "thumbnail": "https://pictures.nelson.nl/images/productimages/8/84/840/84013510-63/84013510-63-2-50.jpg"
                                    },
                                    "image_type": "ALTERNATE",
                                    "media_source": "neleos",
                                    "media_type": "IMAGE"
                                }
                            ],
                            "name": "Van Lier R6050",
                            "price": {
                                "available_max_regular_price": {
                                    "amount": 69.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 69,99",
                                    "pre_decimal_str": "69"
                                },
                                "available_max_sale_price": {
                                    "amount": 69.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 69,99",
                                    "pre_decimal_str": "69"
                                },
                                "available_min_regular_price": {
                                    "amount": 69.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 69,99",
                                    "pre_decimal_str": "69"
                                },
                                "available_min_sale_price": {
                                    "amount": 69.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 69,99",
                                    "pre_decimal_str": "69"
                                },
                                "is_discounted": false,
                                "max_regular_price": {
                                    "amount": 69.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 69,99",
                                    "pre_decimal_str": "69"
                                },
                                "max_sale_price": {
                                    "amount": 69.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 69,99",
                                    "pre_decimal_str": "69"
                                },
                                "min_regular_price": {
                                    "amount": 69.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 69,99",
                                    "pre_decimal_str": "69"
                                },
                                "min_sale_price": {
                                    "amount": 69.99,
                                    "currency": "EUR",
                                    "currency_symbol": "€",
                                    "currency_symbol_html": "&#8364;",
                                    "decimal_mark": ",",
                                    "decimal_str": "99",
                                    "formatted": "€ 69,99",
                                    "pre_decimal_str": "69"
                                }
                            },
                            "product_attributes": {
                                "color": "Cognac",
                                "length": [
                                    "95 cm",
                                    "110 cm"
                                ],
                                "orderable_length": [
                                    "95 cm"
                                ],
                                "outer_material": "Leer"
                            },
                            "product_classification": "Riem",
                            "product_collections": [
                                "kleding-accessoires-7"
                            ],
                            "product_id": 69083,
                            "product_sku": "nls-84013510-63",
                            "product_type": "Belt",
                            "rollup_attribute_set": "LENGTH",
                            "rollup_attributes": [
                                "length"
                            ],
                            "slug": "van-lier-r6050-riem-cognac",
                            "state": "ORDERABLE",
                            "structure": "PARENT"
                        },
                        "id": 69083,
                        "type": "products"
                    }
                }
            }
        ],
        "product_collections": []
    },
    "links": {
        "first": "http://<host>/v0/product-catalogue/commerce-ctx/products?page%5Bnumber%5D=1&page%5Bsize%5D=10&channel_instance_id=2",
        "last": "http://<host>/v0/product-catalogue/commerce-ctx/products?page%5Bnumber%5D=1&page%5Bsize%5D=10&channel_instance_id=2",
        "next": null,
        "prev": null,
        "self": "http://<host>/v0/product-catalogue/commerce-ctx/products?page%5Bnumber%5D=1&page%5Bsize%5D=10&channel_instance_id=2"
    },
    "meta": {
        "page": 1,
        "page_size": 10,
        "took": 4,
        "total_items": 3,
        "total_pages": 1
    }
  }
  const data = data2.data.hits;
  // console.log(data)
  return (
    <div className='modal'>
      <div className='modal-content'>
        <header className='modal-header'>
          <i className='fas fa-check'></i>
          <h3>Toegevoegd aan je winkelmandje!</h3>
          <span className='close'>&times;</span>
        </header>
        <CheckoutItem />
        <CustomButton className='custom-button'>
          Naar winkelmandje
        </CustomButton>
        <CustomButton className='custom-button inverted-gray'>
          Verder shoppen
        </CustomButton>
        <CrossSellItem />
      </div>
    </div>
  );
};

export default ConfirmationModal;
