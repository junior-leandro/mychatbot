const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

client.on('ready', () => {
	console.log('Client is ready!');
});

client.on('qr', qr => {
	qrcode.generate(qr, { small: true });
});


client.on('message_create', message => {
	if (message.body.toLocaleLowerCase() === 'ola') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'Olá, bem vindo(a). Não estou disponivel no momento.');
		client.sendMessage(message.from, 'Caso queira conversar comigo, por favor escolha uma das opções abaixo para agilizar seu atendimento. Digite apenas o número da opção desejada:');
		client.sendMessage(message.from, '1. Falar sobre a barbearia');
		client.sendMessage(message.from, '2. Falar sobre Desenvolvimento Front-End');
		client.sendMessage(message.from, '3. Falar sobre a Missão Enchei-vos');
		client.sendMessage(message.from, '4. Falar sobre a Comunidade Santo Expedito');
		client.sendMessage(message.from, '5. Falar sobre outros assuntos');
	}
	if (message.body.toLocaleLowerCase() === '1') {
		client.sendMessage(message.from, 'Gostaria de agendar um horário? Basta acessar o endereço https://irulu54.gendo.app/ e reservar o melhor dia e horario para você. Caso o assunto seja outro, por favor, escreva abaixo e aguarde, te retorno assim que possivel. Obrigado');

	}
	if (message.body.toLocaleLowerCase() === '2') {
		client.sendMessage(message.from, 'Que legal! Vamos conversar sobre o que? Pode me dar uma breve descrição do que se trata? Deste modo, assim que eu acessar o WhatsApp posso te retornar ja sabendo do que se trata. Já deu uma olhdinha no meu portifólio? http://junior.dev.br Obrigado desde ja por seu contato');

	}
	if (message.body.toLocaleLowerCase() === '3') {
		client.sendMessage(message.from, 'A Paz de Jesus e o amor de Maria seja a causa da nossa alegria todos os dias! Como posso te ajudar irmão?');

	}
	if (message.body.toLocaleLowerCase() === '4') {
		client.sendMessage(message.from, 'Que a Paz de Jesus e o amor de Maria esteja sempre em nossos corações! Como posso te ajudar irmão?');

	}
	if (message.body.toLocaleLowerCase() === '5') {
		client.sendMessage(message.from, 'Opa! Como posso te ajudar irmão?');

	}

});


client.initialize();
