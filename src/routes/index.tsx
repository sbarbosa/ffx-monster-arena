import loadable from '@loadable/component';
import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLayout from '../components/layout/page-layout';

const Locations = loadable(() => import('./locations'));
const LocationDetails = loadable(() => import('./location-details'));
const NotFound = loadable(() => import('routes/error/not-found'));

const AppRoutes: FC = () => (
  <BrowserRouter basename="/ffx-monster-arena">
    <Routes>
      <Route element={<PageLayout />}>
        <Route path="/" element={<Locations />} />
        <Route path="/:locationId" element={<LocationDetails />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
