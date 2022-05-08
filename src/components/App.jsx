import { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import AppBar from "./AppBar";
import Container from "./Container";
const MoviesPageView = lazy(()=> import('../views/MoviesPageView'))
const HomePageView = lazy(()=> import('../views/HomePageView'))
const MovieDetailsPage = lazy(()=> import('../views/MovieDetailsPage'))
const Cast = lazy(()=> import('../components/Cast/Cast'))
const Reviews = lazy(()=> import('../components/Reviews/Reviews'))
const Spinner = lazy(()=> import('../components/Spinner/Spinner'))


export const App = () => {
  return (
    <>
    <AppBar />
      <Container>
        <Suspense fallback={<Spinner/>}>
      <Routes>
        <Route path="/" element={<HomePageView/> }/>
        <Route path='/movies' element={<MoviesPageView />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} >
          <Route path='cast' element={<Cast />} />
          <Route path='reviews' element={<Reviews />} />
      </Route>
          </Routes>
          </Suspense>
      </Container>
      </>
  );
};
