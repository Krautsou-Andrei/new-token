export const isFetchError = (error: unknown): error is { status: number } => {
  return typeof error === 'object' && error !== null && 'status' in error;
};

export const repeatRequest = async <T>(
  callback: () => Promise<T>,
  retries: number = 10,
  delay: number = 2000
): Promise<T> => {
  try {
    const result = await callback();

    if (result instanceof Response && result.status === 429) {
      const error = new Error('Rate limit exceeded. Status: 429') as Error & {
        status?: number;
      };
      error.status = 429;
      throw error;
    }

    return result;
  } catch (error) {
    if (isFetchError(error) && error.status === 429 && retries > 0) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      return repeatRequest(callback, retries - 1, delay);
    }

    throw error;
  }
};
