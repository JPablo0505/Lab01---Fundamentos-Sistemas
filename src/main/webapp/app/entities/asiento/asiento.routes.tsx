import React from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Asiento from './asiento';
import AsientoDetail from './asiento-detail';
import AsientoUpdate from './asiento-update';
import AsientoDeleteDialog from './asiento-delete-dialog';

const AsientoRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Asiento />} />
    <Route path=":id/view" element={<AsientoDetail />} />
    <Route path="new" element={<AsientoUpdate />} />
    <Route path=":id/edit" element={<AsientoUpdate />} />
    <Route path=":id/delete" element={<AsientoDeleteDialog />} />
  </ErrorBoundaryRoutes>
);

export default AsientoRoutes;
