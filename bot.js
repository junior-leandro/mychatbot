const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client();

// Mensagem informando que o servidor está pronto
client.on('ready', () => {
	console.log('Client is ready!');
});

// Gera o QR-Code para conectar com o WhatsApp
client.on('qr', qr => {
	qrcode.generate(qr, { small: true });
});


client.on('message_create', message => {
	// Quando a conversa recebe a palavra "atendimento" o bot retorna as respostas abaixo
	if (message.body.toLocaleLowerCase() === 'atendimento') {
		// Mensagem retornada com as opções que podem ser escolhidas
		client.sendMessage(message.from, 'Olá, bem vindo(a)! Para agilizar seu atendimento, utilize uma das opções abaixo. Digite apenas o número da opção desejada:');
		client.sendMessage(message.from, '1. Falar sobre o assunto 1');
		client.sendMessage(message.from, '2. Falar sobre o assunto 2');
		client.sendMessage(message.from, '3. Falar sobre o assunto 3');
		client.sendMessage(message.from, '4. Falar sobre o assunto 4');
		client.sendMessage(message.from, '5. Falar sobre o assunto 5');
	}
	
	// Quando a conversa recebe "1" o bot retorna a(s) resposta(s) abaixo
	if (message.body.toLocaleLowerCase() === '1') {
		client.sendMessage(message.from, 'Mensagem a respeito do assunto 1');
	}

	// Quando a conversa recebe "2" o bot retorna a(s) resposta(s) abaixo
	if (message.body.toLocaleLowerCase() === '2') {
		client.sendMessage(message.from, 'Mensagem a respeito do assunto 2');
		client.sendMessage(message.from, '2ª Linha da mensagem a respeito do assunto 2');
	}

	// Quando a conversa recebe "3" o bot retorna a(s) resposta(s) abaixo
	if (message.body.toLocaleLowerCase() === '3') {
		client.sendMessage(message.from, 'Mensagem a respeito do assunto 3');
		// Podendo inclusive passar mais opções
		client.sendMessage(message.from, 'Para mais uma opção digite 6');
		client.sendMessage(message.from, 'Para mais uma opção digite 7');
	}

	// Quando a conversa recebe "4" o bot retorna a(s) resposta(s) abaixo
	if (message.body.toLocaleLowerCase() === '4') {
		client.sendMessage(message.from, 'Mensagem a respeito do assunto 4');
		// Pode-se pedir uma palavra também
		client.sendMessage(message.from, 'Caso queira falar sobre maçãs digite "Maçã".');
	}

	// Quando a conversa recebe "5" o bot retorna a(s) resposta(s) abaixo
	if (message.body.toLocaleLowerCase() === '5') {
		client.sendMessage(message.from, 'Mensagem a respeito do assunto 5');
		client.sendMessage(message.from, '2ª Linha da mensagem a respeito do assunto 5');
		client.sendMessage(message.from, '3ª Linha da mensagem a respeito do assunto 5');
	}

	// Sub-opção do item 3	
	if (message.body.toLocaleLowerCase() === '6') {
		client.sendMessage(message.from, 'Mensagem a respeito da opção 6 do assunto 3');
	}
	// Sub-opção do item 3	
	if (message.body.toLocaleLowerCase() === '7') {
		client.sendMessage(message.from, 'Mensagem a respeito da opção 7 do assunto 3');
	}
	
	// Sub-opção do item 4 pedindo uma palavra ao invéz de um numero
	if (message.body.toLocaleLowerCase() === 'maçã') {
		client.sendMessage(message.from, 'Maçãs são deliciosas!');
	}
	
});


client.initialize();
