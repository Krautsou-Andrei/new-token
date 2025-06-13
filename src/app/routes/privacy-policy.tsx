import PrivacyPolicyPage from '@/pages/privacy-policy-page/privacy-policy-page';

import { createFileRoute } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts/routes';

export const Route = createFileRoute(ROUTES.PRIVACY_POLICY)({
  component: PrivacyPolicyPage,
});
