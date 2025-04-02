const { LLaMA } = require('@huggingface/diffusers');
const accelerate = require('@huggingface/accelerate');

// Ustawienia modelu
const MODEL_ID = 'facebook/meta-llama-3.1-8b-istruct';
const CACHE_DIR = 'C:\\Users\\Admin\\.lmstudio\\models\\lmstudio-community'; // folder, w którym znajduje się model

async function main() {
	// Pobierz model
	const lla = await LLaMA.fromPretrained(MODEL_ID, { cacheDir: CACHE_DIR });

	try {
		// Wykonaj prośbę o generowanie tekstu
		const response = await lla.generate({
			prompt: 'Co to jest typy skryptów?',
			max_length: 512,
			temperature: 0.7,
			top_k: 50,
			top_p: 0.95,
			num_return_sequences: 1,
			do_sample: true,
		});

		console.log(response);
	} catch (error) {
		console.error(error);
	}
}

main();
