export async function urlToObjectURL(imageUrl: string | URL) {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}
