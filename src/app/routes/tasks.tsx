import { TasksPage } from '@/pages/tasks-page';

import { createFileRoute } from '@tanstack/react-router';

import { ROUTES } from '@/shared/consts';

export const Route = createFileRoute(ROUTES.TASKS)({
  component: TasksPage,
});
