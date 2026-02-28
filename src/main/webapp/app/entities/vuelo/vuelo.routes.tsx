import React from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Vuelo from './vuelo';
import VueloDetail from './vuelo-detail';
import VueloUpdate from './vuelo-update';
import VueloDeleteDialog from './vuelo-delete-dialog';

const VueloRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Vuelo />} />
    <Route path=":id/view" element={<VueloDetail />} />
    <Route path="new" element={<VueloUpdate />} />
    <Route path=":id/edit" element={<VueloUpdate />} />
    <Route path=":id/delete" element={<VueloDeleteDialog />} />
  </ErrorBoundaryRoutes>
);

export default VueloRoutes;
