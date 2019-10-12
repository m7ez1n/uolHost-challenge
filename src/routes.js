import React from 'react';
import { Switch, Route } from 'react-router-dom';

// importar páginas depois

export default function Routes() {
  return (
    <Switch>
      <Route path='caminho pra colocar' exact component={/** nome da pagina */} />
    </Switch>
  );
}