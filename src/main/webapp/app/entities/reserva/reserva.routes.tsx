import React from 'react';
import { Route } from 'react-router-dom';
import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import Reserva from './reserva';
import ReservaDetail from './reserva-detail';
import ReservaUpdate from './reserva-update';
import ReservaDeleteDialog from './reserva-delete-dialog';

const ReservaRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<Reserva />} />
    <Route path=":id/view" element={<ReservaDetail />} />
    <Route path="new" element={<ReservaUpdate />} />
    <Route path=":id/edit" element={<ReservaUpdate />} />
    <Route path=":id/delete" element={<ReservaDeleteDialog />} />
  </ErrorBoundaryRoutes>
);

export default ReservaRoutes;
