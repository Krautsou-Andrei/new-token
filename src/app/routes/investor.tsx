import { InvestorPage } from '@/pages/investor-page/investor-page';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/investor')({
  component: RouteComponent,
});

function RouteComponent() {
  return <InvestorPage />;
}
