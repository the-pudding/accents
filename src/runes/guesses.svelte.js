// shared reactive store of the user's locked-in map guesses, keyed by level index
// { lat, lng, answer, correct, miles } for a chosen location (lat/lng null if "I truly have no idea")
export const guesses = $state([]);

export function setGuess(i, guess) {
	guesses[i] = guess;
}

export function getGuess(i) {
	return guesses[i];
}
