import readline from 'readline';

const history = [];
let isFinished = false;

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

function ask(prompt) {
	return new Promise(resolve => rl.question(prompt, resolve));
}

async function callModel(prompt) {
	const response = await fetch('http://localhost:1234/v1/chat/completions', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			model: 'meta-llama-3-8b-instruct.Q4_K_M.gguf',
			messages: [
				{
					role: 'system',
					content: `
You are a world-renowned eccentric gourmet chef specializing in the most luxurious and extravagant Hawaiian pizzas ever created.

Your recipes are bold, creative, and infused with rare, expensive, and exclusive ingredients — such as edible gold flakes, white truffle oil, sous-vide caramelized pineapple, aged Parmigiano Reggiano, Iberico ham, and burrata made from alpine buffalo milk. You encourage exploration of avant-garde flavors while maintaining perfect balance and culinary elegance.

Your mission is to guide the user in creating the most extravagant yet delicious Hawaiian pizza imaginable. Prompt them to refine each element — crust, sauce, toppings, and presentation — with creativity, flair, and taste. Don't hesitate to propose rare pairings, high-end techniques, or theatrical serving ideas (like using volcanic rock for baking or pairing it with champagne).

Keep responses clear and focused, but never boring.
`,
				},
				...history,
				{ role: 'user', content: prompt },
			],
			temperature: 0.7,
			top_p: 0.95,
			top_k: 40,
			max_tokens: 1000,
			stream: true,
		}),
	});

	const reader = response.body.getReader();
	const decoder = new TextDecoder('utf-8');

	let answer = '';

	while (true) {
		const { done, value } = await reader.read();
		if (done) break;

		const chunk = decoder.decode(value, { stream: true });
		const lines = chunk.split('\n').filter(line => line.startsWith('data: '));

		for (const line of lines) {
			const jsonStr = line.replace(/^data: /, '');
			if (jsonStr === '[DONE]') continue;

			try {
				const parsed = JSON.parse(jsonStr);
				const content = parsed.choices?.[0]?.delta?.content || '';
				process.stdout.write(content);
				answer += content;
			} catch (err) {
				console.error('Parsing error:', err.message);
			}
		}
	}

	console.log('\n---\n');
	history.push({ role: 'user', content: prompt });
	history.push({ role: 'assistant', content: answer });

	return answer;
}

async function main() {
	console.clear();
	console.log('🍍✨ Welcome to the Interactive Experience: Aloha Royale Edition ✨🍍');
	console.log('Prepare to craft a Hawaiian pizza so luxurious, it could be framed in a culinary museum.');
	console.log(
		'Ask any follow-up questions to enhance the recipe — ingredients, exotic variations, elite techniques, or presentation fit for royalty.'
	);
	console.log('Type "summarize" when you’re ready for the final, gourmet step-by-step recipe.\n');

	await callModel(
		'Give me an extravagant Hawaiian pizza recipe worthy of a culinary museum — packed with rare ingredients, elegant technique, and outrageous luxury. I want something that could impress a billionaire and a food critic at the same time.'
	);

	while (!isFinished) {
		const userQuestion = await ask('Do you have any questions? (or type "summarize"): ');

		if (userQuestion.trim().toLowerCase() === 'summarize') {
			isFinished = true;
			await callModel('Summarize the entire recipe in a single, coherent step-by-step format.');
			rl.close();
			break;
		}

		await callModel(userQuestion);
	}
}

main().catch(console.error);
