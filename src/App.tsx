import CharityDetail from './components/CharityDetail';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';
import FavoriteCharities from './components/FavoriteCharities';
import { useEffect, useState } from 'react';
import CharityList from './components/CharityList';

interface Charity {
	coverImageUrl: string;
	description: string;
	ein: number;
	location: string;
	logoCloudinaryId: string;
	logoUrl: string;
	matchedTerms: Array<string>;
	name: string;
	profileUrl: string;
	slug: string;
	tags: Array<string>;
}

function App() {
	const [favorites, setFavorites] = useState<Charity[]>([]);

	useEffect(() => {
		const storedFavorites = JSON.parse(
			localStorage.getItem('favorites') || '[]'
		);
		setFavorites(storedFavorites);
	}, []);

	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<Search />}>
						<Route index element={<Home />} />
						<Route
							path={`/charity/:id`}
							element={
								<CharityDetail
									favorites={favorites}
									setFavorites={setFavorites}
								/>
							}
						/>
						<Route
							path='/favorites'
							element={<FavoriteCharities favorites={favorites} />}
						/>
						<Route
							path={`/search/:cause`}
							element={<CharityList homePage={false} charityList={[]} />}
						/>
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;