import React, { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Product } from './Product';

import "@splidejs/react-splide/css";

const ProductCarousel = () => {
    const [products, setProducts] = useState();
    useEffect(() => {
        (async function () {
            try {
                const response = await (await fetch('https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')).json();
                setProducts(response.products);
            } catch (error) {
                throw new Error(error);
            }
        })();
    }, []);

    let id = 0;

    return (
        <Splide aria-label="Products" options={{
            gap: '4rem',
            type: 'loop',
            perPage: 4,
            pagination: false
        }}>
            {products?.map(({ productName, photo, price }) => {
                return (
                    <SplideSlide key={id++}>
                        <Product name={productName} photoURL={photo} price={price} />
                    </SplideSlide>
                );
            })}
        </Splide>
    );
};

export default ProductCarousel;