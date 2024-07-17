import { redirect } from 'react-router-dom';
import Dashboard from './dashboard/dashboard';
import Team from './team/team';
import Events from './events/events';
export const routes = [
  { index: true, loader: () => redirect('dashboard') },
  { path: 'dashboard', element: <Dashboard />, text: 'Dashboard' },
  { path: 'team', element: <Team />, text: 'Team' },
  { path: 'events', element: <Events />, text: 'Events' }
];
