import { FC } from 'react';
import CartDropdown from './cart-dropdown/CartDropdown';
import ProductItem from './ProductItem';
import { useGetProductsQuery } from '../../../store/product/product.api';
import { ImageGrid } from '../../spinner/Spinner';
import { IProduct } from '../../../store/product/product.types';

const Home: FC = () => {
	const { data, error, isLoading } = useGetProductsQuery(6);

	return (
		<div>
			<div className='flex justify-between items-center mb-10'>
				<h1 className='text-2xl text-green-900 font-medium'>
					Let&apos;s find your products!
				</h1>
				<CartDropdown />
			</div>

			{isLoading &&
				<div className='w-screen h-screen'>
					<ImageGrid />
				</div>
			}

			{error &&
				<h3 className='text-red'>
					Something going wrong: {error}
				</h3>}

			<div className='flex flex-wrap justify-between'>
				{data?.map((product: IProduct) => (
					<ProductItem key={product.id} product={product} />
				))}
			</div>
		</div >
	);
};

export default Home;