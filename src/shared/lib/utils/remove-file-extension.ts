export function removeFileExtension(fileName: string) {
  return fileName.split('.').slice(0, -1).join('.');
}
