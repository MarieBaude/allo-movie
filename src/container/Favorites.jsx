import React from 'react'
import Layout from '../components/layout/layout';
import MovieCard from '../components/MovieCard';

function Favorites() {
  return (
    <Layout>
      <div className=''>
				<MovieCard heading='Favorites' />
			</div>
    </Layout>
  )
}

export default Favorites