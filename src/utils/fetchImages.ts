const seenPairs = new Set<string>();

export const fetchRandomImages = async (): Promise<string[]> => {

  const generateRandomNumber = () => Math.floor(Math.random() * import.meta.env.VITE_MAX_IMAGES) + 1;

  let photoNumber: number;
  let aiNumber: number;

  let pair: string;

  do {
    photoNumber = generateRandomNumber();
    aiNumber = generateRandomNumber();

    pair = `photo-${photoNumber}:ai-${aiNumber}`;
  } while (seenPairs.has(pair));

  seenPairs.add(pair);

  const photoUrl = `${import.meta.env.VITE_S3_BUCKET_URL}/Photos/${photoNumber}.jpg`;
  const aiUrl = `${import.meta.env.VITE_S3_BUCKET_URL}/AI/${aiNumber}.jpg`;

  return [photoUrl, aiUrl].sort(() => Math.random() - 0.5);
};

export const resetSeenPairs = () => {
  seenPairs.clear();
};
