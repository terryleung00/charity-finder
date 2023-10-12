import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const Search = (): JSX.Element => {
	const [searchInput, setSearchInput] = useState('');
	const CauseList = [
		'aapi-led',
		'adoption',
		'afghanistan',
		'animals',
		'art',
		'athletics',
		'autism',
		'black-led',
		'buddhism',
		'cancer',
		'cats',
		'christianity',
		'climate',
		'conservation',
		'coronavirus',
		'culture',
		'dance',
		'disabilities',
		'disease',
		'dogs',
		'education',
		'environment',
		'filmandtv',
		'food-security',
		'freepress',
		'gender-equality',
		'health',
		'hinduism',
		'housing',
		'humans',
		'hurricane-ian',
		'immigrants',
		'indigenous-led',
		'indigenous-peoples',
		'islam',
		'judaism',
		'justice',
		'latine-led',
		'legal',
		'lgbt',
		'libraries',
		'mental-health',
		'museums',
		'music',
		'oceans',
		'parks',
		'poverty',
		'racial-justice',
		'radio',
		'refugees',
		'religion',
		'research',
		'science',
		'seniors',
		'space',
		'theater',
		'transgender',
		'ukraine',
		'veterans',
		'votingrights',
		'water',
		'wildfires',
		'wildlife',
		'women-led',
		'womens-health',
		'youth',
	];
	return (
		<>
			<header>
				<nav className='py-6 bg-slate-700 font-ubuntu'>
					<div className='container mx-auto items-center justify-around md:flex md:flex-wrap'>
						<a href='/'>
							<div className='flex justify-center w-full items-center lg:w-14'>
								<span className='self-center text-2xl text-white font-bold whitespace-nowrap'>
									Charity Finder
								</span>
								<img className='w-10 h-10 mr-3' src='/src/assets/logo.png' />
							</div>
						</a>
						<div className='drop-shadow-md mt-4 px-4 md:my-auto'>
							<div className='relative'>
								<button
									type='button'
									className='absolute inset-y-0 right-0 flex items-center pr-3.5'
									onClick={() => {
										console.log(searchInput);
									}}
								>
									<img className='w-5 h-5' src='/src/assets/search.svg' />
								</button>
								<input
									type='text'
									list='searchInput'
									className='px-4 py-3 border border-gray-300 rounded-md w-full lg:w-[28rem] hover:outline outline-1 outline-[#32C8BB] focus:outline outline-offset-0'
									placeholder='Find a charity'
									onChange={(e) => {
										if(e.nativeEvent instanceof InputEvent){
											setSearchInput(e.target.value);
										} else {
											location.href=`/search/${e.target.value}`
										}
									}}
								/>
								<datalist id='searchInput'>
									{CauseList.map((cause) => {
										return (
											<option key={cause} value={cause}>
												{cause}
											</option>
										);
									})}
								</datalist>
							</div>
						</div>
						<div className='flex mt-6 justify-center md:my-auto'>
							<a href='/favorites'>
								<button
									type='button'
									className='space-x-2 items-center border-0 rounded-full p-3 bg-white hover:bg-[#E2E2E2] duration-300'
								>
									<img src='/src/assets/favorites.svg' />
								</button>
							</a>
						</div>
					</div>
				</nav>
			</header>
			<Outlet />
		</>
	);
};

export default Search;