import React from 'react';
import { MenuItem } from 'app/entities/menu-item';
import { Translate } from 'react-jhipster';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="user" to="/pasajero">
        <Translate contentKey="global.menu.entities.pasajero">Pasajero</Translate>
      </MenuItem>
      <MenuItem icon="ticket-alt" to="/reserva">
        <Translate contentKey="global.menu.entities.reserva">Reserva</Translate>
      </MenuItem>
      <MenuItem icon="plane" to="/vuelo">
        <Translate contentKey="global.menu.entities.vuelo">Vuelo</Translate>
      </MenuItem>
      <MenuItem icon="chair" to="/asiento">
        <Translate contentKey="global.menu.entities.asiento">Asiento</Translate>
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
