import React from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Pasajero from './pasajero';
import PasajeroDetail from './pasajero-detail';
import PasajeroUpdate from './pasajero-update';
import PasajeroDeleteDialog from './pasajero-delete-dialog';

const PasajeroRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Pasajero />} />
    <Route path=":id/view" element={<PasajeroDetail />} />
    <Route path="new" element={<PasajeroUpdate />} />
    <Route path=":id/edit" element={<PasajeroUpdate />} />
    <Route path=":id/delete" element={<PasajeroDeleteDialog />} />
  </ErrorBoundaryRoutes>
);

export default PasajeroRoutes;
